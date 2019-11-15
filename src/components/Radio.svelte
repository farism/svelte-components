<script>
  import { checkSlot } from '../utils/checkSlot'
  import Icon from './Icon'

  export let ref = null
  export let disabled = false;
  export let group = ''
  export let tooltip = ''
  export let value = ''

  const hasLabel = checkSlot($$props, 'default')
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

  .disabled {

  }

  input:checked + .checkmark {
    --radio-checkmark-border-color: var(--color-blue-50);
    --radio-checkmark-border-width: 6px;
  }

  input:focus + .checkmark {
    border-color: var(--focus-border-color);
    box-shadow: var(--focus-box-shadow);
    outline: var(--focus-outline);
  }
</style>


<label class="radio" class:disabled>
  <input
    type="radio"
    bind:this={ref}
    bind:group
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
