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
    white-space: nowrap;
  }

  .crumb {
    align-items: center;
    cursor: pointer;
    display: inline-flex;
  }

  .crumb:active {
    --breadcrumbs-color: var(--breadcrumbs-crumb-active-color);
  }

  .crumb:hover {
    --breadcrumbs-color: var(--breadcrumbs-crumb-hover-color);

    text-decoration: underline;
  }

  .crumb:last-child {
    --breadcrumbs-color: var(--breadcrumbs-active-color);

    cursor: default;
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
      <slot crumb={crumb} index={i} />
    </div>
    {#if i < crumbs.length - 1}
      <div class="separator">
        <Icon icon="chevron-right" sm />
      </div>
    {/if}
  {/each}
</div>
