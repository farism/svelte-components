<script>
    import { afterUpdate, tick } from 'svelte'
    import { get } from 'svelte/store'

    import { matchwidth } from '../actions/matchwidth'
    import { isEventSource } from '../utils/isEventSource'
    import Breadcrumbs from './Breadcrumbs'
    import Button from './Button'
    import Card from './Card'
    import Clear from './Clear'
    import Ellipses from './Ellipses'
    import Icon from './Icon'
    import List from './List'
    import ListItem from './ListItem'
    import OverlayTrigger from './OverlayTrigger'

    export let refs = { tokenClear: [] }
    export let afterHide = noop
    export let afterShow = noop
    export let beforeHide = noop
    export let beforeShow = noop
    export let block = false
    export let disabled = false
    export let hideDelay = 100
    export let leafOnly = true
    export let onSearch = null
    export let onSelect = noop
    export let options = []
    export let placeholder = ''
    export let placement = 'bottom-left'
    export let search = ''
    export let showDelay = 0
    export let trigger = 'click'
    export let value = []
    export let visible = false

    // the OverlayTrigger component instance
    let overlayTrigger = null

    // the List component instance
    let list = null

    $: path = options.filter(opt => value.includes(getId(opt)))

    $: label = buildLabel(path)

    $: viewPath = path

    $: breadcrumbs = ['Home', ...viewPath.map(getLabel)]

    $: groupId = viewPath.length > 0
        ? getNextGroupId(viewPath[viewPath.length - 1])
        : null

    $: groupOptions = []

    $: if (search !== '') {
      let searchedOptions = options.filter(function(opt) {
        return getLabel(opt).toLowerCase().includes(search.toLowerCase())
      })

      if (leafOnly) {
        searchedOptions = searchedOptions.filter(function(opt){
          return !getNextGroupId(opt)
        })
      }

      groupOptions = searchedOptions.map(function(opt) {
        return {
          ...opt,
          label: buildLabel(derivePath(opt))
        }
      })
    } else {
      groupOptions = options.filter(function(opt) {
        return getGroupId(opt) === groupId
      })
    }

    $: isSearching = search !== ''

    $: open = visible

    function noop() {}

    function derivePath(option, path = []) {
      const parent = options.find(function(opt) {
        return opt.nextGroupId === option.groupId
      })

      if (parent) {
        return derivePath(parent, [option, ...path])
      } else {
        return [option, ...path]
      }
    }

    // default label builder
    function buildLabel(path) {
      return path.map(getLabel).join(' > ')
    }

    // the default search function if none is provided
    function searchFn(option) {
      return getLabel(option).includes(search)
    }

    // the default getGroupId function if none is provided
    function getGroupId(option) {
      return option.groupId
    }

    // the default getId function if none is provided
    function getId(option) {
      return option.id
    }

    // the default getNextGroupId function if none is provided
    function getNextGroupId(option) {
      return option.nextGroupId
    }

    // the default getLabel function if none is provided
    function getLabel(option) {
      return option.label
    }

    function onClickClear(e) {
      e.stopPropagation()

      value = []

      search = ''

      refs.trigger.focus()
    }

    function onClickNextTier(option, e) {
      e.stopPropagation()

      viewPath = [...viewPath, option]
    }

    function onClickCrumb(index, e) {
      e.stopPropagation()

      viewPath = viewPath.splice(0, index)
    }

    function onListSelect({ detail: { selection, e } }) {
      if (leafOnly && getNextGroupId(selection.value)) {
        viewPath = [...viewPath, selection.value]
      } else {
        if (isSearching) {
          value = derivePath(selection.value).map(getId)
        } else {
          value = [...viewPath, selection.value].map(getId)
        }

        overlayTrigger.hide(e)
      }
    }

    function onKeydown(e) {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()

        viewPath = viewPath.slice(0, -1)

        // value = value.slice(0, -1)
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()

        const highlighted = list.getHighlighted()

        if (getNextGroupId(highlighted.value)) {
          viewPath = [...viewPath, highlighted.value]
        }
      }
    }

    function onKeydownTrigger(e) {
      if (list) {
        list.onKeydown(e)
      }

      onKeydown(e)
    }

    function onAfterHide() {
      viewPath = path

      search = ''

      refs.trigger.focus()

      afterHide()
    }

    afterUpdate(function() {
      window.dispatchEvent(new Event('resize'))
    })
  </script>

  <style>
    .tiered-select {
      max-width: 248px;
      position: relative;
    }

    .clear-overlay {
      align-items: center;
      bottom: 0;
      display: flex;
      justify-content: flex-end;
      left: 0;
      pointer-events: none;
      position: absolute;
      right: 0;
      top: 0;
    }

    .clear {
      margin-right: calc(var(--size-lg) + var(--size-sm) * 2);
      pointer-events: all;
    }

    .breadcrumbs {
      background-color: var(--color-gray-20);
      display: flex;
      flex: 1 1 auto;
      margin-top: var(--size-sm);
      max-height: 68px;
      overflow-y: auto;
      padding: var(--size-xs) var(--size-lg);
    }

    .home {
      height: var(--icon-size-sm);
    }

    .hidden {
      display: none;
    }

    .tiered-select :global(.button .label) {
      margin-right: var(--size-xl);
    }

    .overlay :global(.list) {
      max-height: 312px;
      max-width: 248px;
      outline: none;
    }

    .overlay :global(.breadcrumbs) {
      flex-wrap: wrap;
    }

    .overlay :global(.list-item .right .button) {
      --button-border-color: transparent;
    }
  </style>

  <OverlayTrigger
    bind:this={overlayTrigger}
    bind:refs={refs.overlayTrigger}
    bind:placement
    bind:trigger
    bind:visible
    bind:beforeHide
    bind:beforeShow
    bind:afterHide={onAfterHide}
    bind:afterShow
    bind:hideDelay
    bind:showDelay
    {block}
  >
    <div
      slot="trigger"
      class="tiered-select"
      class:disabled
      on:keydown={onKeydownTrigger}
    >
      <Button bind:ref={refs.trigger} dropdown {open}>
        {label}
      </Button>
      {#if value.length}
        <div class="clear-overlay">
          <div class="clear">
            <Clear on:click={onClickClear} sm />
          </div>
        </div>
      {/if}
    </div>
    <div
      slot="overlay"
      class="overlay"
      use:matchwidth={{ target: refs.overlayTrigger.trigger }}
    >
      <Card on:keydown={onKeydown}>
        {#each [groupOptions] as k (k)}
          <List
            bind:search
            bind:this={list}
            bind:refs={refs.list}
            on:select={onListSelect}
            on:keydown={onKeydown}
            autofocus
          >
            <div slot="header" class="breadcrumbs" class:hidden={groupId === null || isSearching}>
              <Breadcrumbs crumbs={breadcrumbs} let:crumb let:index>
                <div class:home={index === 0} on:click={(e) => onClickCrumb(index, e)}>
                  {#if index === 0}
                    <Icon sm icon="home" />
                  {:else}
                    {crumb}
                  {/if}
                </div>
              </Breadcrumbs>
            </div>
            {#each groupOptions as option}
              <ListItem lines={10} value={option}>
                {getLabel(option)}
                <div slot="right" class:hidden={isSearching}>
                  {#if getNextGroupId(option)}
                    {#if leafOnly}
                      <Icon icon="chevron-right" />
                    {:else}
                      <Button
                        sm
                        secondary
                        icon="chevron-right"
                        on:click={(e) => onClickNextTier(option, e)}
                      />
                    {/if}
                  {/if}
                </div>
              </ListItem>
            {/each}
          </List>
        {/each}
      </Card>
    </div>
  </OverlayTrigger>
