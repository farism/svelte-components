<script>
  import { afterUpdate, onDestroy, onMount, tick } from 'svelte'
  import isEqual from 'lodash/isEqual'
  import throttle from 'lodash/throttle'

  import { getBoundingClientRect } from '../utils/getBoundingClientRect'
  import Arrow from './Arrow'
  import Card from './Card'
  import List from './List'
  import ListItem from './ListItem'
  import OverlayTrigger from './OverlayTrigger'

  export let refs = {}
  export let active = null
  export let tabs = []

  let moreOpened = false

  let overflowingAt = -1

  $: overflowingTabs = tabs.slice(overflowingAt)

  $: activeIndex = tabs.findIndex(function(tab) {
    return isEqual(tab, active)
  })

  $: overflowingContainsActive = activeIndex >= overflowingAt

  function checkOverflow() {
    const available = getBoundingClientRect(refs.container).width

    const more = getBoundingClientRect(refs.more).width

    const { subtotals } = refs.tabs
      .map(getBoundingClientRect)
      .reduce(
        function({ total, subtotals }, { width }) {
          return {
            subtotals: [...subtotals, total + width],
            total: total + width,
          }
        },
        {
          subtotals: [],
          total: 0
        }
      )

    overflowingAt = subtotals.findIndex(function(value) {
      return value >= available - more
    })
  }

  async function autofocus(node) {
    await tick()

    if (refs.list.search) {
      refs.list.search.focus()
    } else {
      refs.list.root.focus()
    }
  }

  const throttledCheckOverflow = throttle(checkOverflow, 100)

  window.addEventListener('resize', throttledCheckOverflow)

  afterUpdate(function(){
    checkOverflow()
  })

  onDestroy(function() {
    window.removeEventListener('resize', throttledCheckOverflow)
  })
</script>

<style>
  .tabs {
    --tabs-border-color: var(--color-orange-60);
    --tabs-border-width: var(--size-2xs);
    --tabs-height: calc(var(--size-xl) + var(--tabs-border-width));
    --tabs-label-line-height: 20px;
  }

  .tabs.overflowing .more {
    position: initial;
    visibility: visible;
  }

  .tabs.more-opened {
    --arrow-color-fill: var(--color-orange-60);
  }

  .list {
    align-items: stretch;
    display: flex;
    height: var(--tabs-height);
  }

  .tab {
    align-items: stretch;
    display: flex;
    cursor: default;
    box-sizing: border-box;
    padding-right: var(--size-xl);
  }

  .tab.overflow {
    position: absolute;
    visibility: hidden;
  }

  .tab.more {
    padding-right: 0;
  }

  .tab.more {
    padding-right: 0;
  }

  .tab.active .label {
    border-bottom-color: var(--tabs-border-color);
  }

  .tab :global(a) {
    color: var(--color-gray-75);
    text-decoration: none;
  }

  .tab :global(a:hover),
  .tab.active :global(a),
  .tabs.more-opened .more :global(a) {
    color: var(--color-gray-95);
  }

  .label {
    border-bottom: var(--tabs-border-width) solid transparent;
    cursor: pointer;
    display: inline-flex;
    line-height: var(--tabs-label-line-height);
    white-space: nowrap;
  }

  .more-arrow {
    align-items: center;
    display: inline-flex;
    height: var(--tabs-label-line-height);
    margin-left: var(--size-sm);
  }

  .more-overlay :global(a) {
    text-decoration: none;
    color: var(--list-item-color);
  }

  .more-overlay :global(.active a) {
    color: var(--color-orange-60);
  }
</style>

<div class="tabs" class:more-opened={moreOpened} bind:this="{refs.container}">
  <div class="list">
    {#each tabs as tab, i}
      <div
        class="tab"
        class:overflow="{overflowingAt >= 0 && i >= overflowingAt}"
        class:active="{i === activeIndex}"
        bind:this="{refs.tabs[i]}"
      >
        <div class="label">
          <slot {tab} />
        </div>
      </div>
    {/each}
    <div>
      <OverlayTrigger placement="bottom-right" trigger="click" bind:visible={moreOpened}>
        <div
          slot="trigger"
          class="tab more"
          class:overflow="{overflowingAt < 0}"
          class:active="{overflowingContainsActive}"
          bind:this="{refs.more}"
        >
          <div class="label">
            <a>More</a>
          </div>
          <div class="more-arrow">
            <Arrow down width={8} height={4} />
          </div>
        </div>
        <div slot="overlay" class=more-overlay use:autofocus>
          <Card>
            <List bind:refs="{refs.list}">
              {#each overflowingTabs as tab, i}
                <ListItem active={i === activeIndex - (tabs.length - overflowingTabs.length)}>
                  <slot {tab} />
                </ListItem>
              {/each}
            </List>
          </Card>
        </div>
      </OverlayTrigger>
    </div>
  </div>
</div>

10

4 overflowing

activeindex = 8


8 - 6
