import { easing } from 'ts-easing'

const { outCubic } = easing

export function fly(
  node: HTMLElement,
  { delay = 0, duration = 400, easing = outCubic, x = 0, y = 0 }
) {
  const style = getComputedStyle(node)

  const transform = style.transform === 'none' ? '' : style.transform

  function css(t: number) {
    const translateX = (1 - t) * x

    const translateY = (1 - t) * y

    return `transform: ${transform} translate(${translateX}px, ${translateY}px);`
  }

  return {
    css,
    delay,
    duration,
    easing,
  }
}
