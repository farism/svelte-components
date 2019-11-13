<script>
  export let checked = false
  export let disabled = false
</script>

<style>
  .switch {
    display: inline-flex;
    position: relative;
  }

  .track {
    align-items: center;
    background-color: var(--switch-track-background-color);
    box-shadow: var(--switch-track-box-shadow);
    border-radius: var(--switch-track-border-radius);
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    height: var(--switch-track-height);
    padding: var(--switch-track-padding);
    transition: 0.2s justify-content ease-out;
    width: var(--switch-track-width);
  }

  .spacer {
    transition: 0.2s flex-grow ease-out;
  }

  .toggle {
    background-color: var(--switch-toggle-background-color);
    border-radius: var(--switch-toggle-border-radius);
    box-shadow: var(--switch-toggle-box-shadow);
    height: var(--switch-toggle-size);
    width: var(--switch-toggle-size);
  }

  input {
    position: absolute;
    visibility: hidden;
  }

  .checked .track {
    --switch-track-background-color: var(--switch-track-background-color-checked);
  }

  .checked .spacer {
    flex-grow: 1;
  }

  .checked .toggle {
    --switch-toggle-background-color: var(--switch-toggle-background-color-checked);
  }

  .disabled .track {
    --switch-track-background-color: var(--switch-toggle-background-color-disabled);

    cursor: default;
  }

  .checked.disabled .track {
    --switch-track-background-color: var(--switch-track-background-color-checked-disabled);
  }

  input:focus + .track {
    border-color: var(--focus-border-color);
  }
</style>

<label class="switch" class:disabled class:checked>
  <input
    type="checkbox"
    bind:checked
    on:click
    on:change
    on:focus
    on:blur
    {disabled}
  />
  <span class="track">
    <span class="spacer" />
    <span class="toggle" />
  </span>
</label>
