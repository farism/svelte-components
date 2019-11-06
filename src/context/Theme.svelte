<style>
  :root {
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
    --shadow-40: 0 3px 6px rgba(0, 0, 0, 0.23), 0 3px 6px rgba(0, 0, 0, 0.16);
    --shadow-50: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.26);

    --focus-border-color: var(--color-blue-50);
    --focus-box-shadow: 0 0 0 2px var(--color-blue-20);
    --focus-outline: none;

    --avatar-background-color: var(--color-gray-100);
    --avatar-icon-color: var(--color-white-100);
    --avatar-label-color: var(--color-white-100);
    --avatar-lg-icon-size: 40px;
    --avatar-lg-size: 96px;
    --avatar-md-icon-size: 14px;
    --avatar-md-size: 40px;
    --avatar-sm-icon-size: 14px;
    --avatar-sm-size: 32px;

    /* accent1 color is for the background, button text, and close icon */
    /* accent2 color is for the stripe and icon color */

    --banner-accent1-color: var(--color-gray-20);
    --banner-accent1-color-action: var(--color-yellow-10);
    --banner-accent1-color-error: var(--color-red-20);
    --banner-accent1-color-info: var(--color-blue-10);
    --banner-accent1-color-success: var(--color-green-10);
    --banner-accent2-color: var(--color-gray-100);
    --banner-accent2-color-action: var(--color-yellow-70);
    --banner-accent2-color-error: var(--color-red-70);
    --banner-accent2-color-info: var(--color-blue-65);
    --banner-accent2-color-success: var(--color-green-70);
    --banner-background-color: var(--banner-accent-1-color);
    --banner-border-radius: var(--border-radius-md);
    --banner-box-shadow: var(--shadow-20);
    --banner-dismiss-hover-background-color: var(--color-gray-100);
    --banner-dismiss-size: var(--size-xl);
    --banner-padding: var(--size-sm) var(--banner-spacing);
    --banner-spacing: var(--size-lg);
    --banner-stripe-size: var(--size-sm);

    /* --card-box-shadow: var() */

    --card-background-color: var(--color-white-100);
    --card-border-radius: var(--border-radius-md);
    --card-box-shadow: var(--shadow-20);
    --card-transition: box-shadow 0.2s ease-in-out;

    --link-color: var(--color-blue-65);
    --link-color-hover: var(--link-color);

    --icon-lg-size: 26px;
    --icon-md-size: 24px;
    --icon-sm-size: 16px;
  }
</style>

<div>
  <slot />
</div>
