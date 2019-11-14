<script>
  import { flyplacement } from '../transitions/flyplacement'
  import ArrowContainer from './ArrowContainer'
  import OverlayTrigger from './OverlayTrigger'

  export let refs = {}
  export let placement = 'top'
  export let trigger = 'click'
  export let message = ''
  export let beforeHide = noop
  export let beforeShow = noop
  export let afterHide = noop
  export let afterShow = noop

  function noop() {}
</script>

<style>
  .popover {}

  .trigger {}

  .overlay {
    --arrow-color: transparent;
    --arrow-color-fill: var(--popover-background-color);

    filter: var(--popover-webkit-dropshadow);
    filter: var(--popover-ms-dropshadow);
    -ms-filter: var(--popover-ms-dropshadow);
    -webkit-filter: var(--popover-webkit-dropshadow);
  }

  .message {
    background-color: var(--popover-background-color);
    border-radius: var(--popover-border-radius);
    color: var(--popover-color);
    display: inline-block;
    font-size: var(--popover-font-size);
    max-width: var(--popover-max-width);
    padding: var(--popover-padding-v) var(--popover-padding-h);
  }
</style>

<div class="popover">
  <OverlayTrigger
    bind:refs={refs.overlayTrigger}
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
    <div slot="overlay" class="overlay" transition:flyplacement={{ placement }}>
      <ArrowContainer {placement} target={refs.overlayTrigger.trigger}>
        <span class="message">
          <slot name="message" />
        </span>
      </ArrowContainer>
    </div>
  </OverlayTrigger>
</div>
