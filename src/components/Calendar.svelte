<script context="module">
  export const CALENDAR_WEEKS = 6

  export const DAYS_IN_WEEK = 7

  export const DAYS_IN_CALENDAR = CALENDAR_WEEKS * DAYS_IN_WEEK

  const TODAY = new Date()
</script>

<script>
  import {
    addDays,
    eachDayOfInterval,
    format,
    getDay,
    getDate,
    isSameMonth,
    isToday,
    setMonth,
    setYear,
    startOfMonth,
    startOfWeek,
    subDays,
  } from 'date-fns'
  import range from 'lodash/range'
  import chunk from 'lodash/chunk'

  import Card from './Card'
  import Dropdown from './Dropdown'
  import DropdownItem from './DropdownItem'
  import Icon from './Icon'

  export let disabledDate = noop
  export let value = null

  let date = new Date()

  $: month = date.getMonth()

  $: year = date.getYear()

  function noop() {}

  const start = subDays(startOfMonth(date), getDay(startOfMonth(date)))

  const end = addDays(start, DAYS_IN_CALENDAR - 1)

  const days = eachDayOfInterval({ start, end })

  const weeks = chunk(days, DAYS_IN_WEEK)

  function formatDayOfWeek(day) {
    return format(addDays(startOfWeek(new Date()), day), 'EEEEEE')
  }

  function formatMonth(month) {
    return format(new Date().setMonth(month), 'MMM')
  }

  function onSelectMonth(i) {
    date = setMonth(date, i)
  }

  function onSelectYear(i) {
    date = setYear(date, i)
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

  .dropdown {
    display: flex;
    flex: 1 1 auto;
    margin: 0 var(--calendar-header-dropdown-spacing);
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

<div class="calendar">
  <Card>
    <div class="container">
      <div class="header">
        <button class="pagination">
          <Icon icon="chevron-left" />
        </button>
        <div class="dropdown">
          <Dropdown block onSelect={onSelectMonth}>
            {#each range(0, 12) as i}
              <DropdownItem value={i} active={month === i}>
                {formatMonth(i)}
              </DropdownItem>
            {/each}
          </Dropdown>
        </div>
        <div class="dropdown">
          <Dropdown block onSelect={onSelectYear}>
            {#each range(0, 11) as i}
              <DropdownItem value={i} active={year === i}>
                {formatMonth(i)}
              </DropdownItem>
            {/each}
          </Dropdown>
        </div>
        <button class="pagination">
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
              class:other-month={!isSameMonth(day, TODAY)}
            >
              {format(day, 'd')}
            </div>
          {/each}
        </div>
      {/each}
    </div>
  </Card>
</div>
