<script>
  import Icon from './Icon'

  export let crumbs = []
</script>

<style>
  :root {
    --link-color: var(--breadcrumbs-color);

    --breadcrumbs-active-color: var(--color-gray-95);
    --breadcrumbs-color: var(--color-gray-70);
    --breadcrumbs-crumb-color: var(--color-gray-75);
    --breadcrumbs-crumb-hover-color: var(--color-gray-75);
    --breadcrumbs-crumb-active-color: var(--color-gray-95);
    --breadcrumbs-spacing: 0 var(--size-sm);
  }

  .breadcrumbs {
    align-items: center;
    color: var(--breadcrumbs-color);
    display: flex;
    font-size: 14px;
    line-height: 20px;
    align-items: center;
    display: flex;
  }

  .crumb {
    display: inline-flex;
  }

  .crumb:active {
    color: --breadcrumbs-crumb-active-color;
  }

  .crumb:hover {
    color: --breadcrumbs-crumb-hover-color;
  }

  .crumb:last-child {
    color: var(--breadcrumbs-active-color);
    font-weight: bold;
    text-decoration: none;
  }

  .separator {
    align-items: center;
    display: inline-flex;
    margin: var(--breadcrumbs-spacing);
  }
</style>

<div class="breadcrumbs">
  {#each crumbs as crumb, i}
    <div class="crumb">
      <slot crumb={crumb} />
    </div>
    {#if i < crumbs.length - 1}
      <div class="separator">
        <Icon icon="chevron-right" />
      </div>
    {/if}
  {/each}
</div>
