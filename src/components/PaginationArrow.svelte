<script>
  import Icon from './Icon'

  export let left = false
  export let right = false

  const icon = left ? 'left' : right ? 'right' : ''
</script>

<style>
  .pagination-arrow {
    --icon-size: var(--size-sm);

    align-items: center;
    color: var(--pagination-arrow-color);
    cursor: pointer;
    display: inline-flex;
    background: var(--pagination-arrow-background-color);
    border: 1px solid var(--pagination-arrow-border-color);
    border-radius: 100%;
    flex: 0 0 auto;
    height: var(--pagination-arrow-size);
    justify-content: center;
    line-height: 0;
    margin: 0 var(--header-pagination-arrow-spacing);
    padding: 0;
    transition: 0.2s background-color ease-out, 0.2s color ease-out;
    width: var(--pagination-arrow-size);
  }

  .pagination-arrow:hover {
    --pagination-arrow-background-color: var(--pagination-arrow-background-color-hover);
    --pagination-arrow-color: var(--pagination-arrow-color-hover);
  }

  .pagination-arrow:focus {
    border-color: var(--focus-border-color);
    box-shadow: var(--focus-box-shadow);
    outline: var(--focus-outline);
  }
</style>

<button class="pagination-arrow" on:click>
  <Icon icon="chevron-{icon}" />
</button>
