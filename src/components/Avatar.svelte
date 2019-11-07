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
    border-radius: 100%;
    color: var(--avatar-color);
    cursor: default;
    display: inline-flex;
    flex: 0 0 auto;
    font-size: var(--avatar-font-size);
    height: var(--avatar-size);
    justify-content: center;
    overflow: hidden;
    user-select: none;
    width: var(--avatar-size);
  }

  .avatar:not(.has-image) {
    background-color: var(--avatar-background-color);
  }

  .avatar.clickable {
    cursor: pointer;
  }

  .avatar.clickable:hover {
    --avatar-overlay-background-color: var(--avatar-overlay-background-color-hover);
  }

  .disabled, .avatar.disabled.clickable {
    --avatar-background-color: var(--avatar-background-color-disabled);
    --avatar-overlay-background-color: var(--avatar-overlay-background-color-disabled);

    cursor: default;
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

  .image {
    height: 100%;
    position: relative;
    width: 100%;
  }

  .image-overlay {
    background: var(--avatar-overlay-background-color);
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: 0.2s background-color;
    width: 100%;
  }
</style>

<div
  class="avatar"
  class:sm
  class:md
  class:lg
  class:disabled
  class:clickable
  class:has-image={image}
>
  {#if icon}
    <Icon icon={icon} />
  {/if}
  {#if image}
    <div class="image" style="background-image: url({backgroundImage});">
      <div class="image-overlay" />
    </div>
  {/if}
  {#if label}
    {label}
  {/if}
</div>
