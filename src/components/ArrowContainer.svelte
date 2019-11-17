<script>
  import { onMount } from 'svelte'
  import cssVars from 'svelte-css-vars'

  import { getBoundingClientRect} from '../utils/getBoundingClientRect'
  import Arrow from './Arrow'

  export let refs = {}
  export let target = null
  export let placement = 'top'
  export let arrow =  { width: 12, height: 6 };

  $: top = ['top', 'top-left', 'top-right'].includes(placement)

  $: bottom = ['bottom', 'bottom-left', 'bottom-right'].includes(placement);

  $: left = ['left', 'left-top', 'left-bottom'].includes(placement)

  $: right = ['right', 'right-top', 'right-bottom'].includes(placement)

  // we are assuming that width/height are based on top/down defaults,
  // so flip them if it is left/right
  $: arrowHeight = left || right ? arrow.width : arrow.height

  $: arrowWidth = left || right ? arrow.height : arrow.width

  $: styleVars = {
    arrowHeight: `${arrowHeight}px`,
    arrowWidth: `${arrowWidth}px`,
    arrowVisibility: `${target ? 'visible' : 'hidden'}`
  }

  function arrowPosition(node) {
    function setPosition() {
      if (target) {
        const rect1 = getBoundingClientRect(node)

        const rect2 = getBoundingClientRect(target)

        const width = Math.min(rect1.width, rect2.width)

        const height = Math.min(rect1.height, rect2.height)

        if (placement === 'top' || placement === 'bottom') {
          refs.arrow.style.left = `calc(50% - ${arrowWidth / 2}px)`
        }

        if (placement === 'top-left' || placement === 'bottom-left') {
          refs.arrow.style.left = `calc(${width / 2}px - ${arrowWidth / 2}px)`
        }

        if (placement === 'top-right' || placement === 'bottom-right') {
          refs.arrow.style.right = `calc(${width / 2}px - ${arrowWidth / 2}px)`
        }

        if (placement === 'left' || placement === 'right') {
          refs.arrow.style.top = `calc(50% - ${arrowHeight / 2}px`
        }

        if (placement === 'left-top' || placement === 'right-top') {
          refs.arrow.style.top = `calc(${height / 2}px - ${arrowHeight / 2}px)`
        }

        if (placement === 'left-bottom' || placement === 'right-bottom') {
          refs.arrow.style.bottom = `calc(${height / 2}px - ${arrowHeight / 2}px)`
        }
      }
    }

    setTimeout(setPosition, 0)

    return {
      destroy() {}
    }
  }
</script>

<style>
  .arrow-container {
    /* updated using cssVars */
    --arrowHeight: 0;
    --arrowLeft: 0;
    --arrowVisibility: hidden;
  }

  .container {
    position: relative;
  }

  .top {
    margin-bottom: var(--arrowHeight);
  }

  .top .arrow {
    top: 100%;
  }

  .bottom {
    margin-top: var(--arrowHeight);
  }

  .bottom .arrow {
    bottom: 100%;
  }

  .left {
    margin-right: var(--arrowWidth);
  }

  .left .arrow {
    left: 100%;
  }

  .right {
    margin-left: var(--arrowWidth);
  }

  .right .arrow {
    right: 100%;
  }

  .arrow {
    display: flex;
    position: absolute;
    visibility: var(--arrowVisibility);
  }
</style>

<div
  class="arrow-container"
  class:top
  class:bottom
  class:left
  class:right
  bind:this={refs.self}
  use:arrowPosition={refs.arrow}
  use:cssVars={styleVars}
>
  <div class="container">
    <slot />
    <span class="arrow" bind:this={refs.arrow}>
      <Arrow
        up={bottom}
        down={top}
        left={right}
        right={left}
        width={arrowWidth}
        height={arrowHeight}
      />
    </span>
  </div>
</div>
