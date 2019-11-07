<script>
  import Icon from './Icon'

  export let checked = false
  export let indeterminate = false;

  const hasLabel = !!($$props.$$slots && !!$$props.$$slots.default)
</script>

<style>
  :root {
    --icon-sm-size: 20px;

    --checkbox-checkmark-background-color-checked: var(--color-blue-50);
    --checkbox-checkmark-background-color: var(--color-white-100);
    --checkbox-checkmark-border-color: var(--color-gray-60);
    --checkbox-checkmark-border-radius: var(--border-radius-sm);
    --checkbox-checkmark-border-style: solid;
    --checkbox-checkmark-border-width: 2px;
    --checkbox-checkmark-color: var(--color-white-100);
    --checkbox-checkmark-size: var(--size-lg);
    --checkbox-spacing: var(--size-sm);
  }

  .checkbox {
    align-items: center;
    display: flex;
  }

  .checkbox--checked-true .checkmark {
    background-color: var(--checkbox-checkmark-background-color-checked);
    border-color: transparent;
  }

  .checkmark {
    align-items: center;
    color: var(--checkbox-checkmark-color);
    background-color: var(--checkbox-background-color);
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
    background: var(--checkbox-checkmark-color);
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

  input:focus + .checkmark {
    border-color: var(--focus-border-color);
    box-shadow: var(--focus-box-shadow);
    outline: var(--focus-outline);
  }
</style>

<label class="checkbox checkbox--checked-{checked}">
  <input
    type="checkbox"
    bind:checked={checked}
    bind:indeterminate={indeterminate}
    on:click
    on:change
    on:focus
    on:blur
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
