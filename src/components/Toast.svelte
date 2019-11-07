<script>
  import Ellipses from './Ellipses'
  import Icon from './Icon'

  export let error = false
  export let success = false
</script>

<style>
  .toast {
    align-items: center;
    background: var(--toast-background-color);
    border-radius: var(--toast-border-radius);
    box-shadow: var(--toast-box-shadow);
    box-sizing: border-box;
    color: var(--toast-color);
    display: flex;
    font-size: var(--toast--font-size);
    line-height: var(--toast-line-height);
    min-height: var(--toast-min-height);
    padding: var(--toast-padding-v) var(--toast-padding-h);
    width: var(--toast-width);
  }

  .error {
    --toast-background-color: var(--toast-error-background-color);
  }

  .success {
    --toast-background-color: var(--toast-success-background-color);
  }

  .icon {
    line-height: 0;
  }

  .message {
    max-height: 60px; /* for ie11 */
  }

  .icon + .message {
    margin-left: var(--toast-spacing);
  }
</style>

<div class="toast" class:error class:success>
  {#if error}
    <div class="icon">
      <Icon icon="error-o" />
    </div>
  {/if}
  {#if success}
    <div class="icon">
      <Icon icon="success-circle-o" />
    </div>
  {/if}
  <div class="message">
    <Ellipses lines={3}>
      <slot />
    </Ellipses>
  </div>
</div>
