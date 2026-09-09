# Basic Data Residency Row

## What it does

This submission adds a simple CSS-only data residency row for workspace
settings, compliance panels, enterprise admin pages, and region configuration
screens.

It presents a region icon, region name, helper text, residency scope, and
hosting state in one compact reusable row.

## How to use it

Add the base row class with a region icon, copy area, scope label, and state
pill:

```html
<article class="basic-data-residency-row">
  <span class="residency-icon is-active" aria-hidden="true">US</span>
  <div class="residency-copy">
    <strong>United States region</strong>
    <p>Primary workspace data is stored in US data centers.</p>
  </div>
  <span class="residency-scope">Primary</span>
  <span class="residency-state is-active">Active</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful in common
enterprise settings interfaces. The row can be reused inside region selectors,
compliance dashboards, workspace settings, and data residency panels while
staying lightweight and CSS-only.

## Included features

- Active, migrating, and restricted region examples
- Residency scope metadata
- Hosting state pills
- Long text truncation for region descriptions
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the data residency row
- `README.md` - usage and contribution context
