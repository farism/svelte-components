function isDOMRect(rect: ClientRect | DOMRect): rect is DOMRect {
  return (rect as DOMRect).x !== undefined
}

export function getBoundingClientRect(node: HTMLElement) {
  const rect = node.getBoundingClientRect()

  return isDOMRect(rect)
    ? rect.toJSON()
    : {
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height,
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
      }
}
