export function autofocus(node: HTMLElement) {
  setTimeout(node.focus, 0)

  // console.log({ node })

  return {
    destroy() {},
  }
}
