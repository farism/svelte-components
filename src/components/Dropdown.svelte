<script>
  import {onMount,tick} from 'svelte'

  import { matchwidth } from '../actions/matchwidth'
  import Button from './Button'
  import Card from './Card'
  import List from './List'
  import OverlayTrigger from './OverlayTrigger'

  export let refs = {}
  export let afterHide = noop
  export let afterShow = noop
  export let beforeHide = noop
  export let beforeShow = noop
  export let block = false
  export let hideDelay = 100
  export let label = ''
  export let onSelect = noop
  export let placement = 'bottom-left'
  export let primary = false
  export let search = ''
  export let searchable = false
  export let showDelay = 0
  export let trigger = 'click'
  export let visible = false

  $: open = visible

  let overlayTrigger = null

  function noop() {}

  async function autofocus(node) {
    await tick()

    if(refs.list.search) {
      refs.list.search.focus()
    } else {
      refs.list.root.focus()
    }
  }

  function onListSelect(value, e) {
    onSelect(value, e)

    overlayTrigger.hide(e)
  }
</script>

<style>
  .dropdown {}

  .block,
  .block .trigger {
    display: inline-flex;
    flex: 1 1 auto;
  }

  .trigger {}

  .overlay {}

  .overlay :global(.list) {
    --list-max-height: var(--dropdown-overlay-max-height);
    --list-max-width: var(--dropdown-overlay-max-width);

    outline: none;
  }
</style>

<div class="dropdown" class:block bind:this="{refs.root}">
  <OverlayTrigger
    bind:this={overlayTrigger}
    bind:refs={refs.overlayTrigger}
    bind:placement
    bind:trigger
    bind:visible
    bind:beforeHide
    bind:beforeShow
    bind:afterHide
    bind:afterShow
    bind:hideDelay
    bind:showDelay
  >
    <div slot="trigger" class="trigger">
      <Button dropdown {block} {primary} {open} bind:this="{refs.trigger}">
        {label}
      </Button>
    </div>
    <div
      slot="overlay"
      class="overlay"
      use:autofocus
      use:matchwidth={{ target: refs.overlayTrigger.trigger }}
    >
      <Card>
        <List {search} {searchable} onSelect={onListSelect} bind:refs={refs.list}>
          <slot />
        </List>
      </Card>
    </div>
  </OverlayTrigger>
</div>
