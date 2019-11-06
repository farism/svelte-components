<script>
  export let variant = '';
</script>

<style>
  .link {
    color: var(--link-color);
    text-decoration: none;
  }

  .link:hover {
    color: var(--link-hover-color);
    cursor: pointer;
    text-decoration: underline;
  }

  .link--gray {
    --link-color: var(--link-color);
    --link-hover-color: var(--color-orange-60);
  }

  .link--white {
    --link-color: var(--color-white-100);
  }
</style>

<a class="link link--{variant}"><slot /></a>
