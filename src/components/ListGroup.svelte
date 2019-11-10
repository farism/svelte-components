<script>
  import { getContext } from 'svelte'

  import { LIST_CONTEXT } from './List'

  export let ref = null
  export let value = null

  const item = { group: true , value }

  const { registerItem } = getContext(LIST_CONTEXT)

  registerItem(item)
</script>

<style>
	.list-group {
    align-items: center;
    background-color: var(--list-item-background-color);
    display: flex;
    font-weight: 700;
    height: var(--list-item-height);
    padding: var(--list-item-padding);
	}
</style>

<div class="list-group" bind:this={ref}>
  <div class="text">
    <slot />
  </div>
</div>
