<script>
  import { fade } from 'svelte/transition';
  import { easing } from 'ts-easing'

  const { inOutCubic } = easing

  import { portal } from '../actions/portal'
  import { slide } from '../transitions/slide'
  import { checkSlot } from '../utils/checkSlot'
  import Card from './Card'
  import Clear from './Clear'

  export let ref = null
  export let onClose = noop
  export let open = false
  export let scrimClose = true;

  const hasNotationSlot = checkSlot($$props, 'notation')

  const hasActionsSlot = checkSlot($$props, 'actions')

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

  .overlay {
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  }

  .wrapper {
    position: fixed;
  }

  .scrim {
    background-color: rgba(0,0,0,0.3);
    position: absolute;
    z-index: 1;
  }

  .container {
    align-items: center;
    display: flex;
    justify-content: center;
    pointer-events: none;
    position: absolute;
    z-index: 2;
  }

  .container > :global(div) {
    background-color: var(--modal-container-background-color);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    min-width: var(--modal-container-min-width);
    max-height: var(--modal-container-max-height);
    max-width: var(--modal-container-max-width);
    padding: var(--modal-container-padding);
    pointer-events: initial;
    position: relative;
    width: 100%;
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
    <div class="overlay wrapper">
      <div class="overlay scrim" on:click={onClickScrim} />
      <div class="overlay container" transition:slide="{{y: 24, duration: 500}}">
        <Card>
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
          {#if hasNotationSlot || hasActionsSlot}
            <div class="footer">
              <div class="notation">
                <slot name="notation" />
              </div>
              <div class="buttons">
                <slot name="buttons" />
              </div>
            </div>
          {/if}
        </Card>
      </div>
    </div>
  </div>
{/if}
