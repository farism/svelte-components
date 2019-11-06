<script>
  export let level = 20;
</script>

<style>
  .card {
    background-color: var(--card-background-color);
    border-radius: var(--card-border-radius);
    box-shadow: var(--card-box-shadow);
    transition: var(--card-transition);
  }

  .card--10 {
    --card-box-shadow: var(--shadow-10);
  }

  .card--20 {
    --card-box-shadow: var(--shadow-20);
  }

  .card--30 {
    --card-box-shadow: var(--shadow-30);
  }

  .card--40 {
    --card-box-shadow: var(--shadow-40);
  }

  .card--50 {
    --card-box-shadow: var(--shadow-50);
  }
</style>

<div class="card card--{level}">
  <slot></slot>
</div>
