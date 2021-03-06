<script>
  import { flyplacement } from '../transitions/flyplacement'
  import { isEventSource } from '../utils/isEventSource'
  import Calendar from './Calendar'
  import DateInput from './DateInput'
  import OverlayTrigger from './OverlayTrigger'

  export let refs = {}
  export let placement = 'bottom-left'
  export let trigger = 'click'
  export let beforeHide = noop
  export let beforeShow = noop
  export let afterHide = noop
  export let afterShow = noop
  export let value = null

  function noop() {}

  function onBeforeHide(e) {
    // If the calendar is already open, clicking onto the date select should not
    // hide, i.e. override the default <OverlayTrigger trigger="click"> functionality
    if (isEventSource(refs.dateSelect, e)) {
      return false
    }

    // Due to the calendars month/year dropdowns being portaled, selecting values
    // from them will trigger a clickoutside/hide event. So we need to check if
    // they were clicked and prevent hiding if so.
    if (
      isEventSource(refs.calendar.month.overlayTrigger.overlay, e) ||
      isEventSource(refs.calendar.year.overlayTrigger.overlay, e)
    ) {
      return false
    }

    return beforeHide(e)
  }
</script>

<style>
  .date-select {
    display: inline-flex;
  }

  .trigger {}

  .overlay {}
</style>

<div class="date-select" bind:this={refs.dateSelect}>
  <OverlayTrigger
    bind:refs={refs.overlayTrigger}
    bind:placement
    bind:trigger
    bind:beforeHide={onBeforeHide}
    bind:beforeShow
    bind:afterHide
    bind:afterShow
  >
    <div slot="trigger" class="trigger">
      <DateInput
        bind:value
        bind:refs={refs.dateInput}
      />
    </div>
    <div slot="overlay" class="overlay" transition:flyplacement={{ placement }}>
      <Calendar
        date={value}
        bind:value
        bind:refs={refs.calendar}
      />
    </div>
  </OverlayTrigger>
</div>
