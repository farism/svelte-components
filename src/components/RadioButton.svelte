<script>
  import { getContext } from 'svelte'
  import { get } from 'svelte/store'

  import Ellipses from './Ellipses'
  import Tooltip from './Tooltip'
  import { RADIO_GROUP_CONTEXT } from './RadioGroup'

  export let ref = null
  export let disabled = false;
  export let tooltip = ''
  export let value = ''

  const context = getContext(RADIO_GROUP_CONTEXT)

  const isDisabled = context.disabled || disabled

  const name = context.name

  const group = context.group
</script>

<style>
  .radio-button {}

  .active,
  .radio-button:hover {
    --radio-button-border-color: var(--radio-button-border-color-active);
  }

  .button {
    align-items: center;
    background: var(--radio-button-background-color);
    border: var(--radio-button-border-width) solid var(--radio-button-border-color);
    color: var(--radio-button-color);
    display: flex;
    height: var(--radio-button-height);
    padding: var(--radio-button-padding);

    /* these must come after border */
    border-left-width: 0;
    border-right-width: 0;
  }

  .border {
    background: var(--radio-button-border-color);
    height: 100%;
    position: absolute;
    top: 0;
    width: var(--radio-button-border-width);
  }

  .left {
    left: 0;
  }

  .right {
    right: -1px;
  }

  input {
    opacity: 0;
    pointer-events: none;
    position: absolute;
  }

  input:checked + .button {
    --radio-button-background-color: var(--radio-button-background-color-active);
    --radio-button-color: var(--radio-button-color-active);
  }

  input:focus + .button {
    border-color: var(--focus-border-color);
    box-shadow: var(--focus-box-shadow);
    outline: var(--focus-outline);
  }

  input:checked + .button .right,
  input:focus + .button .right {
    display: none;
  }

  .disabled {
    --radio-button-background-color: var(--radio-button-background-color-disabled);
    --radio-button-border-color: var(--radio-button-border-color-disabled);
    --radio-button-color: var(--radio-button-color-disabled);

    pointer-events: none;
  }
</style>

{#if tooltip}
  <Tooltip>
    <span slot="trigger">
      <svelte:self tooltip={null} {disabled} {value}>
        <slot />
      </svelte:self>
    </span>
    <span slot="message">
      {tooltip}
    </span>
  </Tooltip>
{:else}
  <div
    class="radio-button"
    class:active={$group === value}
    class:disabled={isDisabled}
  >
  <label>
    <input
      {name}
      {value}
      bind:group={$group}
      disabled={isDisabled}
      type="radio"
    />
    <div class="button">
      <div class="border left"></div>
      <Ellipses>
        <slot />
      </Ellipses>
      <div class="border right"></div>
    </div>
  </label>
  </div>
{/if}
