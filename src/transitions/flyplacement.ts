import { fly } from 'svelte/transition'
import { easing } from 'ts-easing'

const { outCubic } = easing

export function flyplacement(
  node: HTMLElement,
  {
    delay = 0,
    duration = 300,
    easing = outCubic,
    offset = 4,
    opacity = 0,
    placement = 'top',
  }
) {
  const x = placement.startsWith('left')
    ? -offset
    : placement.startsWith('right')
    ? offset
    : 0

  const y = placement.startsWith('top')
    ? -offset
    : placement.startsWith('bottom')
    ? offset
    : 0

  const inner = fly(node, { delay, duration, easing, x, y, opacity })

  function css(t: number, u: number) {
    if (inner.css) {
      return inner.css(t, u)
    }
  }

  return {
    css,
    delay,
    duration,
    easing,
  }
}
