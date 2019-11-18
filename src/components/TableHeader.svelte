<script>
</script>

<style>
  .table-header {
    border-bottom: 1px solid black;
  }

  .table-header > :global(*) {
    display: flex;
  }
</style>

<div class="table-header">
  <slot />
</div>
