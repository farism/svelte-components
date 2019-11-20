<svelte:options accessors={true} />

<script context="module">
  export const LIST_CONTEXT = {};
</script>

<script>
  import { createEventDispatcher, onDestroy, onMount, setContext, tick } from 'svelte'
  import { get, writable } from 'svelte/store'

	import { scrollElementIntoView } from '../utils/scrollElementIntoView'
	import { checkSlot } from '../utils/checkSlot'
	import ListItem from './ListItem'
  import Search from './Search'

  export let refs = {}
  export let autofocus = false
  export let autohighlight = true
  export let multiple = false
  export let search = null

  const dispatch = createEventDispatcher()

  const highlighted = writable(null)

  const hasHeaderSlot = checkSlot($$props, 'header')

  const hasFooterSlot = checkSlot($$props, 'footer')

  const items = []

  function noop() {}

  function registerItem(item) {
    items.push(item)

    highlighted.update(function(current) {
      return current || item
    })

    onDestroy(function() {
      items.splice(items.indexOf(item), 1)
    })
  }

  function setHighlighted(item, shouldScroll = false) {
    highlighted.set(item)

    if (shouldScroll) {
      scrollToHighlighted()
    }
  }

  function getHighlightedIndex() {
    return Math.max(0, items.indexOf(get(highlighted)))
  }

  function setHighlightedToPrevItem() {
    const curIndex = getHighlightedIndex()

    // find the previous item, skipping over groups
    const prevIndex = items.reduceRight(function(acc, item, i) {
      const isGroup = items[i].group

      return isGroup || acc < curIndex ? acc : i
    }, curIndex)

    setHighlighted(items[prevIndex], true)
  }

  function setHighlightedToNextItem() {
    const curIndex = getHighlightedIndex()

    // find the next item, skipping over groups
    const nextIndex = items.reduce(function(acc, item, i) {
      const isGroup = items[i].group

      return isGroup || acc > curIndex ? acc : i
    }, curIndex)

    setHighlighted(items[nextIndex], true)
  }

  function scrollToHighlighted() {
    const index = getHighlightedIndex()

    const element = refs.items.children[index]

    scrollElementIntoView(index, element)
  }

  function onSelect(selection, e) {
    dispatch('select', { selection, e })
  }

  export function getHighlighted() {
    return get(highlighted)
  }

  export function onKeydown(e) {
    if (e.key === 'ArrowUp') {
      e.preventDefault()

      setHighlightedToPrevItem()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()

      setHighlightedToNextItem()
    } else if (e.key === 'Enter') {
      if (highlighted) {
        e.preventDefault()

        onSelect(get(highlighted), e)
      }
    }
  }

  onMount(async function() {
    if (autofocus) {
      await tick()

      if(refs.search) {
        refs.search.focus()
      } else {
        refs.self.focus()
      }
    }
  })

  setContext(LIST_CONTEXT, {
    autohighlight,
    highlighted,
    multiple,
    onSelect,
    registerItem,
    setHighlighted,
  })
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
    padding: var(--list-items-padding);
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

<div class="list" bind:this={refs.self} on:keydown={onKeydown} tabindex="-1">
	{#if search !== null}
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


