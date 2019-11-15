<script>
  import { checkSlot } from '../utils/checkSlot'
  import Icon from './Icon'

  export let checked = false
  export let group = []
  export let disabled = false;
  export let indeterminate = false;
  export let tooltip = ''

  const hasLabel = checkSlot($$props, 'default')
</script>

<style>
  .checkbox {
    --icon-sm-size: 20px;

    align-items: center;
    display: flex;
  }

  .checkmark {
    align-items: center;
    color: var(--checkbox-checkmark-color);
    background-color: var(--checkbox-checkmark-background-color);
    border-color: var(--checkbox-checkmark-border-color);
    border-radius: var(--checkbox-checkmark-border-radius);
    border-style: var(--checkbox-checkmark-border-style);
    border-width: var(--checkbox-checkmark-border-width);
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    width: var(--checkbox-checkmark-size);
    height: var(--checkbox-checkmark-size);
  }

  .indeterminate {
    background-color: var(--checkbox-checkmark-color);
    display: block;
    height: 2px;
    width: 8px;
  }

  .label {
    line-height: 0;
    margin-left: var(--checkbox-spacing);
  }

  input {
    opacity: 0;
    position: absolute;;
  }

  .checked {
    --checkbox-checkmark-background-color: var(--checkbox-checkmark-background-color-checked);
    --checkbox-checkmark-border-color: var(--checkbox-checkmark-border-color-checked);
  }

  .disabled {
    --checkbox-checkmark-border-color: var(--checkbox-checkmark-border-color-disabled);
  }

  .checked.disabled {
    --checkbox-checkmark-background-color: var(--checkbox-checkmark-background-color-disabled);
  }

  input:focus + .checkmark {
    border-color: var(--focus-border-color);
    box-shadow: var(--focus-box-shadow);
    outline: var(--focus-outline);
  }
</style>

<label class="checkbox" class:checked class:disabled>
  <input
    {disabled}
    bind:checked
    bind:group
    bind:indeterminate
    on:blur
    on:change
    on:click
    on:focus
    type="checkbox"
  />
  <span class="checkmark">
    {#if indeterminate}
      <span class="indeterminate" />
    {:else if checked}
      <Icon icon="check" />
    {/if}
  </span>
  {#if hasLabel}
    <span class="label">
      <slot />
    </span>
  {/if}
</label>
