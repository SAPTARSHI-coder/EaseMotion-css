# Basic Comparison Detail Row

## What it does

This submission adds a simple CSS-only comparison detail row for showing a label with an old value and a new value.

It works well for settings reviews, plan changes, audit panels, changelog summaries, reports, and admin dashboards.

## How to use it

Add the utility class to a row containing a label, previous value, arrow, and updated value:

```html
<div class="basic-comparison-detail-row">
  <span class="detail-label">Plan</span>
  <span class="detail-value">Starter</span>
  <span class="detail-arrow" aria-hidden="true">-&gt;</span>
  <strong class="detail-value-new">Pro</strong>
</div>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, composable, and useful across common review and reporting interfaces. The layout makes value changes easy to scan without JavaScript or external libraries.

## Included features

- Label, previous value, arrow, and new value layout
- Pill-style old and new value treatment
- Divider support between rows
- Responsive stacked layout on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the comparison detail row
- `README.md` - usage and contribution context
