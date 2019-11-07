<script>
  import Icon from './Icon'

  export let ref = null
  export let clickable = false
  export let disabled = false
  export let icon = ''
  export let image = ''
  export let label = ''
  export let sm = false
  export let lg = false
  export let md = false

  const backgroundImage = JSON.stringify(image)
</script>

<style>
  .avatar {
    --icon-size: var(--avatar-font-size);

    align-items: center;
    background-color: var(--avatar-background-color);
    border-radius: 100%;
    display: inline-flex;
    flex: 0 0 auto;
    font-size: var(--avatar-font-size);
    height: var(--avatar-size);
    justify-content: center;
    overflow: hidden;
    width: var(--avatar-size);
  }

  .sm {
    --avatar-font-size: var(--avatar-font-size-sm);
    --avatar-size: var(--avatar-size-sm);
  }

  .md {
    --avatar-font-size: var(--avatar-font-size-md);
    --avatar-size: var(--avatar-size-md);
  }

  .lg {
    --avatar-font-size: var(--avatar-font-size-lg);
    --avatar-size: var(--avatar-size-lg);
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

<div class="avatar" class:sm class:md class:lg>
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
