<svelte:options accessors={true} />

<script context="module">
  export const OVERLAYTRIGGER_CONTEXT = {}
</script>

<script>
  import { setContext } from 'svelte'
  import { clickoutside } from '../actions/clickoutside'
  import { fasten } from '../actions/fasten'
  import { portal } from '../actions/portal'
  import { checkSlot } from '../utils/checkSlot'
  import { isEventSource } from '../utils/isEventSource'
  import { wrapPromise } from '../utils/wrapPromise'

  export let refs = {}
  export let afterHide = noop
  export let afterShow = noop
  export let beforeShow = noop
  export let beforeHide = noop
  export let block = false
  export let hideDelay = 100
  export let placement = 'top'
  export let showDelay = 0
  export let trigger = 'click'
  export let visible = false

  setContext(OVERLAYTRIGGER_CONTEXT, {
    toggle,
    show,
    hide
  })

  const hasOverlay = checkSlot($$props, 'overlay')

  let originalPlacement = placement

  let timer = 0

  function noop() {}

  export function toggle(e) {
    if (visible) {
      hide(e)
    } else {
      show(e)
    }
  }

  export function show(e) {
    clearTimeout(timer)

    if (visible) {
      return
    }

    wrapPromise(beforeShow(e)).then(function(shouldShow) {
      if (shouldShow !== false) {
        timer = setTimeout(function() {
          visible = true

          afterShow()
        }, showDelay)
      }
    })
  }

  export function hide(e) {
    clearTimeout(timer)

    if (!visible) {
      return
    }

    wrapPromise(beforeHide(e)).then(function(shouldHide) {
      if (shouldHide !== false) {
        timer = setTimeout(function() {
          visible = false

          placement = originalPlacement

          afterHide()
        }, hideDelay)
      }
    })
  }

  const onClick = trigger === 'click' ? toggle : noop

  const onMouseEnter = trigger === 'hover' ? show : noop

  const onMouseLeave = trigger === 'hover' ? hide : noop

  function onKeyDown(e) {
    if (isEventSource(refs.trigger, e)) {
      if (['ArrowDown', 'Down'].includes(e.key)) {
        e.preventDefault();

        show(e)
      } else if (['Escape', 'Esc', 'Tab'].includes(e.key)) {
        hide(e)
      }
    } else if (isEventSource(refs.overlay, e)) {
      if (['Escape', 'Esc'].includes(e.key)) {
        hide(e)
      }
    }
  }

  function onClickOutside(e) {
    hide(e.detail)
  }

  function onFastenFlip(e) {
    placement = e.detail.placement
  }
</script>

<style>
  .trigger {
    display: var(--overlay-trigger-display-mode);
  }

  .trigger.block {
    --overlay-trigger-display-mode: block;
  }

  .trigger.block > * {
    display: block;
    width: 100%;
  }

  .overlay {
    left: 0;
    position: fixed;
    top: 0;
  }
</style>

<div
  class="trigger"
  class:block
  bind:this={refs.trigger}
  on:click={onClick}
  on:mouseenter={onMouseEnter}
  on:mouseleave={onMouseLeave}
  on:keydown={onKeyDown}
>
  <slot name="trigger" />
</div>

{#if hasOverlay && visible}
  <div
    class="overlay"
    bind:this={refs.overlay}
    use:portal
    use:clickoutside={{ refs: [refs.trigger] }}
    use:fasten={{ padding: 2, placement: placement, target: refs.trigger }}
    on:fastenflip={onFastenFlip}
    on:clickoutside={onClickOutside}
    on:mouseenter={onMouseEnter}
    on:mouseleave={onMouseLeave}
    on:keydown={onKeyDown}
  >
    <slot name="overlay" />
  </div>
{/if}
