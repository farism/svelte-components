<script>
  export let ref = null
  export let value = ''
  export let disabled = false
  export let error = false
</script>

<style>
  .textarea {
    background-color: var(--textarea-background-color);
    border-color: var(--textarea-border-color);
    border-radius: var(--textarea-border-radius);
    border-style: var(--textarea-border-style);
    border-width: var(--textarea-border-width);
    box-sizing: border-box;
    color: var(--textarea-color);
    display: block;
    font-family: inherit;
    font-size: var(--textarea-font-size);
    padding: var(--textarea-v-padding) var(--textarea-h-padding);
  }

  .textarea:disabled {
    border-color: var(--textarea-disabled-border-color);
    color: var(--textarea-disabled-color);
  }

  .textarea:focus {
    border-color: var(--focus-border-color);
    box-shadow: var(--focus-box-shadow);
    outline: var(--focus-outline);
  }

  .textarea::placeholder {
    color: var(--textarea-placeholder-color);
  }

  .error {
    background-color: var(--textarea-error-background-color);
    border-color: var(--textarea-error-border-color);
  }
</style>

<textarea
  class="textarea"
  class:error
  type="text"
  bind:this={ref}
  bind:value={value}
  on:blur
  on:change
  on:focus
  on:textarea
  on:keypress
  on:keydown
  on:keyup
  {disabled}
/>
