<script>
  import Clear from './Clear'
  import Icon from './Icon'

  export let ref = null
  export let disabled = false
  export let focused = false
  export let icon = ''
  export let onClear = null

  function noop() {}

  function onClickClear(e) {
    onClear(e)
  }
</script>

<style>
  .token {
    align-items: center;
    background-color: var(--token-background-color);
    border: 1px solid transparent;
    border-radius: calc(var(--token-height) / 2);
    box-sizing: border-box;
    color: var(--token-color);
    cursor: default;
    display: inline-flex;
    font-size: var(--token-font-size);
    height: var(--token-height);
    line-height: 1;
    max-width: var(--token-max-width);
    min-width: var(--token-min-width);
    padding: var(--token-padding);
    transition: 0.2s background-color ease-out;
  }

  .token:hover {
    --token-background-color: var(--token-background-color-hover);
  }

  .token.focused {
    --token-background-color: var(--token-background-color-focus);
    --token-clear-color: var(--token-background-color);
    --clear-background-color: var(--token-color);

    border-color: var(--focus-border-color);
    box-shadow: var(--focus-box-shadow);
    outline: var(--focus-outline);
  }

  .token.disabled {
    --token-background-color: var(--tosken-background-color-disabled);
    --token-background-color-hover: var(--token-background-color-disabled);
  }

  .token.disabled .clear {
    pointer-events: none;
  }

  .token.showing-icon {
    padding-left: var(--size-xs);
  }

  .token.showing-clear {
    padding-right: var(--size-xs);
  }

  .icon {
    flex: 0 0 auto;
    line-height: 0;
  }

  .label {
    flex: 0 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .icon + .label {
    margin-left: var(--size-sm);
  }

  .clear {
    --clear-background-color-hover: var(--token-clear-background-color-hover);
    --clear-color-hover: var(--token-clear-color-hover);
    --clear-color: var(--token-clear-color);

    margin-left: var(--size-sm);
  }
</style>

<div
  class="token"
  class:disabled
  class:focused
  class:showing-icon={icon}
  class:showing-clear={onClear}
  bind:this={ref}
>
  {#if icon}
    <span class="icon">
      <Icon {icon} sm />
    </span>
  {/if}
  <span class="label">
    <slot />
  </span>
  {#if onClear}
    <span class="clear" on:click={onClickClear}>
      <Clear sm {disabled} tabindex={-1} />
    </span>
  {/if}
</div>
