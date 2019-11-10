export function scrollElementIntoView(index: number, element: HTMLElement) {
  const parent = element.parentElement

  if (!parent) {
    return
  }

  if (index === 0) {
    parent.scrollTop = 0

    return
  }

  const top = element.offsetTop - parent.offsetTop

  if (top < parent.scrollTop) {
    parent.scrollTop = top
  }

  if (top + element.clientHeight > parent.scrollTop + parent.clientHeight) {
    console.log(top, parent.clientHeight, element.clientHeight)
    parent.scrollTop = top - parent.clientHeight + element.clientHeight
  }
}
