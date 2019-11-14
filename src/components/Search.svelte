<script>
  import Clear from './Clear'
  import Icon from './Icon'
  import Input from './Input'

  export let ref = null
	export let value = ''
  export let typeahead = false;
  export let onSubmit = noop

  $: isEmpty = value.toString().trim() === '';

  $: showSearch = !typeahead || isEmpty;

  $: iconCount = showSearch && !isEmpty ? 2 : 1

  function noop() {}

  function clear() {
    value = ''

    onSubmit(value)
  }

  function onKeydown(e) {
    if(e.key === 'Escape') {
      clear()
    }

    if(!typeahead && e.key === 'Enter') {
      onSubmit(value, e)
    }
  }


  function onClickClearIcon(e) {
    clear()

    ref.focus()
  }

  function onClickSearchIcon(e) {
    if(!typeahead) {
      onSubmit(value, e)
    }

    ref.focus()
  }
</script>

<style>
	.search {
    --clear-hover-background-color: var(--color-gray-70);

    display: inline-flex;
    position: relative;
    width: var(--search-width);
	}

  .search--icon-count-1 :global(input) {
    padding-right: calc(var(--input-padding-h) + var(--search-icon-size));
  }

  .search--icon-count-2 :global(input) {
    padding-right: calc(var(--input-padding-h) +var(--search-icon-size) * 2);
  }

  .search--icon-count-2 {
    cursor: pointer;
  }

  .icons {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: flex-end;;
    left: 0;
    padding: 0 var(--input-padding-h);
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
  }

  .clear-icon {
    pointer-events: initial;
  }

  .search-icon {
    color: var(--color-gray-70);
    line-height: 0;
    margin-left: var(--search-spacing);
    pointer-events: initial;
    transition: 0.2s color ease-out;
  }

  .search-icon.has-value:not(.typeahead) {
    cursor: pointer;
  }

  .search-icon.has-value:not(.typeahead):hover {
    color: var(--color-gray-95);
  }

  :global(input) {
    width: 100%;
  }
</style>

<div class="search search--icon-count-{iconCount}">
  <Input
    bind:ref
    bind:value
    on:keydown={onKeydown}
  />
  <div class="icons">
    {#if !isEmpty}
      <span class="clear-icon" on:click={onClickClearIcon}>
        <Clear sm />
      </span>
    {/if}
    {#if showSearch}
      <span
        class="search-icon"
        class:typeahead
        class:has-value={!isEmpty}
        on:click={onClickSearchIcon}
      >
        <Icon icon="search" sm />
      </span>
    {/if}
  </div>
</div>
