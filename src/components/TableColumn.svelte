<script>
</script>

<style>
  .table-column {
    display: flex;
    flex: 1 1 auto;
  }

  .table-column + .table-column {
    border-left: 1px solid black;
  }
</style>

<div class="table-column">
  <slot />
</div>
