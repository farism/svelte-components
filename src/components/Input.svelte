<script>
  export let ref = null
  export let value = ''
  export let disabled = false
  export let error = false
</script>


<style>
  .input {
    background-color: var(--input-background-color);
    border-color: var(--input-border-color);
    border-radius: var(--input-border-radius);
    border-style: var(--input-border-style);
    border-width: var(--input-border-width);
    box-sizing: border-box;
    color: var(--input-color);
    display: block;
    font-family: inherit;
    font-size: var(--input-font-size);
    height: var(--input-height);
    line-height: var(--input-font-size);
    padding: var(--input-padding-v) var(--input-padding-h);
    /* width: 100%; */
  }

  .error {
    background-color: var(--input-error-background-color);
    border-color: var(--input-error-border-color);
  }

  .input::placeholder {
    color: var(--input-placeholder-color);
  }

  .input:focus {
    border-color: var(--focus-border-color);
    box-shadow: var(--focus-box-shadow);
    outline: var(--focus-outline);
  }

  .input:disabled {
    border-color: var(--input-disabled-border-color);
    color: var(--input-disabled-color);
  }

  .input[type="number"] {
    -moz-appearance: textfield;
  }

  .input[type="number"]::-webkit-inner-spin-button,
  .input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>

<input
  class="input"
  class:error
  type="text"
  bind:this={ref}
  bind:value={value}
  on:blur
  on:change
  on:focus
  on:input
  on:keypress
  on:keydown
  on:keyup
  {disabled}
/>
