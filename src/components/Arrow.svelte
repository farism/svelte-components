<script>
    export let ref = null
    export let up = false
    export let right = false
    export let down = false
    export let left = false
    export let width = 12
    export let height = 12
    export let border = 0
  </script>

  <style>
    .arrow {
      display: inline-flex;
    }

    .outline {
      fill: var(--arrow-color);
    }

    .fill {
      fill: var(--arrow-color-fill);
    }
  </style>

  <span
    class="arrow"
    class:up
    class:down
    class:left
    class:right
    bind:this={ref}
  >
    <svg height="{height}" width="{width}" focusable="false">
      {#if up}
        <polygon class="outline" points="0,{height} {width},{height} {width / 2},0" />
        <polygon class="fill" points="{border},{height} {width-border},{height} {width / 2},{border * 2}" />
      {/if}
      {#if down}
        <polygon class="outline" points="0,0 {width},0 {width / 2},{height}" />
        <polygon class="fill" points="{border},0 {width-border},0 {width / 2},{height - border * 2}" />
      {/if}
      {#if left}
        <polygon class="outline" points="{width},0 {width},{height} 0,{height/2}" />
        <polygon class="fill" points="{width},{border} {width},{height-border} {border * 2},{height / 2}" />
      {/if}
      {#if right}
        <polygon class="outline" points="0,0 0,{height} {width},{height/2}" />
        <polygon class="fill" points="0,{border} 0,{height-border} {width - border * 2},{height / 2}" />
      {/if}
    </svg>
  </span>
