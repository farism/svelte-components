<script>
    import OverlayTrigger from './OverlayTrigger'

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
    .popover {

    }
  </style>

  <div class="popover">
    <OverlayTrigger
      bind:trigger
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
        <slot name="message">
          <div class="popover-content"></div>
        </slot>
      </div>
    </OverlayTrigger>
  </div>
