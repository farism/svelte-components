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

interface AffixParams {
  canFlip: boolean
  padding: number
  placement: Edge | [Edge, Align]
  target: HTMLElement
}

const validators: Validators = {
  edge: {
    top: function(container, target, overlay) {
      return target.top - container.top >= overlay.height
    },
    right: function(container, target, overlay) {
      return container.width - target.right >= overlay.width
    },
    bottom: function(container, target, overlay) {
      return container.height - target.bottom >= overlay.height
    },
    left: function(container, target, overlay) {
      return target.left - container.left >= overlay.width
    },
  },
  align: {
    top: function(container, target, overlay) {
      return container.height - target.top >= overlay.height
    },
    right: function(container, target, overlay) {
      return target.right - container.left >= overlay.width
    },
    bottom: function(container, target, overlay) {
      return target.bottom - container.top >= overlay.height
    },
    left: function(container, target, overlay) {
      return container.width - target.left >= overlay.width
    },
    center: function() {
      return true
    },
  },
}

const updaters: Updaters = {
  edge: {
    top: function(target, overlay) {
      return { top: target.top - overlay.height }
    },
    right: function(target, overlay) {
      return { left: target.right }
    },
    bottom: function(target, overlay) {
      return { top: target.bottom }
    },
    left: function(target, overlay) {
      return { left: target.left - overlay.width }
    },
  },
  align: {
    top: function(target, overlay) {
      return { top: target.top }
    },
    right: function(target, overlay) {
      return { left: target.right - overlay.width }
    },
    bottom: function(target, overlay) {
      return { top: target.bottom - overlay.height }
    },
    left: function(target, overlay) {
      return { left: target.left }
    },
    center: function(target, overlay) {
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

function buildPlacementArray(
  placement: Placement | Edge | [Edge, Align]
): [Edge, Align] {
  if (Array.isArray(placement)) {
    return placement
  } else if (placement.includes('-')) {
    return placement.split('-') as [Edge, Align]
  }

  return [placement, 'center'] as [Edge, Align]
}

function applyPadding(pad: number = 0, edge: Edge, rect: Rect): Rect {
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

export function affix(
  node: HTMLElement,
  { canFlip = true, padding = 0, placement, target }: AffixParams
) {
  function setPosition() {
    if (!node || !target) {
      return
    }

    const [edge, align] = buildPlacementArray(placement)

    const edgeFlipped = flipEdge[edge]

    const alignFlipped = flipAlign[align]

    const container = defaultContainer()

    const targetRect = applyPadding(
      padding,
      edge,
      getBoundingClientRect(target)
    )

    const nodeRect = getBoundingClientRect(node)

    const shouldFlipEdge =
      canFlip &&
      !validators.edge[edge](container, targetRect, nodeRect) &&
      validators.edge[edgeFlipped](container, targetRect, nodeRect)

    const shouldFlipAlign =
      canFlip &&
      !validators.align[align](container, targetRect, nodeRect) &&
      validators.align[alignFlipped](container, targetRect, nodeRect)

    const edgePosition = updaters.edge[shouldFlipEdge ? edgeFlipped : edge](
      targetRect,
      nodeRect
    )

    const alignPosition = updaters.align[
      shouldFlipAlign ? alignFlipped : align
    ](targetRect, nodeRect)

    const { left = 0, top = 0 } = { ...edgePosition, ...alignPosition }

    node.style.transform = `translate(${left || 0}px, ${top || 0}px)`
  }

  const throttledSetPosition = throttle(setPosition, 16)

  window.addEventListener('resize', throttledSetPosition)

  document.addEventListener('scroll', throttledSetPosition)

  setPosition()

  return {
    destroy() {
      window.removeEventListener('resize', throttledSetPosition)

      document.removeEventListener('scroll', throttledSetPosition)
    },
  }
}
