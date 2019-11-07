<script>
  import { checkSlot } from '../utils/checkSlot'

  export let image = ''
  export let message = ''
  export let title = ''

  console.log({image,message,title})

  const hasImage = checkSlot($$props, 'image') || image

  const hasTitle = checkSlot($$props, 'title') || title

  const hasMessage = checkSlot($$props, 'message') || message

  const hasButtons = checkSlot($$props, 'buttons')
</script>

<style>
  .empty-state {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: var(--empty-state-spacing-top);
    margin-bottom: var(--empty-state-spacing-botom);
    overflow: hidden;
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
