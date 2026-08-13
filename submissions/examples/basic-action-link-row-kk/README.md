# Basic Action Link Row

## What it does

This submission adds a simple CSS-only action link row for pairing short section text with a right-aligned action link.

It works well for card headers, settings panels, dashboard summaries, profile sections, quick links, and compact navigation rows.

## How to use it

Add the utility class to a row with text content and a link:

```html
<div class="basic-action-link-row">
  <div>
    <strong>Recent invoices</strong>
    <p>Review the latest billing activity.</p>
  </div>
  <a href="#">View all</a>
</div>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, composable, and easy to reuse across multiple UI sections. The class name clearly explains the purpose of the component, and the pattern can be combined with cards, lists, dashboards, and content sections.

## Included features

- Compact text and action layout
- Right-aligned pill-style action link
- Divider support between rows
- Hover and keyboard focus styling
- Responsive stacked layout on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the action link row
- `README.md` - usage and contribution context
