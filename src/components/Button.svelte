<script>
  import { checkSlot } from '../utils/checkSlot'
  import Icon from './Icon'

  export let dropdown = false;
  export let form = false;
  export let outline = false;
  export let secondary = false;
  export let tertiary = false;
  export let primary = !dropdown && !form && !outline && !secondary && !tertiary;

  export let lg = false
  export let sm = false
  export let md = !lg && !sm

  export let icon = ''
  export let iconRight = ''

  const hasLabel = checkSlot($$props)

  const iconOnly = icon && !hasLabel
</script>

<style>
  .button {
    align-items: center;
    border: var(--button-border-width) var(--button-border-style) var(--button-border-color);
    background-color: var(--button-background-color);
    border-radius: var(--button-border-radius);
    box-sizing: border-box;
    color: var(--button-color);
    display: inline-flex;
    font-weight: 400;
    font-size: var(--button-font-size);
    height: var(--button-size);
    justify-content: center;
    line-height: 20px;
    padding: var(--button-padding-v) var(--button-padding-h);
  }

  .icon-only {
    line-height: 0;
  }

  .icon-only:not(.dropdown){
    padding: 0;
  }

  .icon-only.sm:not(.dropdown) {
    width: var(--button-size-sm);
  }

  .icon-only.md:not(.dropdown) {
    width: var(--button-size-md);
  }

  .icon-only.lg:not(.dropdown) {
    width: var(--button-size-lg);
  }

  .icon {
    flex: 0 0 auto;
    line-height: 0;
  }

  .label {
    flex: 1 1 auto;
  }

  .icon + .label, .label + .icon {
    margin-left: var(--size-sm);
  }

  .arrow {
    border-bottom: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid var(--color-gray-70);
    content: "";
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

  .primary {
    --button-background-color: var(--button-primary-background-color);
    --button-border-color: var(--button-primary-border-color);
    --button-color: var(--button-primary-color);
  }

  .primary:hover {
    --button-background-color: var(--button-primary-background-color-hover);
    --button-border-color: var(--button-primary-border-color-hover);
    --button-color: var(--button-primary-color-hover);
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

  .dropdown {
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

  .dropdown .label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
  class:sm
  class:md
  class:lg
>
  {#if icon}
    <span class="icon">
      <Icon {icon} />
    </span>
  {/if}
  {#if hasLabel}
    <span class="label">
      <span>
        <slot />
      </span>
    </span>
  {/if}
  {#if iconRight && !dropdown}
    <span class="icon">
      <Icon icon={iconRight} />
    </span>
  {/if}
  {#if dropdown}
    <span class="arrow" />
  {/if}
</button>
