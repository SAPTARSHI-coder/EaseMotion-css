# Basic Currency Preference Row

## What it does

This submission adds a simple CSS-only currency preference row for billing
settings, account preferences, checkout configuration, and workspace setup
screens.

It presents a currency code icon, currency name, helper text, region metadata,
and preference state in one compact reusable row.

## How to use it

Add the base row class with a currency icon, copy area, region label, and state
pill:

```html
<article class="basic-currency-preference-row is-selected">
  <span class="currency-icon is-primary" aria-hidden="true">USD</span>
  <div class="currency-copy">
    <strong>US Dollar</strong>
    <p>Primary billing currency for invoices and receipts.</p>
  </div>
  <span class="currency-region">United States</span>
  <span class="currency-state is-primary">Primary</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful in common
billing and account interfaces. The row can be reused inside checkout settings,
workspace configuration, localization panels, and subscription dashboards while
staying lightweight and CSS-only.

## Included features

- USD, INR, and EUR currency examples
- Primary, suggested, and locked state pills
- Region metadata label
- Long text truncation for currency helper copy
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the currency preference row
- `README.md` - usage and contribution context
