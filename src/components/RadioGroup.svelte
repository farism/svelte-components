<script context="module">
  export const RADIO_GROUP_CONTEXT = {}
</script>

<script>
  import { setContext } from 'svelte'
  import { writable } from 'svelte/store'

  export let ref = null
  export let block = false
  export let disabled = false;
  export let name = null
  export let value

  const group = writable(value)

  function setValue(value) {
    group.set(value)
  }

  setContext(RADIO_GROUP_CONTEXT, { disabled, name, group, setValue })
</script>

<style>
  .radio-group {
    align-items: center;
    display: var(--radio-group-display-mode);
  }

  .block {
    --overlay-trigger-display-mode: block;
    --radio-group-display-mode: flex;
    --radio-button-display-mode: block;
  }

  .block > :global(*) {
    flex: 1 1 auto;
  }

  .radio-group > :global(*) {
    position: relative;
    z-index: 1;
  }

  .radio-group > :global(*:hover) {
    z-index: 2;
  }

  .radio-group > :global(*.active),
  .radio-group > :global(*:focus-within) {
    z-index: 3;
  }

  .radio-group > :global(:first-child .left) {
    display: none;
  }

  .radio-group > :global(:first-child .button) {
    border-left-width: 1px;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }

  .radio-group > :global(:last-child .right) {
    display: none;
  }

  .radio-group > :global(:last-child .button) {
    border-right-width: 1px;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }
</style>

<div class="radio-group" class:block>
  <slot />
</div>
