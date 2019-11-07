<script>
  import Icon from './Icon'

  export let ref = null
  export let size = 'sm'
</script>

<style>
  button {
    background-color: transparent;
    border-color: transparent;
    border-radius: 100%;
    color: var(--clear-color);
    cursor: pointer;
    display: flex;
    flex: 0 0 auto;
    padding: 0;
  }

  button:hover {
    background-color: var(--clear-background-color-hover);
    color: var(--clear-color-hover);
  }

  button:focus {
    border-color: var(--focus-border-color);
    box-shadow: var(--focus-box-shadow);
    outline: var(--focus-outline);
  }
</style>

<button bind:this={ref} on:click>
  <Icon icon="x" {size} />
</button>
