<script>
  import Icon from './Icon'

  export let clickable = false
  export let disabled = false
  export let icon = ''
  export let image = ''
  export let label = ''
  export let size = 'md'

  const backgroundImage = JSON.stringify(image)
</script>

<style>
  .avatar {
    align-items: center;
    background-color: var(--avatar-background-color);
    border-radius: 100%;
    color: var(--avatar-label-color);
    display: inline-flex;
    flex: 0 0 auto;
    justify-content: center;
    overflow: hidden;
  }

  .avatar--sm {
    font-size: var(--avatar-font-size-sm);
    height: var(--avatar-width-sm);
    width: var(--avatar-width-sm);
  }

  .avatar--md {
    font-size: var(--avatar-font-size-md);
    height: var(--avatar-width-md);
    width: var(--avatar-width-md);
  }

  .avatar--lg {
    font-size: var(--avatar-font-size-lg);
    height: var(--avatar-width-lg);
    width: var(--avatar-width-lg);
  }

  .icon, .image, .label {
    display: flex;
  }

  .icon {
    color: var(--avatar-icon-color);
  }

  .image {
    height: 100%;
    width: 100%;
  }

  .label {
    color: var(--avatar-label-color);
  }
</style>

<div class="avatar avatar--{size}">
  {#if icon}
    <span class="icon">
      <Icon icon={icon} />
    </span>
  {/if}
  {#if image}
    <div class="image" style="background-image: url({backgroundImage});" />
  {/if}
  {#if label}
    <span class="label">{label}</span>
  {/if}
</div>
