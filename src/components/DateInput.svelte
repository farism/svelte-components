<script context="module">
  const EMPTY_VALUES = [null, null, null]

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

  const today = new Date()

  const locale = 'en'

  const segments = SEGMENTS[locale]

  const month = segments.indexOf('month')

  const day = segments.indexOf('day')

  const year = segments.indexOf('year')

  let values = getValues(value)

  function isIncomplete(values) {
    return values.some(function(val) {
      return val === null
    })
  }

  function getValues(date) {
    if (!date) {
      return [null, null, null]
    }

    const vals = []
    vals[month] = date.getMonth() + 1
    vals[day] = date.getDate()
    vals[year] = date.getFullYear()

    return vals
  }

  function onClickClear(e) {
    value = null

    values = [null, null, null]

    if (refs.segments[0]) {
      refs.segments[0].focus()
    }
  }

  function onChange(event) {
    values[segments.indexOf(event.type)] = event.value

    // create a temporary date to check for max day clamping
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
    display: inline-flex;
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
    margin: var(--date-input-icon-spacing);
  }
</style>

<br />

{values[0]} / {values[1]} / {values[2]} : {value}

<br />

<div class="date-input" class:disabled>
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
    {#if false}
      <Icon sm icon="calendar" />
    {:else}
      <Clear sm bind:ref={refs.clear} on:click={onClickClear} />
    {/if}
  </div>
</div>
