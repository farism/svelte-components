<script>
  import { checkSlot } from '../utils/checkSlot'
  import Clear from './Clear'
  import Icon from './Icon'

  export let icon = ''
  export let onDismiss = null
  export let action = false
  export let error = false
  export let info = false
  export let success = false

  const hasButtonsSlot = checkSlot($$props, 'buttons')

  const iconName = icon
    || (action && 'warning-triangle-o')
    || (error && 'warning-triangle-o')
    || (info && 'info-circle-o')
    || (success && 'check-circle')

  function onClickDismiss(e) {
    onDismiss(e)
  }
</script>

<style>
  .banner {
    --button-primary-background-color-hover: var(--color-gray-95);
    --button-primary-background-color: var(--banner-accent1-color);
    --button-primary-border-color-hover: var(--button-primary-border-color);
    --button-primary-border-color: var(--color-gray-95);
    --button-primary-color-hover: var(--banner-accent1-color);
    --button-primary-color: var(--color-gray-95);
    --clear-hover-color: var(--banner-accent1-color);

    align-items: center;
    background: var(--banner-accent1-color);
    border-radius: var(--banner-border-radius);
    border-left: var(--banner-stripe-size) var(--banner-accent2-color) solid;
    box-shadow: var(--banner-box-shadow);
    display: flex;
    padding: var(--banner-padding);
    position: relative;
  }

  .action {
    --banner-accent1-color: var(--banner-accent1-color-action);
    --banner-accent2-color: var(--banner-accent2-color-action);
  }

  .error {
    --banner-accent1-color: var(--banner-accent1-color-error);
    --banner-accent2-color: var(--banner-accent2-color-error);
  }

  .info {
    --banner-accent1-color: var(--banner-accent1-color-info);
    --banner-accent2-color: var(--banner-accent2-color-info);
  }

  .success {
    --banner-accent1-color: var(--banner-accent1-color-success);
    --banner-accent2-color: var(--banner-accent2-color-success);
  }

  .icon {
    color: var(--banner-accent2-color);
    display: flex;
    flex: 0 0 auto;
    margin-right: var(--banner-spacing);
  }

  .body {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
  }

  .title {
    font-weight: bold;
  }

  .message {
    margin-top: var(--size-sm);
  }

  .buttons {
    display: flex;
    margin-left: var(--banner-spacing);
  }

  .buttons button + .buttons button {
    margin-left: var(--banner-buttons-spacing);
  }

  .dismiss {
    --clear-color: var(--banner-dismiss-background-color-hover);
    --clear-background-color-hover: var(--banner-dismiss-background-color-hover);

    margin-left: var(--banner-spacing);
  }
</style>

<div class="banner" class:action class:error class:info class:success>
  <div class="icon">
    <Icon icon={iconName} />
  </div>
  <div class="body">
    <div class="title">
      <slot name="title" />
    </div>
    <div class="message">
      <slot name="message" />
    </div>
  </div>
  {#if hasButtonsSlot}
    <div class="buttons">
      <slot name="buttons" />
    </div>
  {/if}
  {#if onDismiss}
    <div class="dismiss" on:click={onClickDismiss}>
      <Clear />
    </div>
  {/if}
</div>
