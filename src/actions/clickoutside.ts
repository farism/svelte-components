import { isEventSource } from '../utils/isEventSource'

export function clickoutside(node: HTMLElement) {
  function handler(e: MouseEvent) {
    if (!isEventSource(node, e)) {
      node.dispatchEvent(
        new CustomEvent('clickoutside', {
          detail: e,
        })
      )
    }
  }

  window.addEventListener('click', handler)

  // window.addEventListener('touchend', handler)

  return {
    destroy() {
      window.removeEventListener('click', handler)

      // window.removeEventListener('touchend', handler)
    },
  }
}
