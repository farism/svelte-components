<script context="module">
  const CALENDAR_WEEKS = 6

  const DAYS_IN_WEEK = 7

  const DAYS_IN_CALENDAR = CALENDAR_WEEKS * DAYS_IN_WEEK

  const YEAR_RANGE = 21

  const TODAY = new Date()
</script>

<script>
  import {
    addDays,
    addMonths,
    eachDayOfInterval,
    format,
    getDate,
    getDay,
    isSameDay,
    isSameMonth,
    isToday,
    setMonth,
    setYear,
    startOfMonth,
    startOfWeek,
    subDays,
    subMonths,
  } from 'date-fns'
  import range from 'lodash/range'
  import chunk from 'lodash/chunk'
  import { getContext } from 'svelte'

  import Card from './Card'
  import Dropdown from './Dropdown'
  import DropdownItem from './DropdownItem'
  import Icon from './Icon'
  import { OVERLAYTRIGGER_CONTEXT } from './OverlayTrigger'

  export let refs = {}
  export let value = null
  export let displayDate = null
  export let disabledDate = noop

  const overlayTriggerContext = getContext(OVERLAYTRIGGER_CONTEXT)

  $: date = displayDate || new Date()

  $: month = date.getMonth()

  $: year = date.getFullYear()

  $: startYear = Math.max(0, year - 10)

  $: endYear = startYear + YEAR_RANGE

  $: start = subDays(startOfMonth(date), getDay(startOfMonth(date)))

  $: end = addDays(start, DAYS_IN_CALENDAR - 1)

  $: days = eachDayOfInterval({ start, end })

  $: weeks = chunk(days, DAYS_IN_WEEK)

  function noop() {}

  function formatDayOfWeek(day) {
    return format(addDays(startOfWeek(new Date()), day), 'EEEEEE')
  }

  function formatMonth(month) {
    return format(new Date().setMonth(month), 'MMM')
  }

  function onSelectMonth({ value }) {
    date = setMonth(date, value)
  }

  function onSelectYear({ value }) {
    date = setYear(date, value)
  }

  function onClickPreviousMonth(e) {
    date = subMonths(date, 1)
  }

  function onClickNextMonth(e) {
    date = addMonths(date, 1)
  }

  function onClickDay(e, day) {
    value = day

    // TODO - find a way to move this into DateSelect
    if (overlayTriggerContext) {
      overlayTriggerContext.hide(e)
    }
  }
</script>

<style>
  .calendar {
  }

  .calendar :global(.card) {
    display: inline-block;
  }

  .container {
    padding: var(--calendar-padding);
  }

  .header {
    align-items: center;
    display: flex;;
    margin-bottom: var(--calendar-header-margin-bottom);
    padding: 0 var(--size-xs);
  }

  .pagination {
    --icon-size: var(--size-sm);

    align-items: center;
    color: var(--calendar-pagination-color);
    cursor: pointer;
    display: inline-flex;
    background: var(--calendar-pagination-background-color);
    border: 1px solid var(--calendar-pagination-border-color);
    border-radius: 100%;
    flex: 0 0 auto;
    height: var(--calendar-pagination-size);
    justify-content: center;
    line-height: 0;
    margin: 0 var(--calendar-header-pagination-spacing);
    padding: 0;
    width: var(--calendar-pagination-size);
  }

  .pagination:hover {
    --calendar-pagination-background-color: var(--calendar-pagination-background-color-hover);
    --calendar-pagination-color: var(--calendar-pagination-color-hover);
  }

  .pagination:focus {
    border-color: var(--focus-border-color);
    box-shadow: var(--focus-box-shadow);
    outline: var(--focus-outline);
  }

  .dropdowns {
    display: flex;
    flex: 1 1 auto;
  }

  .month-dropdown,
  .year-dropdown {
    box-sizing: border-box;
    display: flex;
    flex: 0 0 50%;
    padding: 0 var(--calendar-header-dropdown-spacing);
  }

  .week {
    border-radius: var(--calendar-cell-border-radius);
    display: flex;
    margin-bottom: var(--calendar-week-margin-bottom);
  }

  .week.days-of-week {
    font-weight: bold;
  }

  .week:last-child {
    margin-bottom: 0;
  }

  .day {
    align-items: center;
    background-color: var(--calendar-day-background-color);
    border-radius: var(--calendar-cell-border-radius);
    color: var(--calendar-day-color);
    cursor: pointer;
    display: flex;
    flex: 0 0 auto;
    font-size: var(--calendar-day-font-size);
    height: var(--calendar-day-size);
    justify-content: center;
    width: var(--calendar-day-size);
  }

  .day.today {
    font-weight: bold;
  }

  .day.other-month {
    --calendar-day-color: var(--calendar-day-color-other-month);
  }

  .day:hover {
    --calendar-day-background-color: var(--calendar-day-background-color-hover);
    --calendar-day-color: var(--calendar-day-color-hover);

    font-weight: bold;
  }

  .day.active {
    --calendar-day-background-color: var(--calendar-day-background-color-active);
    --calendar-day-color: var(--calendar-day-color-active);
  }

  .day.disabled {
    --calendar-day-background-color: var(--calendar-day-background-color-disabled);
    --calendar-day-color: var(--calendar-day-color-disabled);

    border-radius: 0;
    pointer-events: none;
  }

  .day.other-month.disabled {
    --calendar-day-color: var(--calendar-day-color-other-month-disabled);
  }
</style>

<div class="calendar" bind:this={refs.root}>
  <Card>
    <div class="container">
      <div class="header">
        <button class="pagination" on:click={onClickPreviousMonth}>
          <Icon icon="chevron-left" />
        </button>
        <div class="dropdowns">
          <div class="month-dropdown">
            <Dropdown bind:refs={refs.month} block onSelect={onSelectMonth} label={format(date, 'MMM')}>
              {#each range(0, 12) as i}
                <DropdownItem value={i} active={month === i}>
                  {formatMonth(i)}
                </DropdownItem>
              {/each}
            </Dropdown>
          </div>
          <div class="year-dropdown">
            <Dropdown bind:refs={refs.year} block onSelect={onSelectYear} label="{year}">
              {#each range(startYear, endYear) as i}
                <DropdownItem value={i} active={year === i}>
                  {i}
                </DropdownItem>
              {/each}
            </Dropdown>
          </div>
        </div>
        <button class="pagination" on:click={onClickNextMonth}>
          <Icon icon="chevron-right" />
        </button>
      </div>
      <div class="week days-of-week">
        {#each range(0, 7) as i}
          <div class="day">
            {formatDayOfWeek(i)}
          </div>
        {/each}
      </div>
      {#each weeks as week, i}
        <div class="week">
          {#each week as day, j}
            <div
              class="day"
              class:today={isToday(day)}
              class:disabled={disabledDate(day)}
              class:other-month={!isSameMonth(day, date)}
              class:active={isSameDay(day, value)}
              on:click={function(e){
                onClickDay(e, day)
              }}
            >
              {format(day, 'd')}
            </div>
          {/each}
        </div>
      {/each}
    </div>
  </Card>
</div>
