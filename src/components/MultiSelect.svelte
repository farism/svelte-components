<script>
  import { afterUpdate, tick } from 'svelte'

  import { matchwidth } from '../actions/matchwidth'
  import { isEventSource } from '../utils/isEventSource'
  import Arrow from './Arrow'
  import Card from './Card'
  import Clear from './Clear'
  import Ellipses from './Ellipses'
  import List from './List'
  import MultiSelectOption from './MultiSelectOption'
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

  // the currently focused token
  let focused = null

  // the List component instance
  let list = null

  // to update arrow direction
  $: open = visible

  // for O(1) lookups
  $: ids = value.reduce(reduceIds, {})

  $: opts = search ? options.filter(onSearch || searchFn) : options

  function noop() {}

  // reduce the options to an object for O(1) lookups
  function reduceIds(acc, option) {
    acc[getId(option)] = true

    return acc
  }

  // the default search function if none is provided
  function searchFn(option) {
    return getLabel(option).includes(search)
  }

  // the default getId function if none is provided
  function getId(option) {
    return typeof option === 'string' ? option : option.id
  }

  // the default getLabel function if none is provided
  function getLabel(option) {
    return typeof option === 'string' ? option : option.label
  }

  function isAlphaNumeric(str) {
    return str.length === 1 && str.match(/^[a-z0-9]+$/i)
  }

  function isSelected(option, ids) {
    return ids[getId(option)] || false
  }

  function onClickClearToken(e, index) {
    value = value.filter(function(_, i) {
      return i !== index
    })

    e.stopPropagation()

    refs.input.focus()
  }

  function onClickClearAll(e) {
    value = []

    search = ''

    e.stopPropagation()

    refs.input.focus()
  }

  function onListSelect(selection, e) {
    value = isSelected(selection.value, ids)
      ? value.filter(function(val) {
          return selection.value !== val
        })
      : [...value, selection.value]

    refs.input.focus()
  }

  function onKeydown(e) {
    if (list) {
      list.onKeydown(e)
    }

    // if we have a current search value, don't navigate any tokens
    if (search !== '') {
      return
    }

    // if there are no tokens to navigate, don't do anything
    if (value.length === '') {
      return
    }

    if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || isAlphaNumeric(e.key)) {
      focused = null
    }

    if (e.key === 'ArrowLeft') {
      if (value.length === 0) {
        return
      }

      if (focused === null) {
        focused = value.length - 1
      } else {
        focused = Math.max(0, focused - 1)
      }
    } else if (e.key === 'ArrowRight') {
      if (value.length === 0) {
        return
      }

      if (focused === value.length - 1) {
        focused = null
      } else if (focused !== null) {
        focused = Math.min(value.length - 1, focused + 1)
      }
    } else if(e.key === 'Backspace' && !e.repeat) {
      if (focused === null) {
        // we arent currently focused on a token, delete the last one
        value = value.slice(0, -1)
      } else {
        // we are focused on a token, filter it out
        value = value.filter(function(_, i) {
          return i !== focused
        })

        // if the current focused index is greater than zero, then move focused
        // to the previous token
        if (focused > 0) {
          focused = focused - 1
        } else if(value.length === 0 ) {
          // if there are no more values left to remove, then clear the focused state
          focused = null
        }
      }
    } else if(isAlphaNumeric(e.key)) {
      visible = true
    }
  }

  function onBeforeHide(e) {
    if (isEventSource(refs.trigger, e) && e instanceof MouseEvent) {
      return false
    }

    beforeHide(e)
  }

  function onAfterHide(e) {
    focused = null

    refs.input.focus()

    afterHide(e)
  }

  afterUpdate(function() {
    window.dispatchEvent(new Event('resize'))
  })
</script>

<style>
  .multi-select {
    --multi-select-border-color: var(--color-gray-50);
    --multi-select-border-color-hover: var(--color-gray-50);
    --multi-select-border-color-disabled: var(--color-gray-20);
    --overlay-trigger-display-mode: block;

    border: 1px solid var(--multi-select-border-color);
    box-sizing: border-box;
    display: inline-flex;
    min-height: 32px;
    padding: 0 var(--size-md);
    width: 248px;
  }

  .multi-select.block {
    display: flex;
    width: 100%;
  }

  .multi-select.disabled {
    --multi-select-border-color: var(--multi-select-border-color-disabled);
  }

  .multi-select:focus-within {
    border-color: var(--focus-border-color);
    box-shadow: var(--focus-box-shadow);
    outline: var(--focus-outline);
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

  .token-item {
    flex: 0 1 auto;
    margin: var(--size-2xs) var(--size-xs) var(--size-2xs) 0;
  }

  .token-item.search {
    flex: 1;
    max-width: 100%;
    min-width: 24px;;
  }

  input {
    background-color: transparent;
    border: 0;
    font-size: 14px;
    height: 24px;
    line-height: 24px;
    outline: none;
    padding: 0;
    width: 100%;
  }

  input.inactive {
    opacity: 0;
  }

  .icons {
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    height: 32px;
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

<OverlayTrigger
  bind:refs={refs.overlayTrigger}
  bind:placement
  bind:trigger
  bind:visible
  bind:beforeHide={onBeforeHide}
  bind:beforeShow
  bind:afterHide={onAfterHide}
  bind:afterShow
  bind:hideDelay
  bind:showDelay
  {block}
>
  <div slot="trigger" class="multi-select" class:disabled class:block bind:this={refs.trigger}>
    <div class="token-list">
      {#each value as val, i}
        <div class="token-item">
          <slot name="token">
            <Token
              onClear={e => onClickClearToken(e, i)}
              focused={focused === i}
              {disabled}
            >
              <Ellipses>
                {getLabel(val)}
              </Ellipses>
            </Token>
          </slot>
        </div>
      {/each}
      <div class="token-item search">
        <input
          class:inactive={focused !== null}
          bind:this={refs.input}
          bind:value={search}
          on:keydown={onKeydown}
          {placeholder}
          {disabled}
        />
      </div>
    </div>
    <div class="icons">
      {#if value.length > 0}
        <div class="clear-all">
          <Clear sm bind:ref={refs.clearAll} on:click={onClickClearAll} />
        </div>
      {/if}
      <div class="arrow">
        <Arrow down width={8} height={4} />
      </div>
    </div>
  </div>
  <div
    slot="overlay"
    class="overlay"
    use:matchwidth={{ target: refs.overlayTrigger.trigger }}
  >
    <Card>
      <List
        bind:this={list}
        bind:refs={refs.list}
        onSelect={onListSelect}
        autohover={false}
        multiple
      >
        {#each opts as option, i}
          <slot>
            <MultiSelectOption value={option} selected={isSelected(option, ids)}>
              {getLabel(option)}
            </MultiSelectOption>
          </slot>
        {/each}
      </List>
    </Card>
  </div>
</OverlayTrigger>
