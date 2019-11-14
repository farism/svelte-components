<script context="module">
  export const LIST_CONTEXT = {};
</script>

<script>
  import { onDestroy, setContext } from 'svelte'
  import { get, writable } from 'svelte/store'

	import { scrollElementIntoView } from '../utils/scrollElementIntoView'
	import { checkSlot } from '../utils/checkSlot'
	import ListItem from './ListItem'
  import Search from './Search'

  let className = ''

  export let refs = {}
  export let onSelect = noop
  export let search

  const hasHeaderSlot = checkSlot($$props, 'header')

  const hasFooterSlot = checkSlot($$props, 'footer')

  const items = []

  const hovered = writable(null)

  setContext(LIST_CONTEXT, { onSelect, registerItem, setHovered, hovered })

  function noop() {}

  function registerItem(item) {
    items.push(item)

    hovered.update(function(current){
      return current || item
    })

    onDestroy(function() {
      items.splice(items.indexOf(item), 1)
    })
  }

  function setHovered(item, autoScroll = false) {
    hovered.set(item)

    if (autoScroll) {
      scrollToHovered()
    }
  }

  function getHoveredIndex() {
    return Math.max(0, items.indexOf(get(hovered)))
  }

  function setHoveredToPrevItem() {
    const curIndex = getHoveredIndex()

    // find the previous item, skipping over groups
    const prevIndex = items.reduceRight(function(acc, item, i) {
      const isGroup = items[i].group

      return isGroup || acc < curIndex ? acc : i
    }, curIndex)

    setHovered(items[prevIndex], true)
  }

  function setHoveredToNextItem() {
    const curIndex = getHoveredIndex()

    // find the next item, skipping over groups
    const nextIndex = items.reduce(function(acc, item, i) {
      const isGroup = items[i].group

      return isGroup || acc > curIndex ? acc : i
    }, curIndex)

    setHovered(items[nextIndex], true)
  }

  function scrollToHovered() {
    const index = getHoveredIndex()

    const element = refs.items.children[index]

    scrollElementIntoView(index, element)
  }

  function onKeydown(e) {

    if (e.key === 'ArrowUp') {
      e.preventDefault()

      setHoveredToPrevItem()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()

      setHoveredToNextItem()
    } else if (e.key === 'Enter') {
      if (hovered) {
        e.preventDefault()

        onSelect(get(hovered), e)
      }
    }
  }

</script>

<style>
  .list {
    display: flex;
    flex-direction: column;
    max-height: var(--list-max-height);
    max-width: var(--list-max-width);
  }

	.header {
    display: flex;
    flex: 0 0 auto;
    padding: var(--list-header-padding);
  }

	.search {
    --search-width: 100%;

    display: flex;
    flex: 0 0 auto;
    padding: var(--list-search-padding);
    padding-bottom: var(--list-search-padding-bottom);
  }

	.items {
    flex: 1 1 auto;
    overflow: auto;
    margin: var(--list-items-margin);
  }

  .footer {
    border-top: var(--list-footer-border);
    display: flex;
    flex: 0 0 auto;
    justify-content: flex-end;
    padding: var(--list-footer-padding);
  }

	.header :global(.button),
  .footer :global(.button) {
    --button-font-size: var(--button-font-size-sm);
    --button-padding: 0 var(--button-padding-sm);
    --button-size: var(--button-size-sm);
  }
</style>

<div class="list" bind:this={refs.root} on:keydown={onKeydown} tabindex="-1">
	{#if search !== undefined}
		<div class="search">
			<Search typeahead bind:ref={refs.search} bind:value={search} />
		</div>
  {/if}
  {#if hasHeaderSlot}
    <div class="header">
      <slot name="header" />
    </div>
  {/if}
	<div class="items" bind:this="{refs.items}">
		<slot />
  </div>
  {#if hasFooterSlot}
    <div class="footer">
      <slot name="footer" />
    </div>
  {/if}
</div>
