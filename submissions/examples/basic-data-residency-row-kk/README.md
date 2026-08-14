# Basic Data Residency Row

## What it does

This submission adds a simple CSS-only data residency row for privacy settings,
SaaS admin panels, compliance dashboards, workspace settings, and account
configuration screens.

It displays a region marker, region name, helper copy, and residency status in
one compact row.

## How to use it

Add the base row class with a region marker, copy, and state pill:

```html
<article class="basic-data-residency-row">
  <span class="region-mark" aria-hidden="true">EU</span>
  <div class="region-copy">
    <strong>European Union</strong>
    <p>Primary workspace data is stored in EU-based infrastructure.</p>
  </div>
  <span class="residency-state is-active">Active</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful across
privacy, compliance, and admin interfaces. The row can be dropped into settings
cards or dashboards while keeping the implementation lightweight and CSS-only.

## Included features

- Active, available, and legacy residency states
- Region initials marker
- Helper copy and status pill layout
- Text truncation for long compliance copy
- Subtle hover lift interaction
- Responsive wrapping on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the data residency row
- `README.md` - usage and contribution context
