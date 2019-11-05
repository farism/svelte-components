<script>
  import paths from '@procore/core-icons/dist/paths.json'

  export let clickable = true
  export let icon = ''
  export let size = 'sm'
</script>

<style>
  :root {
    --icon-sm-width: 16px;
    --icon-md-width: 24px;
    --icon-lg-width: 26px;
  }

  .icon {
    display: inline-flex;
    pointer-events: none;
  }

  .icon--sm svg {
    height: var(--icon-sm-width);
    width: var(--icon-sm-width);
  }

  .icon--md svg {
    height: var(--icon-md-width);
    width: var(--icon-md-width);
  }

  .icon--lg svg {
    height: var(--icon-lg-width);
    width: var(--icon-lg-width);
  }

  .icon--clickable-true {
    cursor: pointer;
    pointer-events: all;
  }

  svg path {
    fill: currentColor;
  }
</style>

<span class="icon icon--{size} icon--clickable-{clickable}">
  <svg focusable="false" viewBox="0 0 1024 1024">
    <path d="{paths[icon]}" />
  </svg>
</span>
