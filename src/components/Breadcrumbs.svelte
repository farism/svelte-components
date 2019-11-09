<script>
  import Icon from './Icon'

  export let crumbs = []
</script>

<style>
  .breadcrumbs {
    --link-color: var(--breadcrumbs-color);

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
        <Icon icon="chevron-right" sm />
      </div>
    {/if}
  {/each}
</div>
