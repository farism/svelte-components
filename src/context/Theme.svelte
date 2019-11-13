<style>
  :root {
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
    --arrow-color: var(--color-black-100);
    --arrow-color-fill: var(--color-black-100);

    --avatar-background-color: var(--color-gray-100);
    --avatar-background-color-disabled: var(--color-gray-50);
    --avatar-color: var(--color-white-100);
    --avatar-font-size-lg: 40px;
    --avatar-font-size-md: 14px;
    --avatar-font-size-sm: 14px;
    --avatar-font-size: var(--avatar-font-size-md);
    --avatar-label-color: var(--color-white-100);
    --avatar-overlay-background-color-disabled: rgba(255, 255, 255, 0.5);
    --avatar-overlay-background-color-hover: rgba(0, 0, 0, 0.5);
    --avatar-overlay-background-color: rgba(0, 0, 0, 0);
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
    --banner-background-color: var(--banner-accent-1-color);
    --banner-border-radius: var(--border-radius-md);
    --banner-box-shadow: var(--shadow-20);
    --banner-buttons-spacing: var(--size-xs);
    --banner-dismiss-color: var(--color-gray-95);
    --banner-dismiss-background-color-hover: var(--color-gray-95);
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

    --button-background-color: var(--color-black-100);
    --button-background-color-hover: var(--color-white-80);
    --button-background-color-disabled: var(--color-gray-50);
    --button-border-color: transparent;
    --button-border-color-hover: transparent;
    --button-border-color-disabled: var(--color-gray-50);
    --button-border-radius: var(--border-radius-md);
    --button-border-style: solid;
    --button-border-width: 1px;
    --button-color: var(--color-white-100);
    --button-color-hover: var(--color-white-100);
    --button-color-disabled: var(--color-gray-50);
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
    --button-primary-background-color-disabled: var(--color-gray-50);
    --button-primary-border-color: transparent;
    --button-primary-border-color-hover: transparent;
    --button-primary-border-color-disabled: transparent;
    --button-primary-color: var(--color-white-100);
    --button-primary-color-hover: var(--color-white-100);
    --button-primary-color-disabled: var(--color-white-100);
    --button-secondary-background-color: transparent;
    --button-secondary-background-color-hover: var(--color-gray-70);
    --button-secondary-background-color-disabled: transparent;
    --button-secondary-border-color: var(--color-gray-50);
    --button-secondary-border-color-hover: var(--color-gray-70);
    --button-secondary-border-color-disabled: var(--color-gray-50);
    --button-secondary-color: var(--color-gray-95);
    --button-secondary-color-hover: var(--color-white-100);
    --button-secondary-color-disabled: var(--color-gray-60);
    --button-tertiary-background-color: transparent;
    --button-tertiary-background-color-hover: transparent;
    --button-tertiary-background-color-disabled: transparent;
    --button-tertiary-border-color: transparent;
    --button-tertiary-border-color-hover: var(--color-gray-50);
    --button-tertiary-border-color-disabled: transparent;
    --button-tertiary-color: var(--color-gray-70);
    --button-tertiary-color-hover: var(--color-gray-70);
    --button-tertiary-color-disabled: var(--color-gray-60);
    --button-form-background-color: var(--color-gray-70);
    --button-form-background-color-hover: var(--color-gray-80);
    --button-form-background-color-disabled: var(--color-gray-50);
    --button-form-border-color: transparent;
    --button-form-border-color-hover: transparent;
    --button-form-border-color-disabled: transparent;
    --button-form-color: var(--color-white-100);
    --button-form-color-hover: var(--color-white-100);
    --button-form-color-disabled: var(--color-white-100);
    --button-dropdown-background-color: trasn;
    --button-dropdown-background-color-hover: trasn;
    --button-dropdown-background-color-disabled: trasn;
    --button-dropdown-border-color: var(--color-gray-50);
    --button-dropdown-border-color-hover: var(--color-gray-50);
    --button-dropdown-border-color-disabled: var(--color-gray-20);
    --button-dropdown-color: var(--color-gray-95);
    --button-dropdown-color-hover: var(--color-gray-95);
    --button-dropdown-color-disabled: var(--color-gray-60);
    --button-dropdown-max-width: 248px;

    --calendar-cell-border-radius: var(--border-radius-md);
    --calendar-cell-size: 36px;
    --calendar-day-background-color-active: var(--color-blue-85);
    --calendar-day-background-color-disabled: var(--color-gray-20);
    --calendar-day-background-color-hover: var(--color-blue-20);
    --calendar-day-background-color: var(--color-white-100);
    --calendar-day-color-active: var(--color-white-100);
    --calendar-day-color-disabled: var(--color-gray-75);
    --calendar-day-color-hover: var(--color-gray-95);
    --calendar-day-color-other-month-disabled: var(--color-gray-60);
    --calendar-day-color-other-month: var(--color-gray-75);
    --calendar-day-color-today: var(--color-white-100);
    --calendar-day-color: var(--color-gray-95);
    --calendar-day-font-size: 12px;
    --calendar-day-size: 36px;
    --calendar-header-dropdown-spacing: var(--size-xs);
    --calendar-header-margin-bottom: var(--size-md);
    --calendar-header-pagination-spacing: var(--size-sm);
    --calendar-padding: var(--size-md) var(--size-lg) var(--size-lg) var(--size-lg);
    --calendar-pagination-background-color-hover: var(--color-gray-70);
    --calendar-pagination-background-color: var(--color-white-100);
    --calendar-pagination-border-color: var(--color-gray-70);
    --calendar-pagination-color-hover: var(--color-white-100);
    --calendar-pagination-color: var(--color-gray-70);
    --calendar-pagination-size: var(--size-lg);
    --calendar-week-margin-bottom: var(--size-2xs);

    --card-background-color: var(--color-white-100);
    --card-border-radius: var(--border-radius-md);
    --card-box-shadow: var(--shadow-20);
    --card-height: 100%;
    --card-transition: box-shadow 0.2s ease-in-out;

    --checkbox-checkmark-background-color: var(--color-white-100);
    --checkbox-checkmark-background-color-checked: var(--color-blue-50);
    --checkbox-checkmark-background-color-disabled: var(--color-gray-50);
    --checkbox-checkmark-border-color: var(--color-gray-60);
    --checkbox-checkmark-border-color-checked: transparent;
    --checkbox-checkmark-border-color-disabled: var(--color-gray-50);
    --checkbox-checkmark-border-radius: var(--border-radius-sm);
    --checkbox-checkmark-border-style: solid;
    --checkbox-checkmark-border-width: 2px;
    --checkbox-checkmark-color: var(--color-white-100);
    --checkbox-checkmark-size: var(--size-lg);
    --checkbox-spacing: var(--size-sm);

    --clear-background-color-hover: var(--color-gray-70);
    --clear-color: var(--color-gray-70);
    --clear-color-hover: var(--color-white-100);

    --empty-state-buttons-spacing: var(--size-xl);
    --empty-state-image-max-width: 200px;
    --empty-state-message-spacing: var(--size-lg);
    --empty-state-spacing-botom: 64px;
    --empty-state-spacing-top: 128px;
    --empty-state-title-spacing: var(--size-xl);

    --dropdown-overlay-max-height: 312px;
    --dropdown-overlay-max-width: 248px;

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
    --input-padding-h: var(--size-md);
    --input-padding-v: 0;

    --link-color: var(--color-blue-65);
    --link-color-hover: var(--color-blue-65);
    --link-gray-color: var(--color-gray-80);
    --link-gray-color-hover: var(--color-orange-60);
    --link-white-color: var(--color-white-100);
    --link-white-color-hover: var(--color-white-100);

    --list-footer-border: 1px solid var(--color-gray-50);
    --list-footer-padding: var(--size-md) var(--list-padding);
    --list-header-padding: var(--size-xs) var(--list-padding);
    --list-items-margin: var(--size-sm) 0;
    --list-max-height: auto;
    --list-item-font-size: 14px;
    --list-item-height: 28px;
    --list-item-background-color: var(--color-white-100);
    --list-item-background-color-hover: var(--color-gray-20);
    --list-item-color: var(--color-gray-95);
    --list-item-color-active: var(--color-blue-65);
    --list-item-color-hover: var(--color-black-100);
    --list-item-padding: 0 var(--list-padding);
    --list-padding: var(--size-lg);
    --list-search-padding-bottom: var(--size-sm);
    --list-search-padding: var(--list-padding);

    --modal-body-margin-top: var(--size-3xl);
    --modal-buttons-spacing: var(--size-sm);
    --modal-container-background-color: var(--color-white-100);
    --modal-container-max-height: 90vh;
    --modal-container-min-width: 344px;
    --modal-container-max-width: 640px;
    --modal-container-padding: var(--size-2xl) var(--size-3xl) var(--size-xl) var(--size-3xl);
    --modal-footer-margin-top: var(--size-3xl);

    --popover-background-color: var(--color-white-100);
    --popover-border-radius: var(--border-radius-md);
    --popover-max-width: 250px;
    --popover-padding-h: var(--size-lg);
    --popover-padding-v: var(--size-lg);
    --popover-webkit-dropshadow: drop-shadow(0px 3px 2px rgba(0, 0, 0, 0.23)) drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.16));
    --popover-ms-dropshadow: "progid:DXImageTransform.Microsoft.Dropshadow(OffX=0, OffY=3, Color='#000')";

    --radio-checkmark-background-color: var(--color-white-100);
    --radio-checkmark-border-color: var(--color-gray-60);
    --radio-checkmark-border-style: solid;
    --radio-checkmark-border-width: var(--size-2xs);
    --radio-checkmark-color: var(--color-white-100);
    --radio-checkmark-size: 18px; /* one-off size from the design system */
    --radio-spacing: var(--size-sm);

    --search-icon-size: calc(var(--icon-size-sm) + var(--search-spacing));
    --search-spacing: var(--size-sm);
    --search-width: 248px;

    --spinner-circle-border-color: var(--color-gray-50);
    --spinner-circle-border-width: 2px;
    --spinner-circle-border-width-lg: 4px;
    --spinner-circle-inner-border-color: var(--color-blue-50);
    --spinner-circle-size-lg: var(--size-3xl);
    --spinner-circle-size-md: var(--size-xl);
    --spinner-circle-size-sm: var(--size-lg);
    --spinner-circle-size-xs: var(--size-md);
    --spinner-circle-size: var(--spinner-circle-size-md);
    --spinner-label-text-align: center;
    --spinner-label-text-transform: uppercase;
    --spinner-label-max-width: 100px;
    --spinner-max-height: 400px;
    --spinner-min-height: 150px;
    --spinner-overlay-background-color: var(--color-white-100);

    --switch-background-color: var(--color-gray-60);
    --switch-toggle-background-color-checked: var(--color-white-100);
    --switch-toggle-background-color: var(--color-white-100);
    --switch-toggle-border-radius: 100%;
    --switch-toggle-box-shadow: var(--shadow-20);
    --switch-toggle-size: var(--size-md);
    --switch-track-background-color-checked-disabled: var(--color-gray-50);
    --switch-track-background-color-checked: var(--color-blue-65);
    --switch-track-background-color-disabled: var(--color-white-100);
    --switch-track-background-color: var(--color-gray-60);
    --switch-track-border-radius: var(--size-lg);
    --switch-track-box-shadow: var(--shadow-20);
    --switch-track-height: var(--size-lg);
    --switch-track-padding: var(--size-2xs);
    --switch-track-width: var(--size-2xl);

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
    --textarea-padding-h: var(--input-padding-h);
    --textarea-padding-v: var(--size-sm);
    --textarea-resize: both;

    --toast-background-color: var(--color-gray-70);
    --toast-border-radius: var(--border-radius-md);
    --toast-box-shadow: var(--shadow-50);
    --toast-color: var(--color-white-100);
    --toast-error-background-color: var(--color-red-70);
    --toast-font-size: 16px;
    --toast-font-style: bold;
    --toast-line-height: 20px;
    --toast-message-max-lines: 3;
    --toast-min-height: var(--size-3xl);
    --toast-padding-h: var(--size-xl);
    --toast-padding-v: var(--size-md);
    --toast-spacing: var(--size-lg);
    --toast-success-background-color: var(--color-green-70);
    --toast-width: 550px;

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

    --tooltip-background-color: rgba(19, 31, 51, 0.9);
    --tooltip-border-radius: var(--border-radius-md);
    --tooltip-color: var(--color-white-100);
    --tooltip-font-size: 12px;
    --tooltip-max-width: 200px;
    --tooltip-padding-h: var(--size-md);
    --tooltip-padding-v: var(--size-sm);
    --tooltip-webkit-dropshadow: drop-shadow(0px 3px 2px rgba(0, 0, 0, 0.23)) drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.16));
    --tooltip-ms-dropshadow: "progid:DXImageTransform.Microsoft.Dropshadow(OffX=0, OffY=3, Color='#000')";
  }
</style>

<div class="theme">
  <slot />
</div>
