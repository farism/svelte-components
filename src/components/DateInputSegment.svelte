<script context="module">
  const PLACEHOLDERS = {
    'en-AU':  { day: 'dd', month: 'mm', year: 'yyyy' },
    'en-CA':  { day: 'dd', month: 'mm', year: 'yyyy' },
    'en-GB':  { day: 'dd', month: 'mm', year: 'yyyy' },
    'en':     { day: 'dd', month: 'mm', year: 'yyyy' },
    'es':     { day: 'dd', month: 'mm', year: 'yyyy' },
    'fr-CA':  { day: 'dd', month: 'mm', year: 'yyyy' },
    'is-IS':  { day: 'dd', month: 'mm', year: 'yyyy' },
    'ko':     { day: 'dd', month: 'mm', year: 'yyyy' },
    'pseudo': { day: 'dd', month: 'mm', year: 'yyyy' },
    'pt':     { day: 'dd', month: 'mm', year: 'yyyy' },
    'th-TH':  { day: 'dd', month: 'mm', year: 'yyyy' },
  }
</script>

<script>
  import { getDaysInMonth } from 'date-fns'

  export let ref = null
  export let date = null
  export let locale = 'en'
  export let next = null
  export let onChange = noop
  export let placeholder = ''
  export let prev = null
  export let type = null
  export let value = null

  let appending = false

  $: label = value === null
    ? PLACEHOLDERS[locale][type]
    : String(value).padStart(type === 'year' ? 4 : 2, '0')

  let min = 1

  let max = 0

  if (type === 'month') {
    max = 12
  } else if (type === 'day') {
    max = 31
  } else if (type === 'year') {
    min = new Date().getFullYear() - 100
    max = min + 200
  }

  function noop() {}

  function update(value) {
    onChange({ type, value })
  }

  function isNumberKey(key) {
    return !isNaN(parseInt(key, 10))
  }

  function append(key, value) {
    const valueString = value === null ?  '' : String(value)

    return Math.max(0, parseInt(`${valueString}${key}`, 10))
  }

  function wrap(adjuster) {
    if (!value) {
      if(type === 'year') {
        return new Date().getFullYear()
      }

      return adjuster > 0 ? 1 : max
    } else if(adjuster > 0 && value === max) {
      return min
    } else if(adjuster < 0 && value === min) {
      return max
    }

    return value + adjuster
  }

  function onKeyDown(e) {
    if(['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
      e.preventDefault()
    }

    if(e.key === 'ArrowLeft' && prev) {
      prev.focus()
    } else if(e.key === 'ArrowRight' && next) {
      next.focus()
    } else if(e.key === 'ArrowUp') {
      update(wrap(1))
    } else if(e.key === 'ArrowDown') {
      update(wrap(-1))
    } else if(e.key === 'Backspace'){
      // if the segment is empty then go to the previous segment
      if(value === null && prev) {
        prev.focus()
      }

      update(null)
    } else if(isNumberKey(e.key)) {

      // treat the value like a string buffer and append the next digit
      const nextValue = Math.min(max, append(e.key, appending ? value : ''))

      // current value digit length has reached max digit length
      const reachedLimit = String(String(nextValue)).length === String(max).length;

      // adding a digit to the current value will take us over the max
      const reachedMax = append('0', nextValue) > max

      if (next && (reachedLimit || reachedMax)) {
        next.focus()
      } else {
        appending = true
      }


      update(nextValue)
    }
  }

  function onFocus(e) {
    appending = false
  }

  function onBlur(e) {
    appending = false

    if (value === 0) {
      update(1)
    }
  }
</script>

<style>
  .date-input-segment {
    background-color: var(--date-input-segment-background-color);
    height: var(--date-input-segment-height);
    outline: none;
    text-align: center;
    transition: 0.1s background-color ease-out
  }

  .date-input-segment:focus {
    --date-input-segment-background-color: var(--date-input-segment-background-color-focus);
  }

  .month {
    width: 26px;
  }

  .day {
    width: 26px;
  }

  .year {
    width: 40px;
  }
</style>

<div
  class="date-input-segment {type}"
  tabIndex="0"
  bind:this={ref}
  on:blur={onBlur}
  on:focus={onFocus}
  on:keydown={onKeyDown}
>
  {label}
</div>
