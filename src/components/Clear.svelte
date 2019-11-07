<script>
  import Icon from './Icon'

  export let ref = null
  export let disabled = false
  export let sm = false
  export let lg = false
  export let md = !sm && !lg
</script>

<style>
  button {
    background-color: transparent;
    border: 1px solid transparent;
    box-sizing: border-box;
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

<button bind:this={ref} on:click {disabled}>
  <Icon icon="x" {sm} {md} {lg} />
</button>
