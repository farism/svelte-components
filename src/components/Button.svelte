<script>
  import { checkSlot } from '../utils/checkSlot'
  import Arrow from './Arrow'
  import Icon from './Icon'
  import Spinner from './Spinner'

  export let ref = null
  export let block = false
  export let disabled = false
  export let dropdown = false
  export let form = false
  export let icon = ''
  export let iconRight = ''
  export let lg = false
  export let loading = false
  export let open = false
  export let outline = false
  export let secondary = false
  export let sm = false
  export let tertiary = false

  export let md = !lg && !sm
  export let primary = !dropdown && !form && !outline && !secondary && !tertiary

  const hasLabelSlot = checkSlot($$props)

  const iconOnly = icon && !hasLabelSlot
</script>

<style>
  .button {
    --icon-size: var(--icon-size-sm);

    align-items: center;
    border: var(--button-border-width) var(--button-border-style) var(--button-border-color);
    background-color: var(--button-background-color);
    border-radius: var(--button-border-radius);
    box-sizing: border-box;
    color: var(--button-color);
    cursor: pointer;
    display: inline-flex;
    font-weight: 400;
    font-size: var(--button-font-size);
    height: var(--button-size);
    justify-content: center;
    line-height: 20px;
    padding: var(--button-padding-v) var(--button-padding-h);
    position: relative;
    user-select: none;
    transition: 0.1s background-color ease-out, 0.1s color ease-out;
    width: var(--button-width);
  }

  .button.block {
    max-width: 100%;
    width: 100%;
  }

  .icon-only {
    --icon-size: 12px;

    line-height: 0;
  }

  .icon-only {
    padding: 0;
  }

  .icon-only.sm {
    --button-width: var(--button-size-sm);
  }

  .icon-only.md {
    --button-width: var(--button-size-md);
  }

  .icon-only.lg {
    --button-width: var(--button-size-lg);
  }

  .spinner {
    align-items: center;
    display: inline-flex;
    justify-content: center;
  }

  .icon {
    flex: 0 0 auto;
    line-height: 0;
  }

  .label {
    flex: 1 1 auto;
  }

  .icon + .label,
  .label + .icon {
    margin-left: var(--size-sm);
  }

  .arrow {
    display: inline-flex;
    flex: 0 0 auto;
    margin-left: var(--size-lg);
  }

  .sm {
    --button-font-size: var(--button-font-size-sm);
    --button-padding: 0 var(--button-padding-sm);
    --button-size: var(--button-size-sm);
  }

  .md {
    --button-font-size: var(--button-font-size-md);
    --button-padding: 0 var(--button-padding-md);
    --button-size: var(--button-size-md);
  }

  .lg {
    --button-font-size: var(--button-font-size-lg);
    --button-padding: 0 var(--button-padding-lg);
    --button-size: var(--button-size-lg);
  }

  .dropdown {
    --arrow-color-fill: var(--button-dropdown-color);
    --button-background-color: var(--button-dropdown-background-color);
    --button-border-color: var(--button-dropdown-border-color);
    --button-color: var(--button-dropdown-color);

    max-width: var(--button-dropdown-max-width);
  }

  .dropdown:hover {
    --button-background-color: var(--button-dropdown-background-color-hover);
    --button-border-color: var(--button-dropdown-border-color-hover);
    --button-color: var(--button-dropdown-color-hover);
  }

  .dropdown:not(.primary):not(.loading):disabled {
    --arrow-color-fill: var(--button-dropdown-color-disabled);
    --arrow-color: var(--button-dropdown-color-disabled);
    --button-background-color: var(--button-dropdown-background-color-disabled);
    --button-border-color: var(--button-dropdown-border-color-disabled);
    --button-color: var(--button-dropdown-color-disabled);
  }

  .dropdown .label {
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .dropdown .spinner {
    margin-left: var(--size-md);
  }

  .primary {
    --arrow-color-fill: var(--color-white-100);
    --arrow-color: var(--color-white-100);
    --button-background-color: var(--button-primary-background-color);
    --button-border-color: var(--button-primary-border-color);
    --button-color: var(--button-primary-color);
  }

  .primary:hover {
    --button-background-color: var(--button-primary-background-color-hover);
    --button-border-color: var(--button-primary-border-color-hover);
    --button-color: var(--button-primary-color-hover);
  }

  .primary:not(.loading):disabled {
    --button-background-color: var(--button-primary-background-color-disabled);
    --button-border-color: var(--button-primary-border-color-disabled);
    --button-color: var(--button-primary-color-disabled);
  }

  .secondary {
    --button-border-color: var(--button-secondary-border-color);
    --button-background-color: var(--button-secondary-background-color);
    --button-color: var(--button-secondary-color);
  }

  .secondary:hover {
    --button-background-color: var(--button-secondary-background-color-hover);
    --button-border-color: var(--button-secondary-border-color-hover);
    --button-color: var(--button-secondary-color-hover);
  }

  .secondary:not(.loading):disabled {
    --button-background-color: var(--button-secondary-background-color-disabled);
    --button-border-color: var(--button-secondary-border-color-disabled);
    --button-color: var(--button-secondary-color-disabled);
  }

  .tertiary {
    --button-background-color: var(--button-tertiary-background-color);
    --button-border-color: var(--button-tertiary-border-color);
    --button-color: var(--button-tertiary-color);
  }

  .tertiary:hover {
    --button-background-color: var(--button-tertiary-background-color-hover);
    --button-border-color: var(--button-tertiary-border-color-hover);
    --button-color: var(--button-tertiary-color-hover);
  }

  .tertiary:not(.loading):disabled {
    --button-background-color: var(--button-tertiary-background-color-disabled);
    --button-border-color: var(--button-tertiary-border-color-disabled);
    --button-color: var(--button-tertiary-color-disabled);
  }

  .form {
    --button-border-color: var(--button-form-border-color);
    --button-background-color: var(--button-form-background-color);
    --button-color: var(--button-form-color);
  }

  .form:hover {
    --button-background-color: var(--button-form-background-color-hover);
    --button-border-color: var(--button-form-border-color-hover);
    --button-color: var(--button-form-color-hover);
  }

  .form:not(.loading):disabled {
    --button-background-color: var(--button-form-background-color-disabled);
    --button-border-color: var(--button-form-border-color-disabled);
    --button-color: var(--button-form-color-disabled);
  }

  .button.primary,
  .button.form {
    --spinner-circle-border-color: var(--color-white-100);
  }

  .button.loading:not(.dropdown) .icon,
  .button.loading:not(.dropdown) .label {
    opacity: 0;
  }

  .button:not(.dropdown) .spinner {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  .button:focus {
    border-color: var(--focus-border-color);
    box-shadow: var(--focus-box-shadow);
    outline: var(--focus-outline);
  }
</style>

<button
  class="button"
  class:dropdown
  class:form
  class:outline
  class:primary
  class:secondary
  class:tertiary
  class:icon-only={iconOnly}
  class:block
  class:sm
  class:md
  class:lg
  class:loading
  bind:this={ref}
  disabled={disabled || loading}
  on:click
>
  {#if icon}
    <span class="icon">
      <Icon {icon} />
    </span>
  {/if}
  {#if hasLabelSlot}
    <span class="label">
      <span>
        <slot />
      </span>
    </span>
  {/if}
  {#if iconRight && !dropdown}
    <span class="icon">
      <Icon icon={iconRight} sm />
    </span>
  {/if}
  {#if loading}
    <span class="spinner">
      <Spinner xs="{sm || dropdown}" sm="{!sm && !dropdown}" />
    </span>
  {/if}
  {#if dropdown && !loading}
    <span class="arrow">
      <Arrow up={open} down={!open} width={8} height={4} />
    </span>
  {/if}
</button>
