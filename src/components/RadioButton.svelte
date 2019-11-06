<script>
    import Icon from './Icon'

    export let group = ''
    export let value = ''

    const checked = group === value;

    const hasLabel = !!($$props.$$slots && !!$$props.$$slots.default)
  </script>

  <style>
    :root {
      --radio-checkmark-background-color: var(--color-white-100);
      --radio-checkmark-border-color: var(--color-gray-60);
      --radio-checkmark-border-style: solid;
      --radio-checkmark-border-width: var(--size-2xs);
      --radio-checkmark-color: var(--color-white-100);
      --radio-checkmark-size: 18px; /* one-off size from the design system */
      --radio-spacing: var(--size-sm);
    }

    .radio {
      align-items: center;
      display: flex;
    }

    .checkmark {
      align-items: center;
      color: var(--radio-checkmark-color);
      background-color: var(--radio-background-color);
      border-color: var(--radio-checkmark-border-color);
      border-radius: 100%;
      border-style: var(--radio-checkmark-border-style);
      border-width: var(--radio-checkmark-border-width);
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      width: var(--radio-checkmark-size);
      height: var(--radio-checkmark-size);
    }

    .label {
      line-height: 0;
      margin-left: var(--radio-spacing);
    }

    input {
      opacity: 0;
      position: absolute;;
    }

    input:checked + .checkmark {
      --radio-checkmark-border-color: var(--color-blue-50);
      --radio-checkmark-border-width: 6px;
    }

    input:focus + .checkmark {
      border-color: var(--focus-border-color);
      box-shadow: var(--focus-box-shadow);
      outline: var(--focus-outline);
    }
  </style>

  <label class="radio radio--checked-{checked}">
    <input
      type="radio"
      bind:group={group}
      value={value}
      on:click
      on:change
      on:focus
      on:blur
    />
    <span class="checkmark" />
    {#if hasLabel}
      <span class="label">
        <slot />
      </span>
    {/if}
  </label>
