<script context="module">
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
</script>

<script>
  import { getDaysInMonth, isValid } from 'date-fns'

  import Clear from './Clear'
  import DateInputSegment from './DateInputSegment'
  import Icon from './Icon'

  export let refs = { segments: [] }
  export let delimiter = '/'
  export let disabled = false
  export let value = null

  const locale = 'en'

  const segments = SEGMENTS[locale]

  const month = segments.indexOf('month')

  const day = segments.indexOf('day')

  const year = segments.indexOf('year')

  $: values = getValues(value)

  $: isEmpty = values.every(val => val === null)

  function isIncomplete(values) {
    return values.some(function(val) {
      return val === null
    })
  }

  function getValues(date) {
    if (!date) {
      return values ? values : [null, null, null]
    }

    const vals = []
    vals[month] = date.getMonth() + 1
    vals[day] = date.getDate()
    vals[year] = date.getFullYear()

    return vals
  }

  function onClickDateInput(e) {
    // if a user clicks on the date input but not into a segment,
    // then automatically focus the first segment
    if (!refs.segments.some(ref => ref === e.target)) {
      refs.segments[0].focus()
    }
  }

  function onClickClear(e) {
    // If this component is being used in an OverlayTrigger, we don't want
    // the event to propagate or it will cause it to hide
    e.stopPropagation()

    refs.segments[0].focus()

    value = null

    values = [null, null, null]
  }

  function onChange(event) {
    values[segments.indexOf(event.type)] = event.value

    // create a temporary date using current year and month to check for max day
    const date = isIncomplete(values)
      ? null
      : new Date(values[year], values[month] - 1, 1)

    // clamp the day if we have a valid value
    if (date && values[day]) {
      values[day] = Math.min(values[day], getDaysInMonth(date))
    }

    value = isIncomplete(values)
      ? null
      : new Date(values[year], values[month] - 1, values[day])
  }
</script>

<style>
  .date-input {
    align-items: center;
    border: var(--date-input-border-width) solid var(--date-input-border-color);
    border-radius: var(--date-input-border-radius);
    color: var(--color-gray-75);
    display: inline-flex;
    font-size: var(--date-input-font-size);
    height: var(--date-input-height);
    padding-left: var(--size-xs);
  }

  .date-input:focus-within {
    border-color: var(--focus-border-color);
    box-shadow: var(--focus-box-shadow);
    outline: var(--focus-outline);
  }

  .delimiter {
    padding: 0 var(--date-input-delimiter-spacing);
  }

  .icon {
    --clear-color: var(--color-gray-75);
    --icon-color: var(--color-gray-75);

    cursor: pointer;
    margin: 0 var(--date-input-icon-spacing);
  }
</style>

<div class="date-input" class:disabled on:click={onClickDateInput}>
  <DateInputSegment
    type={segments[0]}
    value={values[0]}
    next={refs.segments[1]}
    bind:ref={refs.segments[0]}
    {onChange}
    {locale}
  />
  <div class="delimiter">
    {delimiter}
  </div>
  <DateInputSegment
    type={segments[1]}
    value={values[1]}
    prev={refs.segments[0]}
    next={refs.segments[2]}
    bind:ref={refs.segments[1]}
    {onChange}
    {locale}
  />
  <div class="delimiter">
    {delimiter}
  </div>
  <DateInputSegment
    type={segments[2]}
    value={values[2]}
    prev={refs.segments[1]}
    bind:ref={refs.segments[2]}
    {onChange}
    {locale}
  />
  <div class="icon">
    {#if isEmpty}
      <Icon sm icon="calendar" />
    {:else}
      <Clear sm bind:ref={refs.clear} on:click={onClickClear} />
    {/if}
  </div>
</div>
