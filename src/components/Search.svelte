<script>
  import Clear from './Clear'
  import Icon from './Icon'
  import Input from './Input'

	export let value = ''
  export let typeahead = false;
  export let onChange = noop
  export let onClear = noop
  export let onSearch = noop

  $: isEmpty = value.toString().trim() === '';

  $: showSearch = !typeahead || isEmpty;

  $: iconCount = showSearch && !isEmpty ? 2 : 1

  let nodes = {}

  function noop() {}

  function clear() {
    value = ''

    onChange(value)

    onClear()
  }

  function onKeydown(e) {
    if(e.key === 'Escape') {
      clear()
    }

    if(!typeahead && e.key === 'Enter') {
      onSearch(value, e)
    }
  }

  function onInput(e) {
    onChange(value, e)
  }

  function onClickClearIcon(e) {
    clear()

    nodes.input.focus()
  }

  function onClickSearchIcon(e) {
    if(!typeahead) {
      onSearch(value, e)
    }

    nodes.input.focus()
  }
</script>

<style>
  :root {
    --search-spacing: var(--size-sm);
    --search-icon-size: calc(
      var(--icon-sm-size) +
      var(--search-spacing)
    );
    --search-width: 248px;
  }

	.search {
    --clear-hover-background-color: var(--color-gray-70);

    display: inline-flex;
    position: relative;
    width: var(--search-width);
	}

  .search--typeahead-false .search {
    cursor: pointer;
  }

  .search--icon-count-1 :global(input) {
    padding-right: calc(
      var(--input-h-padding) +
      var(--search-icon-size)
    );
  }

  .search--icon-count-2 :global(input) {
    padding-right: calc(
      var(--input-h-padding) +
      var(--search-icon-size) * 2
    );
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
    padding: 0 var(--input-h-padding);
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
  }

  .clear-icon {
    pointer-events: initial;
  }

  .search-icon {
    margin-left: var(--search-spacing);
    pointer-events: initial;
  }

  :global(input) {
    width: 100%;
  }
</style>

<div class="search search--icon-count-{iconCount} search--typeahead-{typeahead}">
  <Input
    class="foo"
    bind:node={nodes['input']}
    bind:value={value}
    on:input={onInput}
    on:keydown={onKeydown}
  />
  <div class="icons">
    {#if !isEmpty}
      <span
        class="clear-icon"
        bind:this={nodes['clearIcon']}
        on:click={onClickClearIcon}
      >
        <Clear />
      </span>
    {/if}
    {#if showSearch}
      <span
        class="search-icon"
        bind:this={nodes['searchIcon']}
        on:click={onClickSearchIcon}
      >
        <Icon icon="search" />
      </span>
    {/if}
  </div>
</div>
