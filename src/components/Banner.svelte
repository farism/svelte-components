<script>
  import Icon from './Icon'

  export let icon = ''
  export let onClose = null
  export let size = 'sm'
</script>

<style>
  :root {
    --banner-border-radius: 2px;
    --banner-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    --banner-stripe-color: var(--color-black-100);
  }

  .banner {
    align-items: center;
    border-radius: var(--banner-border-radius);
    box-shadow: var(--banner-box-shadow);
    display: flex;
    padding: var(--size-sm)
  }

  .stripe {
    position: absolute;
    width: var(--size-md);
    background: var(--banner-stripe-color);
  }

  .icon {
    padding: 0 var(--size-lg)
  }

  .title {

  }

  .body {

  }

  .dismiss {

  }
</style>

<div class="banner">
  <div class="stripe" />
  <div class="icon">
    <Icon {icon} />
  </div>
  <div>
    <div class="title">
      <slot name="title" />
    </div>
    <div class="body">
      <slot name="body" />
    </div>
  </div>
  {#if onClose}
    <div class="dismiss">
      <Icon on:click={onClose} />
    </div>
  {/if}
</div>
