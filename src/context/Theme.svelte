<style>
  .theme {
    /* UTILITIES */
    --size-3xs: 1px;
    --size-2xs: 2px;
    --size-xs: 4px;
    --size-sm: 8px;
    --size-md: 12px;
    --size-lg: 16px;
    --size-xl: 24px;
    --size-2xl: 32px;
    --size-3xl: 48px;
    --size-4xl: 64px;

    --color-black-100: #000000;
    --color-blue-10: #f0f6fe;
    --color-blue-20: #dcedff;
    --color-blue-50: #3397ff;
    --color-blue-65: #006ddf;
    --color-blue-70: #1e519f;
    --color-blue-85: #003aa1;
    --color-gray-10: #fafafa;
    --color-gray-100: #1a1a1a;
    --color-gray-20: #f5f5f5;
    --color-gray-30: #f0f0f0;
    --color-gray-40: #e6e6e6;
    --color-gray-50: #d9d9d9;
    --color-gray-55: #bfbfbf;
    --color-gray-60: #b3b3b3;
    --color-gray-70: #808080;
    --color-gray-75: #707070;
    --color-gray-80: #4d4d4d;
    --color-gray-90: #333333;
    --color-gray-95: #282828;
    --color-green-10: #f1fff1;
    --color-green-70: #0b8626;
    --color-orange-60: #f47e42;
    --color-orange-70: #e36937;
    --color-purple-50: #7400e6;
    --color-purple-60: #5200a2;
    --color-purple-80: #84286b;
    --color-red-20: #fff3f3;
    --color-red-70: #d62c2f;
    --color-teal-50: #00818d;
    --color-white-100: #ffffff;
    --color-yellow-10: #fffde2;
    --color-yellow-70: #d6ab27;
    --color-yellow-80: #c29816;

    --border-radius-sm: 1px;
    --border-radius-md: 2px;
    --border-radius-lg: 4px;

    --shadow-10: -4px 0 5px rgba(112, 112, 112, 0.1);
    --shadow-20: 0 1px 2px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1);
    --shadow-30: 0 1px 4px rgba(40, 40, 40, 0.2), 0 0 3px rgba(40, 40, 40, 0.14), 0 2px 3px rgba(40, 40, 40, 0.12);
    --shadow-40: 0 3px 6px rgba(83, 75, 75, 0.23), 0 3px 6px rgba(0, 0, 0, 0.16);
    --shadow-50: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.26);

    --focus-border-color: var(--color-blue-50);
    --focus-box-shadow: 0 0 0 2px var(--color-blue-20);
    --focus-outline: none;

    /* COMPONENTS */

    --avatar-background-color: var(--color-gray-100);
    --avatar-font-size-lg: 40px;
    --avatar-font-size-md: 14px;
    --avatar-font-size-sm: 14px;
    --avatar-font-size: var(--avatar-font-size-md);
    --avatar-icon-color: var(--color-white-100);
    --avatar-label-color: var(--color-white-100);
    --avatar-size-lg: 96px;
    --avatar-size-md: 40px;
    --avatar-size-sm: 32px;
    --avatar-size: var(--avatar-size-md);

    /* accent1 color is for the background, button text, and close icon */
    /* accent2 color is for the stripe and icon color */
    --banner-accent1-color-action: var(--color-yellow-10);
    --banner-accent1-color-error: var(--color-red-20);
    --banner-accent1-color-info: var(--color-blue-10);
    --banner-accent1-color-success: var(--color-green-10);
    --banner-accent1-color: var(--color-gray-20);
    --banner-accent2-color-action: var(--color-yellow-70);
    --banner-accent2-color-error: var(--color-red-70);
    --banner-accent2-color-info: var(--color-blue-65);
    --banner-accent2-color-success: var(--color-green-70);
    --banner-accent2-color: var(--color-gray-100);
    --banner-action-spacing: var(--size-xs);
    --banner-background-color: var(--banner-accent-1-color);
    --banner-border-radius: var(--border-radius-md);
    --banner-box-shadow: var(--shadow-20);
    --banner-dismiss-hover-background-color: var(--color-gray-100);
    --banner-dismiss-size: var(--size-xl);
    --banner-padding: var(--size-sm) var(--banner-spacing);
    --banner-spacing: var(--size-lg);
    --banner-stripe-size: var(--size-sm);

    --breadcrumbs-active-color: var(--color-gray-95);
    --breadcrumbs-color: var(--color-gray-70);
    --breadcrumbs-crumb-color: var(--color-gray-75);
    --breadcrumbs-crumb-hover-color: var(--color-gray-75);
    --breadcrumbs-crumb-active-color: var(--color-gray-95);
    --breadcrumbs-spacing: 0 var(--size-sm);

    --button-background-color: var(--button-primary-background-color);
    --button-border-color: transparent;
    --button-border-color-hover: transparent;
    --button-border-radius: var(--border-radius-md);
    --button-border-style: solid;
    --button-border-width: 1px;
    --button-color: var(--color-white-100);
    --button-font-size-lg: 14px;
    --button-font-size-md: 14px;
    --button-font-size-sm: 12px;
    --button-font-size: var(--button-height-md);
    --button-padding-h: var(--button-padding-md);
    --button-padding-lg: var(--size-md);
    --button-padding-md: var(--size-md);
    --button-padding-sm: var(--size-xs);
    --button-padding-v: 0;
    --button-size-lg: 36px;
    --button-size-md: 32px;
    --button-size-sm: 24px;
    --button-size: var(--button-size-md);
    --button-primary-background-color: var(--color-orange-60);
    --button-primary-background-color-hover: var(--color-orange-70);
    --button-primary-border-color: transparent;
    --button-primary-border-color-hover: transparent;
    --button-primary-color: var(--color-white-100);
    --button-primary-color-hover: var(--color-white-100);
    --button-secondary-background-color: transparent;
    --button-secondary-background-color-hover: var(--color-gray-70);
    --button-secondary-border-color: var(--color-gray-50);
    --button-secondary-border-color-hover: var(--color-gray-70);
    --button-secondary-color: var(--color-gray-95);
    --button-secondary-color-hover: var(--color-white-100);
    --button-tertiary-background-color: transparent;
    --button-tertiary-background-color-hover: transparent;
    --button-tertiary-border-color: transparent;
    --button-tertiary-border-color-hover: var(--color-gray-50);
    --button-tertiary-color: var(--color-gray-70);
    --button-tertiary-color-hover: var(--color-gray-70);
    --button-form-background-color: var(--color-gray-70);
    --button-form-background-color-hover: var(--color-gray-80);
    --button-form-border-color: transparent;
    --button-form-border-color-hover: transparent;
    --button-form-color: var(--color-white-100);
    --button-form-color-hover: var(--color-white-100);
    --button-dropdown-background-color: var(--color-white-100);
    --button-dropdown-background-color-hover: var(--color-white-100);
    --button-dropdown-border-color: var(--color-gray-50);
    --button-dropdown-border-color-hover: var(--color-gray-50);
    --button-dropdown-color: var(--color-gray-95);
    --button-dropdown-color-hover: var(--color-gray-95);
    --button-dropdown-max-width: 248px;

    --card-background-color: var(--color-white-100);
    --card-border-radius: var(--border-radius-md);
    --card-box-shadow: var(--shadow-20);
    --card-transition: box-shadow 0.2s ease-in-out;

    --checkbox-checkmark-background-color-checked: var(--color-blue-50);
    --checkbox-checkmark-background-color: var(--color-white-100);
    --checkbox-checkmark-border-color: var(--color-gray-60);
    --checkbox-checkmark-border-radius: var(--border-radius-sm);
    --checkbox-checkmark-border-style: solid;
    --checkbox-checkmark-border-width: 2px;
    --checkbox-checkmark-color: var(--color-white-100);
    --checkbox-checkmark-size: var(--size-lg);
    --checkbox-spacing: var(--size-sm);

    --clear-background-color-hover: var(--color-gray-70);
    --clear-color: var(--color-gray-70);
    --clear-color-hover: var(--color-white-100);

    --icon-size-lg: 26px;
    --icon-size-md: 24px;
    --icon-size-sm: 16px;
    --icon-size: var(--icon-size-md);

    --input-background-color: var(--color-white-100);
    --input-border-color: var(--color-gray-50);
    --input-border-radius: var(--size-2xs);
    --input-border-style: solid;
    --input-border-width: var(--size-3xs);
    --input-color: var(--color-gray-95);
    --input-disabled-border-color: var(--color-gray-20);
    --input-disabled-color: var(--color-gray-60);
    --input-error-background-color: var(--color-red-20);
    --input-error-border-color: var(--color-red-70);
    --input-font-size: 14px;
    --input-height: var(--size-2xl);
    --input-placeholder-color: var(--color-gray-75);
    --input-h-padding: var(--size-md);
    --input-v-padding: 0;

    --link-color: var(--color-blue-65);
    --link-color-hover: var(--color-blue-65);
    --link-gray-color: var(--color-gray-80);
    --link-gray-color-hover: var(--color-orange-60);
    --link-white-color: var(--color-white-100);
    --link-white-color-hover: var(--color-white-100);

    --modal-body-margin-top: var(--size-3xl);
    --modal-buttons-spacing: var(--size-sm);
    --modal-container-background-color: var(--color-white-100);
    --modal-container-max-height: 90vh;
    --modal-container-min-width: 344px;
    --modal-container-padding: var(--size-2xl) var(--size-3xl) var(--size-xl) var(--size-3xl);
    --modal-footer-margin-top: var(--size-3xl);

    --radio-checkmark-background-color: var(--color-white-100);
    --radio-checkmark-border-color: var(--color-gray-60);
    --radio-checkmark-border-style: solid;
    --radio-checkmark-border-width: var(--size-2xs);
    --radio-checkmark-color: var(--color-white-100);
    --radio-checkmark-size: 18px; /* one-off size from the design system */
    --radio-spacing: var(--size-sm);

    --search-icon-size: calc(var(--icon-sm-size) + var(--search-spacing));
    --search-spacing: var(--size-sm);
    --search-width: 248px;

    --spinner-circle-border-color: var(--color-gray-50);
    --spinner-circle-border-width: 2px;
    --spinner-circle-border-width-lg: 4px;
    --spinner-circle-inner-border-color: var(--color-blue-50);
    --spinner-circle-size-lg: var(--size-3xl);
    --spinner-circle-size-md: var(--size-xl);
    --spinner-circle-size-sm: var(--size-lg);
    --spinner-circle-size-xs: var(--size-sm);
    --spinner-circle-size: var(--spinner-circle-size-md);
    --spinner-label-text-align: center;
    --spinner-label-text-transform: uppercase;
    --spinner-label-max-width: 100px;
    --spinner-max-height: 400px;
    --spinner-min-height: 150px;
    --spinner-overlay-background-color: var(--color-white-100);

    --textarea-background-color: var(--input-background-color);
    --textarea-border-color: var(--input-border-color);
    --textarea-border-radius: var(--input-border-radius);
    --textarea-border-style: var(--input-border-style);
    --textarea-border-width: var(--input-border-width);
    --textarea-color: var(--input-color);
    --textarea-disabled-border-color: var(--input-disabled-border-color);
    --textarea-disabled-color: var(--input-disabled-color);
    --textarea-error-background-color: var(--input-error-background-color);
    --textarea-error-border-color: var(--input-error-border-color);
    --textarea-font-size: var(--input-font-size);
    --textarea-placeholder-color: var(--input-placeholder-color);
    --textarea-h-padding: var(--input-h-padding);
    --textarea-v-padding: var(--input-v-padding);

    --token-background-color: var(--color-blue-65);
    --token-background-color-hover: var(--color-blue-85);
    --token-background-color-disabled: var(--color-gray-55);
    --token-color: var(--color-white-100);
    --token-font-size: 14px;
    --token-height: var(--size-xl);
    --token-icon-size: var(--size-lg);
    --token-max-width: 360px;
    --token-min-width: 48;
    --token-padding: 0 var(--size-md);
  }
</style>

<div class="theme">
  <slot />
</div>
