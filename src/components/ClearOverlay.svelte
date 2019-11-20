<script>
  import Clear from './Clear'
</script>

<style>
  .clear-overlay {
    --clear-overlay-spacing: calc(var(--button-padding-h) + var(--size-sm) * 2);

    align-items: center;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    left: 0;
    padding-right: var(--clear-overlay-spacing);
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
  }

  .clear-button {
    pointer-events: all;
  }
</style>

<div class="clear-overlay">
  <div class="clear-button">
    <Clear sm on:click />
  </div>
</div>
