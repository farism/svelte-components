<script>
  import paths from '@procore/core-icons/dist/paths.json'

  let className = ''
  export { className as class };
  export let icon = ''
  export let size = 'sm'
</script>

<style>
  .icon {
    cursor: inherit;
    display: inline-flex;
    pointer-events: none;
  }

  .icon--sm svg {
    height: var(--icon-sm-size);
    width: var(--icon-sm-size);
  }

  .icon--md svg {
    height: var(--icon-md-size);
    width: var(--icon-md-size);
  }

  .icon--lg svg {
    height: var(--icon-lg-size);
    width: var(--icon-lg-size);
  }

  svg path {
    fill: currentColor;
  }
</style>

<span class="icon icon--{size} {className}">
  <svg focusable="false" viewBox="0 0 1024 1024">
    <path d="{paths[icon]}" />
  </svg>
</span>
