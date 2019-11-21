import { isEventSource } from '../utils/isEventSource'

interface ClickOutsideParams {
  refs?: HTMLElement[]
}

export function clickoutside(
  node: HTMLElement,
  { refs = [] }: ClickOutsideParams = {}
) {
  function handler(e: MouseEvent) {
    const isSource = [...refs, node].some(function (el) {
      return isEventSource(el, e)
    })

    if (!isSource) {
      node.dispatchEvent(
        new CustomEvent('clickoutside', {
          detail: e,
        })
      )
    }
  }

  window.addEventListener('mousedown', handler)

  // window.addEventListener('touchstart', handler)

  return {
    destroy() {
      window.removeEventListener('mousedown', handler)

      // window.removeEventListener('touchstart', handler)
    },
  }
}
