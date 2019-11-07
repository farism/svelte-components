interface $$Props {
  $$slots?: {
    [k: string]: any
  }
}

export function checkSlot($$props: $$Props, slotName = 'default') {
  if (!$$props || !$$props.$$slots) {
    return false
  }

  return !!$$props.$$slots[slotName]
}
