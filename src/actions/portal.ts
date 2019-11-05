import { getContext } from 'svelte'
import { get } from 'svelte/store'

export function portal(node: HTMLElement) {
  let nextZIndex = 1

  const zIndex = getContext('ZIndex')

  if (zIndex) {
    nextZIndex = get(zIndex)

    zIndex.set(nextZIndex)
  }

  node.style.top = '0'
  node.style.left = '0'
  node.style.position = 'fixed'
  node.style.zIndex = nextZIndex.toString()

  document.body.appendChild(node)
}
