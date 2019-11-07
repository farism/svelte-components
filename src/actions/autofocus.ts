export function autofocus(node: HTMLElement) {
  setTimeout(function() {
    node.focus()
  }, 0)

  return {
    destroy() {},
  }
}
