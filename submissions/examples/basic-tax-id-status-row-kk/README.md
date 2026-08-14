# Basic Tax ID Status Row

## What it does

This submission adds a simple CSS-only tax ID status row for billing settings,
invoice panels, business profile pages, checkout flows, and admin customer
records.

It displays a region marker, tax label, helper copy, and verification status in
one compact row.

## How to use it

Add the base row class with a region marker, tax copy, and status pill:

```html
<article class="basic-tax-id-status-row">
  <span class="tax-region" aria-hidden="true">GST</span>
  <div class="tax-copy">
    <strong>India GSTIN</strong>
    <p>GSTIN ending in 7K2Z is verified for monthly invoices.</p>
  </div>
  <span class="tax-state is-verified">Verified</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful across
common billing and business settings interfaces. The row can be reused in
invoice pages, checkout cards, account settings, and admin dashboards while
staying lightweight and CSS-only.

## Included features

- Verified, review, and missing tax ID states
- GST, VAT, and TIN region examples
- Tax label, helper copy, and status pill layout
- Text truncation for long tax helper copy
- Subtle hover lift interaction
- Responsive wrapping on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the tax ID status row
- `README.md` - usage and contribution context
