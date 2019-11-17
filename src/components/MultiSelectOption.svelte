<script>
  import ListItem from './ListItem'

  let active = false
  export { active as selected }
  export let value = null
</script>

<style>
  .multi-select-option {

  }
</style>

<div class="multi-select-option">
  <ListItem {active} {value}>
    <slot />
  </ListItem>
</div>
