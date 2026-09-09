# Basic Count Summary Row

## What it does

This submission adds a simple CSS-only count summary row for showing a count value, descriptive text, and a small right-side label.

It works well for dashboards, admin panels, list summaries, profile sections, project cards, and compact overview blocks.

## How to use it

Add the utility class to a row containing a count, copy, and optional label:

```html
<div class="basic-count-summary-row">
  <strong>128</strong>
  <div class="count-copy">
    <span>Total files</span>
    <p>Documents uploaded this month.</p>
  </div>
  <span class="count-label">Updated</span>
</div>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, composable, and useful across common summary interfaces. The layout makes counts and supporting information easy to scan without JavaScript or external libraries.

## Included features

- Count value, label, helper copy, and status layout
- Divider support between rows
- Text truncation for long helper copy
- Responsive wrapping on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the count summary row
- `README.md` - usage and contribution context
