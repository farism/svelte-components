<script>
  import { tick } from 'svelte'

  import { matchwidth } from '../actions/matchwidth'
  import { isEventSource } from '../utils/isEventSource'
  import Arrow from './Arrow'
  import Card from './Card'
  import Clear from './Clear'
  import Ellipses from './Ellipses'
  import List from './List'
  import ListItem from './ListItem'
  import OverlayTrigger from './OverlayTrigger'
  import Token from './Token'

  export let refs = { tokenClear: [] }
  export let afterHide = noop
  export let afterShow = noop
  export let beforeHide = noop
  export let beforeShow = noop
  export let block = false
  export let disabled = false
  export let hideDelay = 100
  export let onSearch = null
  export let onSelect = noop
  export let options = []
  export let placeholder = ''
  export let placement = 'bottom-left'
  export let search = ''
  export let showDelay = 0
  export let trigger = 'click'
  export let value = null
  export let visible = false

  let list;

  let opts = []

  $: open = visible

  $: opts = search ? options.filter(onSearch || searchFn) : options

  function noop() {}

  function searchFn(option) {
    return getLabel(option).includes(search)
  }

  function getId(option) {
    return typeof option === 'string' ? option : option.id
  }

  function getLabel(option) {
    return typeof option === 'string' ? option : option.label
  }

  function onClickClearToken(e, index) {
    value = value.filter(function(_, i) {
      return i !== index
    })
  }

  function onClickClearAll(e) {
    e.preventDefault()

    value = []
    search = ''
  }

  function onListSelect(selection, e) {
    if (value.includes(selection)) {
      value.filter(function(val) {
        return selection !== val
      })
    } else {
      value.push(val)
    }

    refs.input.focus()
  }

  function onBeforeShow(e) {
    if (isEventSource(refs.clearAll, e)) {
      return false
    }

    beforeShow(e)
  }

  function onBeforeHide(e) {
    if (isEventSource(refs.clearAll, e)) {
      return false
    }

    beforeHide(e)
  }

  function onAfterHide(e) {
    refs.input.focus()

    afterHide(e)
  }

  function onKeydown(e) {
    if (list) {
      list.onKeydown(e)
    }
  }
</script>

<style>
  .multi-select {
    --multi-select-border-color: var(--color-gray-50);
    --multi-select-border-color-hover: var(--color-gray-50);
    --multi-select-border-color-disabled: var(--color-gray-20);
    --overlay-trigger-display-mode: block;

    border: 1px solid var(--multi-select-border-color);
    box-sizing: border-box;
    display: block;
    min-height: 32px;
    padding: 0 var(--size-md);
    width: 248px;
  }

  .multi-select.block {
    width: 100%;
  }

  .multi-select.disabled {
    --multi-select-border-color: var(--multi-select-border-color-disabled);
  }

  .trigger {}

  .overlay {}

  .tokens {
    align-items: flex-start;
    display: flex;
  }

  .token {
    margin: var(--size-2xs) var(--size-xs) var(--size-2xs) 0;
  }

  .token-list {
    align-self: flex-start;
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    margin: var(--size-2xs) 0;
    min-width: 0;
    width: 100%;
  }

  .icons {
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    height: 32px;
  }

  .search {
    flex: 1;
    max-width: 100%;
    min-width: 100%;;
  }

  input {
    background-color: transparent;
    border: 0;
    height: 24px;
    padding: 0;
    width: 100%;
  }

  .clear-all {
    margin-right: var(--size-sm);
  }

  .arrow {
    --arrow-color: var(--color-gray-75);
    --arrow-color-fill: var(--color-gray-75);

    line-height: 0;
  }

  .overlay :global(.list) {
    max-height: 312px;
    outline: none;
  }
</style>

<div class="multi-select" class:disabled class:block bind:this="{refs.root}">
  <OverlayTrigger
    bind:refs={refs.overlayTrigger}
    bind:placement
    bind:trigger
    bind:visible
    bind:beforeHide={onBeforeHide}
    bind:beforeShow={onBeforeShow}
    bind:afterHide={onAfterHide}
    bind:afterShow
    bind:hideDelay
    bind:showDelay
    {block}
  >
    <div slot="trigger" class="trigger">
      <div class="tokens" bind:this={refs.trigger}>
        <div class="token-list">
          {#each value as val, i}
            <div class="token">
              <slot name="token">
                <Token {disabled} onClear={e => onClickClearToken(e, i)}>
                  <Ellipses>
                    {getLabel(val)}
                  </Ellipses>
                </Token>
              </slot>
            </div>
          {/each}
          <div class="token">
            <input
              bind:this={refs.input}
              bind:value={search}
              on:keydown={onKeydown}
              {placeholder}
              {disabled}
            />
          </div>
        </div>
        <div class="icons">
          <div class="clear-all">
            <Clear sm bind:ref={refs.clearAll} on:click={onClickClearAll} />
          </div>
          <div class="arrow">
            <Arrow down width={8} height={4} />
          </div>
        </div>
      </div>
    </div>
    <div
      slot="overlay"
      class="overlay"
      use:matchwidth={{ target: refs.overlayTrigger.trigger }}
    >
      <Card>
        <List bind:this={list} bind:refs={refs.list} onSelect={onListSelect} multiple>
          {#each opts as option, i}
            <slot>
              <ListItem value={option}>
                {getLabel(option)}
              </ListItem>
            </slot>
          {/each}
        </List>
      </Card>
    </div>
  </OverlayTrigger>
</div>
