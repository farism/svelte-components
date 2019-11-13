interface MatchWidthParams {
  target: HTMLElement
}

export function matchwidth(node: HTMLElement, { target }: MatchWidthParams) {
  node.style.minWidth = `${Math.max(node.clientWidth, target.clientWidth)}px`

  return {
    destroy() {},
  }
}
