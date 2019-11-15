<script>
  export let active = null
  export let block = false
  export let buttons = []
</script>

<style>
  .button-group {
    display: flex;
  }

  .block {
    width: 100%;
  }

  .button {

  }
</style>

<div class="button-group" class:block>
  {#each buttons as button, index}

    <slot {button} {index} />
  {/each}
</div>
