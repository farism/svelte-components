<script>
  export let ref = null
  export let lines = 1
  export let width = '100%'

  const style = `width: ${width}; -webkit-line-clamp: ${lines}`;
</script>

<style>
  .ellipses {
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>

<span class="ellipses" bind:this={ref} {style}>
  <slot />
</span>
