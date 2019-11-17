<script>
  import Icon from './Icon'

  export let ref = null
  export let disabled = false
  export let sm = false
  export let lg = false
  export let md = !sm && !lg
  export let tabindex = null
</script>

<style>
  button {
    background-color: var(--clear-background-color);
    border: 1px solid transparent;
    box-sizing: border-box;
    border-radius: 100%;
    color: var(--clear-color);
    cursor: pointer;
    display: flex;
    flex: 0 0 auto;
    padding: 0;
    transition: 0.1s background-color ease-out, 0.1s color ease-out;
  }

  button:hover {
    --clear-background-color: var(--clear-background-color-hover);
    --clear-color: var(--clear-color-hover);
  }

  button:focus {
    border-color: var(--focus-border-color);
    box-shadow: var(--focus-box-shadow);
    outline: var(--focus-outline);
  }
</style>

<button bind:this={ref} on:click {disabled} {tabindex}>
  <Icon icon="x" {sm} {md} {lg} />
</button>
