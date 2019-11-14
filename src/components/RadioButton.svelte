<script>
  import Icon from './Icon'

  export let ref = null
  export let disabled = false;
  export let group = ''
  export let value = ''

  const checked = group === value;

  const hasLabel = !!($$props.$$slots && !!$$props.$$slots.default)
</script>

<style>
  .radio {
    align-items: center;
    display: flex;
  }

  .checkmark {
    align-items: center;
    color: var(--radio-checkmark-color);
    background-color: var(--radio-checkmark-background-color);
    border-color: var(--radio-checkmark-border-color);
    border-radius: 100%;
    border-style: var(--radio-checkmark-border-style);
    border-width: var(--radio-checkmark-border-width);
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    width: var(--radio-checkmark-size);
    height: var(--radio-checkmark-size);
  }

  .label {
    line-height: 0;
    margin-left: var(--radio-spacing);
  }

  input {
    opacity: 0;
    position: absolute;;
  }

  .checked .checkmark {
    --radio-checkmark-border-color: var(--color-blue-50);
    --radio-checkmark-border-width: 6px;
  }

  .disabled {

  }

  input:focus + .checkmark {
    border-color: var(--focus-border-color);
    box-shadow: var(--focus-box-shadow);
    outline: var(--focus-outline);
  }
</style>

<label class="radio" class:checked class:disabled>
  <input
    type="radio"
    bind:this={ref}
    bind:group={group}
    on:click
    on:change
    on:focus
    on:blur
    {disabled}
    {value}
  />
  <span class="checkmark" />
  {#if hasLabel}
    <span class="label">
      <slot />
    </span>
  {/if}
</label>
