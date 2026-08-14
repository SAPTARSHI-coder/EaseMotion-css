# Basic Currency Selector Row

## What it does

This submission adds a CSS-only currency selector row for billing settings,
checkout preferences, account setup screens, and subscription dashboards.

It shows a currency symbol, currency name, helper text, currency code, region,
and selected or available state in one compact reusable row.

## How to use it

Add the base row class with optional `is-selected` state:

```html
<article class="basic-currency-selector-row is-selected">
  <span class="currency-icon" aria-hidden="true">$</span>
  <div class="currency-copy">
    <strong>US Dollar</strong>
    <p>Default billing currency for United States accounts.</p>
  </div>
  <span class="currency-code">USD</span>
  <span class="currency-region">United States</span>
  <span class="currency-state">Selected</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful in common
billing and account interfaces. Developers can reuse the same row in checkout
settings, subscription dashboards, pricing tools, and onboarding screens while
keeping the implementation lightweight and CSS-only.

## Included features

- Currency symbol icon block
- Currency name and helper text
- Currency code pill
- Region pill
- Selected and available state styling
- Subtle hover slide interaction
- Selected side accent
- Long text truncation for compact layouts
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the currency selector row
- `README.md` - usage and contribution context
