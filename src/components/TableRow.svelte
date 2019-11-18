<script>
</script>

<style>
  .table-row {
    display: flex;
    border-radius: 2px;
  }

  .table-row + .table-row {
    border-top: 1px solid black
  }
</style>

<div class="table-row">
  <slot />
</div>
