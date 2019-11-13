<script>
  import { tick } from 'svelte'

  import { matchwidth } from '../actions/matchwidth'
  import Button from './Button'
  import Card from './Card'
  import List from './List'
  import OverlayTrigger from './OverlayTrigger'

  export let refs = {}
  export let afterHide = noop
  export let afterShow = noop
  export let beforeShow = noop
  export let beforeHide = noop
  export let hideDelay = 100
  export let block = false
  export let label = ''
  export let placeholder = ''
  export let placement = 'bottom-left'
  export let onSelect = noop
  export let search = ''
  export let searchable = false
  export let showDelay = 0
  export let trigger = 'click'
  export let value = null
  export let visible = false

  let overlayTrigger = null

  function noop() {}

  async function autofocus(node) {
    await tick()

    if(refs.list.search) {
      refs.list.search.focus()
    } else {
      refs.list.root.focus()
    }
  }

  function onListSelect(selection, e) {
    onSelect(selection)

    value = selection.value

    overlayTrigger.hide(e)
  }

  function onAfterHide(e) {
    refs.trigger.focus()

    afterHide(e)
  }
</script>

<style>
  .select {}

  .block,
  .block .trigger {
    display: inline-flex;
    flex: 1 1 auto;
  }

  .overlay {}

  .overlay :global(.list) {
    max-height: 312px;
    outline: none;
  }
</style>

<div class="select" class:block bind:this="{refs.root}">
  <OverlayTrigger
    bind:this="{overlayTrigger}"
    bind:refs="{refs.overlayTrigger}"
    bind:placement
    bind:trigger
    bind:visible
    bind:beforeHide
    bind:beforeShow
    bind:afterHide={onAfterHide}
    bind:afterShow
    bind:hideDelay
    bind:showDelay
  >
    <div slot="trigger" class="trigger">
      <Button select dropdown {block} bind:ref="{refs.trigger}">
        {label || placeholder}
      </Button>
    </div>
    <div
      slot="overlay"
      class="overlay"
      use:autofocus
      use:matchwidth={{ target: refs.overlayTrigger.trigger }}
    >
      <Card>
        <List {search} {searchable} onSelect="{onListSelect}" bind:refs="{refs.list}">
          <slot />
        </List>
      </Card>
    </div>
  </OverlayTrigger>
</div>
