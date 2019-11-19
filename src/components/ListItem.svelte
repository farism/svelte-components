<script>
  import { getContext, onMount } from 'svelte'

  import { checkSlot } from '../utils/checkSlot'
  import Ellipses from './Ellipses'
  import { LIST_CONTEXT } from './List'

  export let ref = null
  export let active = false
  export let group = false
  export let left = null
  export let lines = 1
  export let right = null
  export let suggested = false
  export let value = null

  const hasLeftSlot = checkSlot($$props, 'left')

  const hasRightSlot = checkSlot($$props, 'right')

  const {
    autohighlight,
    highlighted,
    multiple,
    onSelect,
    registerItem,
    setHighlighted,
  } = getContext(LIST_CONTEXT)

  const item = { group, value }

  registerItem(item)

  function onClick(e) {
    onSelect({ group, value }, e)
  }

  function onMouseMove(e) {
    setHighlighted(item)
  }

  onMount(function() {
    if (autohighlight && (active || suggested)) {
      setHighlighted(item, !multiple)
    }
  })
</script>

<style>
	.list-item {
    align-items: center;
    background-color: var(--list-item-background-color);
    cursor: pointer;
    display: flex;
    font-size: var(--list-item-font-size);
    line-height: var(--list-item-line-height);
    padding: var(--list-item-padding);
	}

  .list-item:hover,
  .highlighted {
    --list-item-background-color: var(--list-item-background-color-hover);
    --list-item-color: var(--list-item-color-hover);
  }

  .list-item.active {
    --list-item-color: var(--list-item-color-active);

    font-weight: 700;
  }

  .center {
    color: var(--list-item-color);
    display: flex;
    flex: 1 1 auto;
  }

  .left,
  .right {
    display: flex;
    flex: 0 0 auto;
    line-height: 0;;
  }

  .left {
    margin-right: var(--size-sm);
  }

  .right {
    margin-left: var(--size-sm);
  }

  .left :global(.icon),
  .right :global(.icon) {
    --icon-size: var(--icon-size-sm);
  }
</style>

<div
  bind:this={ref}
  class:active
  class:highlighted="{$highlighted === item}"
  class="list-item"
  on:click={onClick}
  on:mousemove={onMouseMove}
>
  {#if hasLeftSlot}
    <div class="left">
      <slot name="left" />
    </div>
  {/if}
  <div class="center">
    <Ellipses {lines}>
      <slot />
    </Ellipses>
  </div>
  {#if hasRightSlot}
    <div class="right">
      <slot name="right" />
    </div>
  {/if}
</div>
