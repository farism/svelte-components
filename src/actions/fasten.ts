import { getBoundingClientRect } from '../utils/getBoundingClientRect'

import throttle from 'lodash/throttle'

type Edge = 'top' | 'bottom' | 'left' | 'right'

type Align = Edge | 'center'

type Placement =
  | Edge
  | Align
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'left-top'
  | 'left-bottom'
  | 'right-top'
  | 'right-bot'

export interface Rect extends ClientRect {
  x?: number
  y?: number
}

type Validator = (container: Rect, target: Rect, overlay: Rect) => boolean

type Updater = (target: Rect, overlay: Rect) => Position

type Validators = {
  align: { [k in Align]: Validator }
  edge: { [k in Edge]: Validator }
}

type Updaters = {
  align: { [k in Align]: Updater }
  edge: { [k in Edge]: Updater }
}

interface Position {
  left?: number
  top?: number
}

interface FastenParams {
  canFlip?: boolean
  padding?: number
  placement?: Placement
  target: HTMLElement
}

const validators: Validators = {
  edge: {
    top: function (container, target, overlay) {
      return target.top - container.top >= overlay.height
    },
    right: function (container, target, overlay) {
      return container.width - target.right >= overlay.width
    },
    bottom: function (container, target, overlay) {
      return container.height - target.bottom >= overlay.height
    },
    left: function (container, target, overlay) {
      return target.left - container.left >= overlay.width
    },
  },
  align: {
    top: function (container, target, overlay) {
      return container.height - target.top >= overlay.height
    },
    right: function (container, target, overlay) {
      return target.right - container.left >= overlay.width
    },
    bottom: function (container, target, overlay) {
      return target.bottom - container.top >= overlay.height
    },
    left: function (container, target, overlay) {
      return container.width - target.left >= overlay.width
    },
    center: function () {
      return true
    },
  },
}

const updaters: Updaters = {
  edge: {
    top: function (target, overlay) {
      return { top: target.top - overlay.height }
    },
    right: function (target, overlay) {
      return { left: target.right }
    },
    bottom: function (target, overlay) {
      return { top: target.bottom }
    },
    left: function (target, overlay) {
      return { left: target.left - overlay.width }
    },
  },
  align: {
    top: function (target, overlay) {
      return { top: target.top }
    },
    right: function (target, overlay) {
      return { left: target.right - overlay.width }
    },
    bottom: function (target, overlay) {
      return { top: target.bottom - overlay.height }
    },
    left: function (target, overlay) {
      return { left: target.left }
    },
    center: function (target, overlay) {
      return {
        left: target.left + (target.width - overlay.width) / 2,
        top: target.top + (target.height - overlay.height) / 2,
      }
    },
  },
}

const flipEdge: { [k in Edge]: Edge } = {
  top: 'bottom',
  bottom: 'top',
  left: 'right',
  right: 'left',
}

const flipAlign: { [k in Align]: Align } = {
  ...flipEdge,
  center: 'center',
}

function extractPlacementArray(
  placement: Placement | Edge | [Edge, Align]
): [Edge, Align] {
  if (Array.isArray(placement)) {
    return placement
  } else if (placement.includes('-')) {
    return placement.split('-') as [Edge, Align]
  }

  return [placement, 'center'] as [Edge, Align]
}

function flipPlacementArray([edge, align]: [Edge, Align]): [Edge, Align] {
  return [flipEdge[edge], flipAlign[align]]
}

function buildPlacementString(placement: [Edge, Align]): Placement {
  return placement.filter(p => p !== 'center').join('-') as Placement
}

function applyPadding(pad: number, edge: Edge, rect: Rect): Rect {
  if (edge === 'top' || edge === 'bottom') {
    return {
      ...rect,
      height: rect.height + pad * 2,
      top: rect.top - pad,
      bottom: rect.bottom + pad,
    }
  } else if (edge === 'left' || edge === 'right') {
    return {
      ...rect,
      width: rect.width + pad * 2,
      left: rect.left - pad,
      right: rect.right + pad,
    }
  }

  return rect
}

function defaultContainer(): Rect {
  return {
    top: 0,
    left: 0,
    width: window.innerWidth,
    height: window.innerHeight,
    bottom: window.innerWidth,
    right: window.innerWidth,
  }
}

export function fasten(
  node: HTMLElement,
  { canFlip = true, padding = 0, placement = 'top', target }: FastenParams
) {
  let currentPlacement = placement

  let actualPlacement = placement

  function dispatchFlipEvent(placement: string) {
    node.dispatchEvent(new CustomEvent('fastenflip', { detail: { placement } }))
  }

  function setPosition() {
    if (!node || !target) {
      return
    }

    const container = defaultContainer()

    const placementArr = extractPlacementArray(placement)

    const flippedArr = flipPlacementArray(placementArr)

    const targetRect = applyPadding(
      padding,
      placementArr[0],
      getBoundingClientRect(target)
    )

    const nodeRect = getBoundingClientRect(node)

    function edgeFits(edge: Edge) {
      return validators.edge[edge](container, targetRect, nodeRect)
    }

    function alignFits(align: Align) {
      return validators.align[align](container, targetRect, nodeRect)
    }

    const shouldFlipEdge =
      canFlip && !edgeFits(placementArr[0]) && edgeFits(flippedArr[0])

    const shouldFlipAlign =
      canFlip && !alignFits(placementArr[1]) && alignFits(flippedArr[1])

    const actualEdge = shouldFlipEdge ? flippedArr[0] : placementArr[0]

    const edgePosition = updaters.edge[actualEdge](targetRect, nodeRect)

    const actualAlign = shouldFlipAlign ? flippedArr[1] : placementArr[1]

    const alignPosition = updaters.align[actualAlign](targetRect, nodeRect)

    const pos = { ...alignPosition, ...edgePosition }

    const top = Math.round(pos.top || 0)

    const left = Math.round(pos.left || 0)

    node.style.transform = `translate(${left}px, ${top}px)`

    // side effect here for dispatching
    actualPlacement = buildPlacementString([actualEdge, actualAlign])

    if (actualPlacement !== currentPlacement) {
      currentPlacement = actualPlacement

      dispatchFlipEvent(currentPlacement)
    }
  }

  setPosition()

  const throttledSetPosition = throttle(setPosition, 16)

  window.addEventListener('resize', throttledSetPosition)

  document.addEventListener('scroll', throttledSetPosition)

  return {
    destroy() {
      dispatchFlipEvent(placement)

      window.removeEventListener('resize', throttledSetPosition)

      document.removeEventListener('scroll', throttledSetPosition)
    },
  }
}
