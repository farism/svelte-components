<script>
  import { matchwidth } from '../actions/matchwidth'
  import Button from './Button'
  import Card from './Card'
  import Clear from './Clear'
  import List from './List'
  import OverlayTrigger from './OverlayTrigger'

  export let refs = {}
  export let afterHide = noop
  export let afterShow = noop
  export let beforeShow = noop
  export let beforeHide = noop
  export let hideDelay = 100
  export let block = false
  export let label = ''
  export let placeholder = ''
  export let placement = 'bottom-left'
  export let search = null
  export let showDelay = 0
  export let trigger = 'click'
  export let value = null
  export let visible = false

  $: open = visible

  let overlayTrigger

  function noop() {}

  function onListSelect(selection, e) {
    value = selection.value

    overlayTrigger.hide(e)
  }

  function onClickClear(e) {
    value = null
  }

  function onAfterHide(e) {
    refs.trigger.focus()

    afterHide(e)
  }
</script>

<style>
  .select {
    display: inline-block;
    position: relative;
  }

  .select.block {
    display: block;
  }

  .clear-overlay {
    pointer-events: none;
  }

  .overlay {}

  .overlay :global(.list) {
    max-height: 312px;
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
  bind:afterHide={onAfterHide}
  bind:afterShow
  bind:hideDelay
  bind:showDelay
  {block}
>
  <div slot="trigger" class="select" class:block>
    <Button dropdown bind:ref={refs.trigger} {open} {block}>
      {label || placeholder}
    </Button>
    {#if value}
      <div class="clear-overlay">
        <Clear sm on:click={onClickClear} />
      </div>
    {/if}
  </div>
  <div
    slot="overlay"
    class="overlay"
    use:matchwidth={{ target: refs.overlayTrigger.trigger }}
  >
    <Card>
      <List bind:refs={refs.list} autofocus onSelect={onListSelect} {search}>
        <slot />
      </List>
    </Card>
  </div>
</OverlayTrigger>
