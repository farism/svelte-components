<script>
  export let ref = null
  export let error = false
  export let pagination = false
  export let required = false
</script>

<style>
  .notation {
    --notation-color: var(--color-gray-95);
    --notation-error-color: var(--color-red-70);
    --notation-pagination-color: var(--color-gray-75);
    --notation-required-color: var(--color-orange-60);
    --notation-style: italic;

    color: var(--notation-color);
    font-style: var(--notation-style);
  }

  .required {
    --notation-color: var(--notation-required-color);
  }

  .error {
    --notation-color: var(--notation-error-color);
  }

  .pagination {
    --notation-color: var(--notation-pagination-color);

    font-size: 12px;
  }
</style>

<div
  class="notation"
  class:error
  class:pagination
  class:required
  bind:this={ref}
>
  <slot />
</div>
