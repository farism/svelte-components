<script>
  import { afterUpdate } from 'svelte'
  import cssVars from 'svelte-css-vars'
  import isBoolean from 'lodash/isBoolean'
  import isDate from 'lodash/isDate'
  import isNumber from 'lodash/isNumber'

  import { getBoundingClientRect } from '../utils/getBoundingClientRect'
  import Arrow from './Arrow'
  import Card from './Card'
  import DateSelect from './DateSelect'
  import Switch from './Switch'

  export let refs = {
    cells: {
      headers: [],
      body: [],
    }
  }
  export let data = []
  export let footers = []
  export let columns = []

  $: styleVars = refs
    .cells
    .headers
    .map(getBoundingClientRect)
    .map(function(rect) {
      return rect.width
    })
    .reduce(function(acc, width, i) {
      acc[`col${i}Width`] = `${width}px`;

      return acc
    }, {})

  let resizePageX

  function getCellType({ type, transform = val => val }, value) {
    if (type) {
      return type
    }

    const transformed = transform(value)

    if (isBoolean(transformed)) {
      return 'boolean'
    } else if (isDate(transformed)) {
      return 'date'
    } else if (isNumber(transformed)) {
      return 'number'
    }
  }

  function onMouseDownResize(e) {
    resizePageX = e.pageX
    window.addEventListener('mouseup', onMouseUpResize)
    window.addEventListener('mousemove', onMouseMoveResize)
    console.log('down', {e})
  }

  function onMouseMoveResize(e) {
    console.log('move',{e})
  }

  function onMouseUpResize(e) {
    window.removeEventListener('mouseup', onMouseUpResize)
    window.removeEventListener('mousemove', onMouseMoveResize)
    console.log('up',{e})
  }

  afterUpdate(function() {

  })
</script>

<style>
  .table {
    --table-header-background-color: var(--color-gray-20);
    --table-header-background-color-hover: var(--color-gray-30);
    --table-cell-background-color: transparent;
    --table-sort-arrow-color: var(--color-gray-55);
    --table-sort-arrow-color-hover: var(--color-gray-75);
    --table-sort-arrow-color-active: var(--color-blue-65);
    --date-input-border-color: transparent;

    border-radius: 2px;
    overflow-x: auto;
    overflow-y: auto;
  }

  .header-row {
    background-color: var(--table-header-background-color);
    border-bottom: 1px solid var(--color-gray-40);
    display: inline-flex;
  }

  .header-row:hover .sort {
    opacity: 1;
  }

  .header-cell {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex: 1 1 auto;
    padding: var(--size-lg);
    position: relative;
  }

  .header-cell + .header-cell {
    border-left: 1px solid var(--color-gray-40);
  }

  .header-cell.sortable {
    cursor: pointer;
  }

  .header-cell.sortable:hover {
    background: var(--table-header-background-color-hover);
  }

  .header-cell:hover .asc-arrow {
    --arrow-color: var(--table-sort-arrow-color-hover);
    --arrow-color-fill: var(--arrow-color);
  }

  .header-cell.asc:hover .desc-arrow {
    --arrow-color: var(--table-sort-arrow-color-hover);
    --arrow-color-fill: var(--arrow-color);
  }

  .header-cell.desc:hover .asc-arrow,
  .header-cell.desc:hover .desc-arrow {
    --arrow-color: var(--table-sort-arrow-color);
    --arrow-color-fill: var(--arrow-color);
  }

  .header-cell.asc .asc-arrow {
    --arrow-color: var(--table-sort-arrow-color-active);
    --arrow-color-fill: var(--arrow-color);
  }

  .header-cell.desc .desc-arrow {
    --arrow-color: var(--table-sort-arrow-color-active);
    --arrow-color-fill: var(--arrow-color);
  }

  .resize {
    cursor: ew-resize;
    display: flex;
    height: 100%;
    justify-content: center;
    right: -7px;
    position: absolute;
    top: 0;
    width: 12px;
    z-index: 1;
  }

  .resize:hover .resize-bar {
    width: 6px;
  }

  .resize-bar {
    background-color: var(--color-blue-50);
    width: 0px;
    height: 100%;
    transition: 0.1s all ease-out;
  }

  .label {
    flex: 1 1 auto;
  }

  .sort {
    --arrow-color: var(--table-sort-arrow-color);
    --arrow-color-fill: var(--table-sort-arrow-color);

    align-items: center;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    width: 16px;
    height: 12px;
    justify-content: space-between;
    margin-left: 8px;
    opacity: 0;
  }

  .asc-arrow,
  .desc-arrow {
    display: inline-flex;
  }

  .body-row {
    display: inline-flex;
  }

  .body-row + .body-row {
    border-top: 1px solid var(--color-gray-40);
  }

  .body-cell {
    box-sizing: border-box;
    flex: 0 0 auto;
    padding: var(--size-lg);
  }

  .footer-row {
    display: inline-flex;
  }

  .footer-cell {

  }
</style>

<Card>
  <div class="table" use:cssVars={styleVars}>
    <div class="header-row">
      {#each columns as column, i}
        <div
          class="header-cell"
          class:sortable={column.sort !== false}
          class:asc={column.sort === 'asc'}
          class:desc={column.sort === 'desc'}
          bind:this={refs.cells.headers[i]}
        >
          <div class="label">
            {column.label}
          </div>
          {#if column.sort !== false}
            <div class="sort">
              <div class="asc-arrow">
                <Arrow up width={8} height={4} />
              </div>
              <div class="desc-arrow">
                <Arrow down width={8} height={4} />
              </div>
            </div>
          {/if}
          {#if i < columns.length - 1}
            <div
              class="resize"
              on:mousedown={onMouseDownResize}
              on:mouseup={onMouseUpResize}
            >
              <div class="resize-bar"></div>
            </div>
          {/if}
        </div>
      {/each}
    </div>
    {#each data as row, i}
      <div class="body-row">
        {#each columns as column, j}
          <div
            class="body-cell {getCellType(column, row[column.key])}"
            bind:this={refs.cells.body[i]}
            style="width: var(--col{j}Width);"
          >
            {#if isDate(row[column.key])}
              <DateSelect value={row[column.key]} />
            {:else if isBoolean(row[column.key])}
              <Switch value={row[column.key]} />
            {:else}
              {row[column.key]}
            {/if}
          </div>
        {/each}
      </div>
    {/each}
    <div class="footer-row">
      {#each footers as footer}
        <div class="footer-cell" bind:this={refs.cells.footer[i]}>
          {footer}
        </div>
      {/each}
    </div>
  </div>
</Card>
