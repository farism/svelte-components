<script>
  import Icon from './Icon'

  export let icon = ''
  export let onDismiss = null
  export let size = 'sm'
  export let variant = 'none'

  const icons = {
    action: 'warning-triangle-o',
    error: 'warning-triangle-o',
    info: 'info-circle-o',
    success: 'check-circle',
  }

  let iconName = icon || icons[variant]
</script>

<style>
  .banner {
    align-items: center;
    background: var(--banner-accent1-color);
    border-radius: var(--banner-border-radius);
    border-left: var(--banner-stripe-size) var(--banner-accent2-color) solid;
    box-shadow: var(--banner-box-shadow);
    display: flex;
    padding: var(--banner-padding);
    position: relative;
  }

  .banner--action {
    --banner-accent1-color: var(--banner-accent1-color-action);
    --banner-accent2-color: var(--banner-accent2-color-action);
  }

  .banner--error {
    --banner-accent1-color: var(--banner-accent1-color-error);
    --banner-accent2-color: var(--banner-accent2-color-error);
  }

  .banner--info {
    --banner-accent1-color: var(--banner-accent1-color-info);
    --banner-accent2-color: var(--banner-accent2-color-info);
  }

  .banner--success {
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

  .action {
    display: flex;
    margin-left: var(--banner-spacing);
  }

  .dismiss {
    background-color: transparent;
    border: none;
    border-radius: 100%;
    cursor: pointer;
    display: flex;
    flex: 0 0 auto;
    height: var(--banner-dismiss-size);
    margin-left: var(--banner-spacing);
    padding: 0;
    width: var(--banner-dismiss-size);
  }

  .dismiss:hover {
    background-color: var(--banner-dismiss-hover-background-color);
    color: var(--banner-accent1-color);
  }
</style>

<div class="banner banner--{variant}">
  <div class="icon">
    <Icon icon={iconName} size="md" />
  </div>
  <div class="body">
    <div class="title">
      <slot name="title" />
    </div>
    <div class="message">
      <slot name="message" />
    </div>
  </div>
  <button class="dismiss" on:click={onDismiss}>
    <Icon icon="x" size="md" />
  </button>
</div>
