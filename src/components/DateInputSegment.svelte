  <script>
    import { getDaysInMonth } from 'date-fns'
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher();

    export let ref = null
    export let date = new Date()
    export let placeholder = ''
    export let type = null
    export let value = null

    let max = 0

    if (type === 'month') {
      max = 12
    } else if (type === 'day') {
      max = date ? getDaysInMonth(date) : 30
    } else if (type === 'year') {
      max = new Date().getFullYear() + 100
    }

    $: label = value
      ? String(value).padStart(type === 'year' ? 4 : 2, '0')
      : placeholder

    function isNumberKey(key) {
      return !isNaN(parseInt(key, 10))
    }

    function append(key) {
      const nextValue = parseInt(`${value || ''}${key}`, 10)

      return Math.min(nextValue, max)
    }

    function wrap(adjuster) {
      if (!value) {
        if(type === 'year') {
          return new Date().getFullYear()
        }

        return adjuster > 0 ? 1 : max
      } else if(adjuster > 0 && value === max) {
        return 1
      } else if(adjuster < 0 && value === 1) {
        return max
      }

      return value + adjuster
    }


    function onKeyDown(e) {
      const preValue = value

      if(e.key === 'ArrowUp') {
        e.preventDefault()

        value = wrap(1)
      } else if(e.key === 'ArrowDown') {
        e.preventDefault()

        value = wrap(-1)
      } else if(isNumberKey(e.key)) {
        // treat the value like a string buffer and append the next digit
        value = append(e.key)
      }

      if(preValue !== value) {
        if(type === 'month' && )
        dispatch('change', { type, value })
      }
    }
  </script>

  <style>
    .date-input-segment {
      --date-input-segment-background-color-focus: var(--color-blue-10);
      --date-input-segment-background-color: var(--color-white-100);
      --date-input-segment-height: 20px;

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
    bind:this={ref}
    on:keydown={onKeyDown}
    tabIndex="0"
  >
    {label}
    <!-- {max} -->
  </div>
