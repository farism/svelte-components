<script>
  let className = ''

  export { className as class }
  export let node = null
  export let value = ''
  export let disabled = false
  export let error = false
</script>


<style>
  :root {
    --input-background-color: var(--color-white-100);
    --input-border-color: var(--color-gray-50);
    --input-border-radius: var(--size-2xs);
    --input-border-style: solid;
    --input-border-width: var(--size-3xs);
    --input-color: var(--color-gray-95);
    --input-disabled-border-color: var(--color-gray-20);
    --input-disabled-color: var(--color-gray-60);
    --input-error-background-color: var(--color-red-20);
    --input-error-border-color: var(--color-red-70);
    --input-font-size: 14px;
    --input-height: var(--size-2xl);
    --input-placeholder-color: var(--color-gray-75);
    --input-h-padding: var(--size-md);
    --input-v-padding: 0;
  }

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
    padding: var(--input-v-padding) var(--input-h-padding);
    /* width: 100%; */
  }

  .input:disabled {
    border-color: var(--input-disabled-border-color);
    color: var(--input-disabled-color);
  }

  .input:focus {
    border-color: var(--focus-border-color);
    box-shadow: var(--focus-box-shadow);
    outline: var(--focus-outline);
  }

  .input[type="number"] {
    -moz-appearance: textfield;
  }

  .input[type="number"]::-webkit-inner-spin-button,
  .input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .input::placeholder {
    color: var(--input-placeholder-color);
  }

  .input--error-true {
    background-color: var(--input-error-background-color);
    border-color: var(--input-error-border-color);
  }
</style>

<input class="input input--error-{error} {className}"
  type="text"
  bind:this={node}
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
