<script>
  export let ref = null
  export let gray = false
  export let white = false
</script>

<style>
  .link {
    color: var(--link-color);
    text-decoration: none;
  }

  .link:hover {
    color: var(--link-color-hover);
    cursor: pointer;
    text-decoration: underline;
  }

  .gray {
    --link-color: var(--link-gray-color);
    --link-color-hover: var(--link-gray-color-hover);
  }

  .white {
    --link-color: var(--link-white-color);
    --link-color-hover: var(--link-white-color-hover);
  }
</style>

<a
  class="link"
  class:gray
  class:white
  bind:this={ref}
>
  <slot />
</a>
