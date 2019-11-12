<script>
    export let checked = false
    export let disabled = false
  </script>

  <style>
    .switch {
      --icon-sm-size: 20px;

      align-items: center;
      display: flex;
    }

    .slider {
    }

    input {
      opacity: 0;
      position: absolute;;
    }

    input:focus + .checkmark {
      border-color: var(--focus-border-color);
      box-shadow: var(--focus-box-shadow);
      outline: var(--focus-outline);
    }
  </style>

  <label class="switch switch--checked-{checked}">
    <input
      type="switch"
      bind:checked={checked}
      bind:indeterminate={indeterminate}
      on:click
      on:change
      on:focus
      on:blur
    />
    <span class="checkmark">
    </span>
  </label>
