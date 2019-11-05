<script>
  import { setContext } from 'svelte'
  import { writable } from 'svelte/store'

  export let initial = 0

  const zIndex = writable(initial)

  setContext('ZIndex', zIndex)
</script>

<div>
  <slot />
</div>
