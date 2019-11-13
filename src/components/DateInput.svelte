<script>
  import { getDaysInMonth } from 'date-fns'

  import Clear from './Clear'
  import DateInputSegment from './DateInputSegment'
  import Icon from './Icon'

  export let refs = {}
  export let delimiter = '/'
  export let disabled = false
  export let value = null

  const SEGMENTS = {
    'en-AU':  ['day', 'month', 'year'],
    'en-CA':  ['month', 'day', 'year'],
    'en-GB':  ['day', 'month', 'year'],
    'en':     ['month', 'day', 'year'],
    'es':     ['day', 'month', 'year'],
    'fr-CA':  ['day', 'month', 'year'],
    'is-IS':  ['day', 'month', 'year'],
    'ko':     ['year', 'month', 'day'],
    'pseudo': ['day', 'month', 'year'],
    'pt':     ['day', 'month', 'year'],
    'th-TH':  ['day', 'month', 'year'],
  }

  const locale = 'en'

  const segments = SEGMENTS[locale]

  const segmentProps = [
    { [segments[0]]: true },
    { [segments[1]]: true },
    { [segments[2]]: true },
  ]

  let month = null

  let day = null

  let year = null

  $: isEditing = month !== null || day !== null || year !== null

  $: isValid = month !== null && day !== null && year !== null

  $: date = new Date(year, month, day)

  function onChangeSegment({ detail }) {
    if(detail.month) {
      month = detail.value
    } else if(detail.day) {
      day = detail.day
    } else if(detail.year) {
      day = detail.year
    }
  }

  function onClickClear(e) {
    month = day = year = null
  }
</script>

<style>
  .date-input {
    --date-input-border-color: var(--color-gray-50);
    --date-input-border-radius: var(--border-radius-md);
    --date-input-border-width: 1px;
    --date-input-delimiter-spacing: var(--size-2xs);
    --date-input-icon-spacing: var(--size-sm);

    align-items: center;
    border: var(--date-input-border-width) solid var(--date-input-border-color);
    border-radius: var(--date-input-border-radius);
    display: inline-flex;
    padding-left: var(--size-xs);
  }

  .delimiter {
    padding: 0 var(--date-input-delimiter-spacing);
  }

  .icon {
    margin: var(--date-input-icon-spacing);
  }
</style>

<div class="date-input {locale}" class:disabled>
  <DateInputSegment
    type={segments[0]}
    bind:ref="{refs.segment0}"
    on:change={onChangeSegment}
  />
  <div class="delimiter">
    {delimiter}
  </div>
  <DateInputSegment
    type={segments[1]}
    bind:ref="{refs.segment1}"
    on:change={onChangeSegment}
  />
  <div class="delimiter">
    {delimiter}
  </div>
  <DateInputSegment
    type={segments[2]}
    bind:ref="{refs.segment2}"
    on:change={onChangeSegment}
  />
  <div class="icon">
    {#if isEditing}
      <Clear sm on:click={onClickClear} />
    {:else}
      <Icon sm icon="calendar" />
    {/if}
  </div>
</div>
