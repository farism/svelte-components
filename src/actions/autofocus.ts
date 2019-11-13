export function autofocus(node: HTMLElement) {
  setTimeout(node.focus, 0)

  return {
    destroy() {},
  }
}
