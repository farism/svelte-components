<script>
  import paths from '@procore/core-icons/dist/paths.json'

  export let ref = null
  export let icon = ''
  export let sm = false
  export let lg = false
  export let md = false
</script>

<style>
  .icon {
    cursor: inherit;
    display: inline-flex;
  }

  .icon svg {
    height: var(--icon-size);
    pointer-events: none;
    width: var(--icon-size);
  }

  .sm {
    --icon-size: var(--icon-size-sm);
  }

  .md {
    --icon-size: var(--icon-size-md);
  }

  .lg {
    --icon-size: var(--icon-size-lg);
  }

  svg path {
    fill: currentColor;
  }
</style>

<span class="icon" class:sm class:md class:lg bind:this={ref} on:click>
  <svg focusable="false" viewBox="0 0 1024 1024">
    <path d="{paths[icon]}" />
  </svg>
</span>
