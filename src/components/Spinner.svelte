<script>
  import { checkSlot } from '../utils/checkSlot'

  export let loading = false
  export let xs = false
  export let sm = false
  export let lg = false
  export let md = !xs && !sm && !lg

  const hasSlot = checkSlot($$props)
</script>

<style>
  @keyframes spinner-circle {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  .spinner {
    max-height: var(--spinner-max-height);
    min-height: var(--spinner-min-height);
    overflow: hidden;
    position: relative;
  }

  .overlay {
    align-items: center;
    background-color: var(--spinner-overlay-background-color);
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
  }

  .label {
    padding-top: var(--size-md);
    text-align: center;
    text-transform: var(--spinner-label-text-transform);
    width: var(--spinner-label-max-width);
  }

  .circle {
    border-radius: 100%;
    border: var(--spinner-circle-border-width) solid var(--spinner-circle-border-color);
    box-sizing: border-box;
    height: var(--spinner-circle-size);
    position: relative;
    width: var(--spinner-circle-size);
    z-index: 3;
  }

  .circle-inner {
    animation-duration: 0.75s;
    animation-iteration-count: infinite;
    animation-name: spinner-circle;
    animation-timing-function: linear;
    border-color: var(--spinner-circle-inner-border-color) transparent transparent transparent;
    left: calc(var(--spinner-circle-border-width) * -1);
    position: relative;
    top: calc(var(--spinner-circle-border-width) * -1);
    z-index: 4;
  }

  .xs {
    --spinner-circle-size: var(--spinner-circle-size-xs);
  }

  .sm {
    --spinner-circle-size: var(--spinner-circle-size-sm);
  }

  .md {
    --spinner-circle-size: var(--spinner-circle-size-md);
  }

  .lg {
    --spinner-circle-size: var(--spinner-circle-size-lg);
    --spinner-circle-border-width: var(--spinner-circle-border-width-lg);
  }
</style>

{#if hasSlot}
  {#if loading}
    <div class="spinner">
      <slot />
      <div class="overlay">
        <div class="circle" class:xs class:sm class:md class:lg>
          <div class="circle circle-inner" />
        </div>
        <span class="label">Loading</span>
      </div>
    </div>
  {:else}
    <slot />
  {/if}
{:else}
  <div class="circle" class:xs class:sm class:md class:lg>
    <div class="circle circle-inner" />
  </div>
{/if}
