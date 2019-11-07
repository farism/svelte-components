<script>
</script>

<style>
  .empty-state {
    --empty-state-spacing-top: 128px;
    --empty-state-spacing-botom: 64px;
    --empty-state-title-spacing: var(--size-xl);
    --empty-state-message-spacing: var(--size-lg);
    --empty-state-buttons-spacing: var(--size-xl);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: var(--empty-state-spacing-top);
    margin-bottom: var(--empty-state-spacing-botom);
    overflow: hidden;
  }

  .image {

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
  <div class="image">
    <slot name="image" />
  </div>
  <div class="image">
    <slot name="image" />
  </div>
  <div class="message">
    <slot name="message" />
  </div>
  <div class="buttons">
    <slot name="buttons" />
  </div>
</div>
