<script>
  import { get } from 'svelte/store'
  import { affix } from '../actions/affix'
  import { clickoutside } from '../actions/clickoutside'
  import { portal } from '../actions/portal'
  import { isEventSource } from '../utils/isEventSource'
  import { wrapPromise } from '../utils/wrapPromise'

	export let afterHide = noop
	export let afterShow = noop
	export let beforeShow = defaultBeforeShow
	export let beforeHide = defaultBeforeHide
  export let hideDelay = 100
  export let placement = 'top'
	export let showDelay = 0
  export let trigger = 'click'

	let visible = false
	let timer = 0
	let overlayNode
	let triggerNode

	function noop() {}

	function defaultBeforeShow() {
		return true
	}

	function defaultBeforeHide() {
		return true
	}

	function toggle(e) {
		if(visible){
			hide(e)
		} else {
			show(e)
		}
	}

	function show(e) {
		clearTimeout(timer)

		wrapPromise(beforeShow(e)).then(function(shouldShow){
			if(shouldShow) {
				timer = setTimeout(function(){
					visible = true

					afterShow()
				}, showDelay)
			}
		})
	}

	function hide(e) {
		clearTimeout(timer)

		wrapPromise(beforeHide(e)).then(function(shouldHide){
			if(shouldHide) {
				timer = setTimeout(function(){
					visible = false

					afterHide()
				}, hideDelay)
			}
		})
	}

	const onClick = trigger === 'click' ? toggle : noop

	const onMouseEnter = trigger === 'hover' ? show : noop

	const onMouseLeave = trigger === 'hover' ? hide : noop

	function onKeyDown(e) {
		if(isEventSource(triggerNode, e)) {
			if(['ArrowDown', 'Down'].includes(e.key)) {
				show()
			} else if(['Escape', 'Esc'].includes(e.key)) {
				hide()
			}
		} else if(isEventSource(overlayNode, e)) {
			if(['Escape', 'Esc'].includes(e.key)) {
				hide()
			}
		}
	}
</script>

<style>
  .target {
    display: inline-flex;
  }

	.overlay {
		background: green;
    color: white;
    left: 0;
    position: fixed;
    top: 0;
	}
</style>

<span
  bind:this={triggerNode}
  on:click={onClick}
  on:mouseenter={onMouseEnter}
  on:mouseleave={onMouseLeave}
  on:keydown={onKeyDown}
  class="target"
>
  <slot name="trigger" />
</span>

{#if visible}
  <div
    use:affix={{
      padding: 2,
      placement: placement,
      target: triggerNode
    }}
    use:portal
    use:clickoutside
    on:clickoutside={hide}
    on:mouseenter={onMouseEnter}
    on:mouseleave={onMouseLeave}
    class="overlay"
  >
    <slot name="overlay" />
  </div>
{/if}
