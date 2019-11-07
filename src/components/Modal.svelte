<script>
  import { fade } from 'svelte/transition';

  import { portal } from '../actions/portal'
  import { checkSlot } from '../utils/checkSlot'
  import Card from './Card'
  import Clear from './Clear'

  export let ref = null
  export let onClose = noop
  export let open = false
  export let scrimClose = true;

  const hasNotation = checkSlot($$props, 'notation')
  const hasActions = checkSlot($$props, 'actions')

  function noop() {}

  function onClickScrim(e) {
    if(scrimClose) {
      open = false

      onClose(e)
    }
  }

  function onClickDismiss(e) {
    open = false

    onClose(e)
  }
</script>

<style>
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
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    min-width: var(--modal-container-min-width);
    max-height: var(--modal-container-max-height);
    padding: var(--modal-container-padding);
    position: relative;
    z-index: 2;
  }

  .header {
    align-items: center;
    display: flex;
    flex: 0 0 auto;
  }

  .dismiss {
    flex: 0 0 auto;
  }

  .title {
    flex: 1 1 auto;
  }

  .body {
    flex: 1 1 auto;
    margin-top: var(--modal-body-margin-top);
    overflow: auto;
  }

  .footer {
    align-items: center;
    display: flex;
    margin-top: var(--modal-footer-margin-top);
  }

  .notation {
    display: flex;
    flex: 1 1 auto;
  }

  .buttons {
    display: flex;
    flex: 0 0 auto;
  }

  .buttons :global(button) {
    margin-left: var(--modal-buttons-spacing);
  }
</style>

{#if open}
  <div class="modal" bind:this={ref} use:portal transition:fade>
    <div class="layout">
      <div class="scrim" on:click={onClickScrim} />
      <Card>
        <div class="container">
          <div class="header">
            <div class="title">
              <slot name="title" />
            </div>
            <div class="dismiss" on:click={onClickDismiss}>
              <Clear lg />
            </div>
          </div>
          <div class="body">
            <slot name="body" />
          </div>
          {#if hasNotation || hasActions}
            <div class="footer">
              <div class="notation">
                <slot name="notation" />
              </div>
              <div class="buttons">
                <slot name="buttons" />
              </div>
            </div>
          {/if}
        </div>
      </Card>
    </div>
  </div>
{/if}
