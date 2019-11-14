<svelte:options accessors={true} />

<script context="module">
  export const OVERLAYTRIGGER_CONTEXT = {}
</script>

<script>
  import { setContext } from 'svelte'
  import { clickoutside } from '../actions/clickoutside'
  import { fasten } from '../actions/fasten'
  import { portal } from '../actions/portal'
  import { isEventSource } from '../utils/isEventSource'
  import { wrapPromise } from '../utils/wrapPromise'

  export let refs = {}
  export let afterHide = noop
  export let afterShow = noop
  export let beforeShow = noop
  export let beforeHide = noop
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

    if(visible) {
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

    if(!visible) {
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
      } else if (['Escape', 'Esc'].includes(e.key)) {
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
    display: inline-flex;
    flex: 1 1 auto;
  }

  .overlay {
    left: 0;
    position: fixed;
    top: 0;
  }
</style>

<span
  class="trigger"
  bind:this={refs.trigger}
  on:click={onClick}
  on:mouseenter={onMouseEnter}
  on:mouseleave={onMouseLeave}
  on:keydown={onKeyDown}
>
  <slot name="trigger" />
</span>

{#if visible}
  <div
    class="overlay"
    bind:this={refs.overlay}
    use:portal
    use:clickoutside
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
