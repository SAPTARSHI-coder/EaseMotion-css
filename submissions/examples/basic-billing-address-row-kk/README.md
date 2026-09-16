# Basic Billing Address Row

## What it does

This submission adds a simple CSS-only billing address row for checkout pages,
account billing settings, subscription panels, invoice settings, and admin
customer profiles.

It displays a region marker, address label, helper copy, and address state in
one compact row.

## How to use it

Add the base row class with an address marker, copy, and state pill:

```html
<article class="basic-billing-address-row">
  <span class="address-mark" aria-hidden="true">IN</span>
  <div class="address-copy">
    <strong>Primary billing address</strong>
    <p>Bengaluru, Karnataka, India - used for monthly invoices.</p>
  </div>
  <span class="address-state is-default">Default</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful across
common checkout and account settings interfaces. The row can be used inside
cards, billing profiles, customer dashboards, and subscription panels while
staying lightweight and CSS-only.

## Included features

- Default, backup, and archived address states
- Region initials marker
- Address title, helper copy, and state pill layout
- Text truncation for long address descriptions
- Subtle hover lift interaction
- Responsive wrapping on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the billing address row
- `README.md` - usage and contribution context
