<script>
  import ListItem from './ListItem'

  export let value = null
</script>

<style>
  .select-item {

  }
</style>

<div class="select-item">
  <ListItem {value}>
    <slot />
  </ListItem>
</div>
