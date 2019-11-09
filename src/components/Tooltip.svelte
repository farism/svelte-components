<script>
  import ArrowContainer from './ArrowContainer'
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

  .trigger {}

  .overlay {
    --arrow-color: transparent;
    --arrow-color-fill: var(--tooltip-background-color);

    filter: var(--tooltip-webkit-dropshadow);
    filter: var(--tooltip-ms-dropshadow);
    -ms-filter: var(--tooltip-ms-dropshadow);
    -webkit-filter: var(--tooltip-webkit-dropshadow);
  }

  .message {
    background-color: var(--tooltip-background-color);
    border-radius: var(--tooltip-border-radius);
    color: var(--tooltip-color);
    display: inline-block;
    font-size: var(--tooltip-font-size);
    max-width: var(--tooltip-max-width);
    padding: var(--tooltip-padding-v) var(--tooltip-padding-h);
  }
</style>

<div class="tooltip">
  <OverlayTrigger
    bind:refs={overlayTriggerRefs}
    bind:placement
    bind:trigger
    bind:beforeHide
    bind:beforeShow
    bind:afterHide
    bind:afterShow
  >
    <div slot="trigger" class="trigger">
      <slot slot="trigger" name="trigger" />
    </div>
    <div slot="overlay" class="overlay">
      <ArrowContainer {placement} target={overlayTriggerRefs.trigger}>
        <span class="message">
          <slot name="message" />
        </span>
      </ArrowContainer>
    </div>
  </OverlayTrigger>
</div>
