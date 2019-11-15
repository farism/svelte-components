<script>
  import range from 'lodash/range'

  import Notation from './Notation'
  import PaginationArrow from './PaginationArrow'
  import Select from './Select'
  import SelectOption from './SelectOption'

  export let page = 1
  export let perPage = 50
  export let total = 0

  $: start = (page - 1) * perPage + 1

  $: end = page * perPage

  $: pages = Math.ceil(total / perPage)

  function onClickPrevPage(e) {
    page = Math.max(page - 1, 0)
  }

  function onClickNextPage(e) {
    page = Math.min(pages, page + 1)
  }
</script>

<style>
  .pagination {
    align-items: center;
    cursor: default;
    display: inline-flex;
  }

  .notation {
    position: relative;
    top: 1px;
  }

  .label {
    color: var(--color-gray-95);
    margin-left: var(--size-xl);
  }

  .select {
    --button-dropdown-border-color: transparent;
    --button-dropdown-border-color-hover: var(--color-gray-50);

    margin-left: var(--size-sm);
  }

  .spacer {
    height: var(--size-sm);
  }

  .select-last-page {
    background: var(--color-white-100);
    border-top: 1px solid var(--color-gray-50);
    box-shadow: var(--shadow-20);
    padding: var(--size-xs) 0;
    position: absolute;
    width: 100%;
    top: calc(100% - 1px);
  }

  .arrows {
    line-height: 0;
    margin-left: var(--size-lg);
  }

  .arrows :global(button + button) {
    margin-left: var(--size-sm);
  }
</style>

<div class="pagination">
  <div class="notation">
    <Notation pagination>
      {start} - {end} of {total}
    </Notation>
  </div>
  <div class="label">
    Page:
  </div>
  <div class="select">
    <Select label="{page}" bind:value={page}>
      {#each range(1, pages > 10 ? pages : pages + 1) as i}
        <SelectOption value={i} selected={i === page}>
          {i}
        </SelectOption>
      {/each}
      {#if pages > 10}
        <div class="select-last-page">
          <SelectOption value={pages} selected={page === pages}>
            {pages}
          </SelectOption>
        </div>
      {/if}
    </Select>
  </div>
  <div class="arrows">
    <PaginationArrow left disabled={page === 1} on:click={onClickPrevPage} />
    <PaginationArrow right disabled={page === pages} on:click={onClickNextPage} />
  </div>
</div>
