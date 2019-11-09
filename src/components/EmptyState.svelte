<script>
  import { checkSlot } from '../utils/checkSlot'

  export let image = ''
  export let message = ''
  export let title = ''

  const hasImage = image || checkSlot($$props, 'image')

  const hasTitle = title || checkSlot($$props, 'title')

  const hasMessage = message || checkSlot($$props, 'message')

  const hasButtons = checkSlot($$props, 'buttons')
</script>

<style>
  .empty-state {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: var(--empty-state-spacing-botom);
    margin-top: var(--empty-state-spacing-top);
  }

  .image :global(img) {
    max-width: var(--empty-state-image-max-width);
  }

  .title {
    margin-top: var(--empty-state-title-spacing);
  }

  .message {
    margin-top: var(--empty-state-message-spacing);
  }

  .buttons {
    margin-top: var(--empty-state-buttons-spacing);
  }

  .buttons :global(button) {
    margin: 0 var(--size-xs);
  }
</style>

<div class="empty-state">
  {#if hasImage}
    <div class="image">
      <slot name="image" />
      {#if image}
        <img src="{image}" />
      {/if}
    </div>
  {/if}
  {#if hasTitle}
    <div class="title">
      <slot name="title" />
      {title}
    </div>
  {/if}
  {#if hasMessage}
    <div class="message">
      <slot name="message" />
      {message}
    </div>
  {/if}
  {#if hasButtons}
    <div class="buttons">
      <slot name="buttons" />
    </div>
  {/if}
</div>
