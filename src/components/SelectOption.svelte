<script>
  import ListItem from './ListItem'

  let active = false
  export { active as selected }
  export let value = null
</script>

<style>
  .select-option {

  }
</style>

<div class="select-option">
  <ListItem {active} {value}>
    <slot />
  </ListItem>
</div>
