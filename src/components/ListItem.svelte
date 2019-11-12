<script>
  import { getContext, onMount } from 'svelte'

  import { checkSlot } from '../utils/checkSlot'
  import Ellipses from './Ellipses'
  import { LIST_CONTEXT } from './List'

  export let ref = null
  export let active = false
  export let left = null
  export let right = null
  export let suggested = false
  export let value = null

  const hasLeftSlot = checkSlot($$props, 'left')

  const hasRightSlot = checkSlot($$props, 'right')

  const { hovered, onSelect, registerItem, setHovered } = getContext(LIST_CONTEXT)

  const item = { group: false, value }

  registerItem(item)

  function onMouseMove(e) {
    setHovered(item)
  }

  function onClick(e) {
    onSelect(item, e)
  }

  onMount(function() {
    if(active || suggested) {
      setHovered(item, true)
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
    height: var(--list-item-height);
    padding: var(--list-item-padding);
	}

  .list-item:hover,
  .hovered {
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
  class="list-item"
  class:active
  class:hovered="{$hovered === item}"
  bind:this={ref}
  on:mousemove={onMouseMove}
  on:click={onClick}
>
  {#if hasLeftSlot}
    <div class="left">
      <slot name="left" />
    </div>
  {/if}
  <div class="center">
    <Ellipses>
      <slot />
    </Ellipses>
  </div>
  {#if hasRightSlot}
    <div class="left">
      <slot name="left" />
    </div>
  {/if}
</div>
