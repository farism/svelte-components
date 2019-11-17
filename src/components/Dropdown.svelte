<script>
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
  export let search = null
  export let searchable = false
  export let showDelay = 0
  export let trigger = 'click'
  export let visible = false

  $: open = visible

  let overlayTrigger

  function noop() {}

  function onListSelect({ value }, e) {
    onSelect(value, e)

    overlayTrigger.hide(e)
  }

  function onAfterHide(e) {
    refs.trigger.focus()

    afterHide(e)
  }
</script>

<style>
  .dropdown {}

  .overlay {}

  .overlay :global(.list) {
    --list-max-height: var(--dropdown-overlay-max-height);

    outline: none;
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
  bind:afterHide
  bind:afterShow
  bind:hideDelay
  bind:showDelay
  {block}
>
  <div slot="trigger" class="dropdown" class:block>
    <Button bind:ref={refs.trigger} dropdown {block} {primary} {open}>
      {label}
    </Button>
  </div>
  <div
    slot="overlay"
    class="overlay"
    use:matchwidth={{ target: refs.overlayTrigger.trigger }}
  >
    <Card>
      <List bind:refs={refs.list} onSelect={onListSelect} autofocus {search} {searchable}>
        <slot />
      </List>
    </Card>
  </div>
</OverlayTrigger>
