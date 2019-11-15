<script>
  import { flyplacement } from '../transitions/flyplacement'
  import ArrowContainer from './ArrowContainer'
  import OverlayTrigger from './OverlayTrigger'

  export let refs = {}
  export let block = false
  export let placement = 'top'
  export let trigger = 'hover'
  export let message = ''
  export let style = ''
  export let beforeHide = noop
  export let beforeShow = noop
  export let afterHide = noop
  export let afterShow = noop

  function noop() {}
</script>

<style>
  .tooltip {}

  .trigger {
    display: inline-flex;
  }

  .block {
    display: flex;
  }

  .overlay {
    --arrow-color: transparent;
    --arrow-color-fill: var(--tooltip-background-color);

    pointer-events: none;

    /* these are order dependent */
    filter: var(--tooltip-webkit-dropshadow);
    filter: var(--tooltip-ms-dropshadow);
    -ms-filter: var(--tooltip-ms-dropshadow);
    -webkit-filter: var(--tooltip-webkit-dropshadow);
  }

  .message {
    background-color: var(--tooltip-background-color);
    border-radius: var(--tooltip-border-radius);
    color: var(--tooltip-color);
    cursor: default;
    display: inline-block;
    font-size: var(--tooltip-font-size);
    max-width: var(--tooltip-max-width);
    padding: var(--tooltip-padding-v) var(--tooltip-padding-h);
  }
</style>

<div class="tooltip" {style}>
  <OverlayTrigger
    bind:refs={refs.overlayTrigger}
    bind:placement
    bind:trigger
    bind:beforeHide
    bind:beforeShow
    bind:afterHide
    bind:afterShow
  >
    <div slot="trigger" class="trigger" class:block>
      <slot slot="trigger" name="trigger" />
    </div>
    <div slot="overlay" class="overlay" transition:flyplacement={{ placement }}>
      <ArrowContainer {placement} target={refs.overlayTrigger.trigger}>
        <span class="message">
          <slot name="message" />
        </span>
      </ArrowContainer>
    </div>
  </OverlayTrigger>
</div>
