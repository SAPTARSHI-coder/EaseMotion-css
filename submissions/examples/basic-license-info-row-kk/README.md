# Basic License Info Row

## What it does

This submission adds a simple CSS-only license info row for billing pages, account settings, SaaS dashboards, admin panels, and subscription summaries.

It aligns a license marker, plan title, renewal/helper copy, and small state label in one compact layout.

## How to use it

Add the utility class to a row containing a marker, license copy, and state:

```html
<div class="basic-license-info-row">
  <span class="license-marker" aria-hidden="true">PRO</span>
  <div class="license-copy">
    <strong>Professional plan</strong>
    <p>Renews on Sep 12 with 12 active seats.</p>
  </div>
  <span class="license-state is-active">Active</span>
</div>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, composable, and useful across account settings, billing cards, admin dashboards, and subscription panels. It keeps license and plan details easy to scan with pure HTML and CSS.

## Included features

- License marker, plan title, helper copy, and state layout
- Active, review, and included examples
- Divider support between rows
- Text truncation for long helper copy
- Responsive wrapping on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the license info row
- `README.md` - usage and contribution context
