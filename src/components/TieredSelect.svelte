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

    // the List component instance
    let list = null

    // to update arrow direction
    $: open = visible

    // for O(1) lookups
    $: ids = value.reduce(reduceIds, {})

    // $: opts = search ? options.filter(onSearch || searchFn) : options

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

    // function isSelected(option, ids) {
    //   return ids[getId(option)] || false
    // }

    function onListSelect(selection, e) {

    }

    function onClickClear(e) {
      value = []

      search = ''

      e.stopPropagation()
    }

    function onKeydown(e) {
      if (list) {
        list.onKeydown(e)
      }

      if (e.key === 'ArrowLeft') {
      } else if (e.key === 'ArrowRight') {
      } else if(e.key === 'Backspace' && !e.repeat) {
      }
    }

    function onAfterHide(e) {
      refs.trigger.focus()

      afterHide(e)
    }

    afterUpdate(function() {
      window.dispatchEvent(new Event('resize'))
    })
  </script>

  <style>
    .tiered-select {}

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
    <div slot="trigger" class="tiered-select" class:disabled class:block bind:this={refs.trigger}>
      <Button dropdown {open}>
        foo
      </Button>
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

              <!-- <MultiSelectOption value={option} selected={isSelected(option, ids)}>
                {getLabel(option)}
              </MultiSelectOption> -->
            </slot>
          {/each}
        </List>
      </Card>
    </div>
  </OverlayTrigger>
