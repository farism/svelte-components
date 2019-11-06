<script>
  import Clear from './Clear'
  import { portal } from '../actions/portal'

  export let nodes = {}
  export let onClose = noop

  function noop() {}

  function onClickDismiss(e){
    onClose(e)
  }
</script>

<style>
  :root {
    --modal-container-background-color: var(--color-white-100);
  }

  .modal {
    position: relative;
  }

  .layout {
    align-items: center;
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
  }

  .scrim {
    background-color: rgba(0,0,0,0.3);
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
  }

  .container {
    background-color: var(--modal-container-background-color);
    position: relative;
    z-index: 2;
  }

  .header {
    display: flex;
  }

  .title {
    flex: 1 1 auto;
  }

  .dismiss {
    flex: 0 0 auto;
  }

  .body {

  }

  .footer {
    align-items: center;
    display: flex;
  }

  .actions {

  }

  .notation {

  }
</style>

<div class="modal" use:portal>
  <div class="layout">
    <div class="scrim" bind:this={nodes['scrim']} />
    <div class="container">
      <div class="header">
        <div class="title">
          <slot name="title" />
        </div>
        <div class="dismiss" on:click={onClickDismiss}>
          <Clear size="lg" />
        </div>
      </div>
      <div class="body">
        <slot name="body" />
      </div>
      <div class="footer">
        <slot name="notation" />
        <div class="actions">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>
</div>
