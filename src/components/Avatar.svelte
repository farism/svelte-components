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
    --icon-sm-size: var(--avatar-sm-icon-size);
    --icon-md-size: var(--avatar-md-icon-size);
    --icon-lg-size: var(--avatar-lg-icon-size);

    align-items: center;
    background-color: var(--avatar-background-color);
    border-radius: 100%;
    display: inline-flex;
    flex: 0 0 auto;
    justify-content: center;
    overflow: hidden;
  }

  .avatar--sm {
    height: var(--avatar-sm-size);
    width: var(--avatar-sm-size);
  }

  .avatar--md {
    height: var(--avatar-md-size);
    width: var(--avatar-md-size);
  }

  .avatar--lg {
    height: var(--avatar-lg-size);
    width: var(--avatar-lg-size);
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
    <span class="icon icon--{size}">
      <Icon icon={icon} {size} />
    </span>
  {/if}
  {#if image}
    <div class="image" style="background-image: url({backgroundImage});" />
  {/if}
  {#if label}
    <span class="label label--{size}">{label}</span>
  {/if}
</div>
