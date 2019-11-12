export function isEventSource(node: HTMLElement, e: Event) {
  // console.log(
  //   { node },
  //   e.target,
  //   e.target instanceof HTMLElement,
  //   node.contains(e.target as any)
  // )

  if (node && e.target instanceof HTMLElement) {
    return node === e.target || node.contains(e.target)
  }

  return false
}
