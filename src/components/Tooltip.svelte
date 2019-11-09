<script>
  import Bubble from './Bubble'
  import OverlayTrigger from './OverlayTrigger'

  export let placement = 'top'
  export let trigger = 'hover'
  export let message = ''
  export let beforeHide = noop
  export let beforeShow = noop
  export let afterHide = noop
  export let afterShow = noop

  let overlayTriggerRefs = {}

  function noop() {}
</script>

<style>
  .tooltip {}
</style>

<div class="tooltip">
  <OverlayTrigger
    bind:refs={overlayTriggerRefs}
    bind:placement
    bind:beforeHide
    bind:beforeShow
    bind:afterHide
    bind:afterShow
  >
    <div slot="trigger">
      <slot slot="trigger" name="trigger" />
    </div>
    <div slot="overlay">
      <Bubble {placement} target={overlayTriggerRefs.trigger}>
        <slot name="message" />
      </Bubble>
    </div>
  </OverlayTrigger>
</div>
