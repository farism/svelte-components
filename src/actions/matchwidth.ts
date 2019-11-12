interface MatchWidthParams {
  target: HTMLElement
}

export function matchwidth(node: HTMLElement, { target }: MatchWidthParams) {
  console.log({ node, target })

  node.style.minWidth = `${Math.max(node.clientWidth, target.clientWidth)}px`

  return {
    destroy() {},
  }
}
