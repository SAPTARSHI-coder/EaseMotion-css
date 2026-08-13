# Basic Source Attribution Row

## What it does

This submission adds a simple CSS-only source attribution row for documentation pages, reports, article cards, research summaries, and content reference sections.

It aligns a source marker, reference title, supporting detail, and source label in one compact layout.

## How to use it

Add the utility class to a row containing a source marker, copy, and label:

```html
<div class="basic-source-attribution-row">
  <span class="source-mark" aria-hidden="true">01</span>
  <div class="source-copy">
    <strong>Design system notes</strong>
    <p>Used as the reference for spacing and tone.</p>
  </div>
  <span class="source-label">Internal</span>
</div>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, composable, and useful across docs, reports, article layouts, research cards, dashboards, and content reference panels. It keeps attribution details easy to scan with pure HTML and CSS.

## Included features

- Source marker, title, helper copy, and label layout
- Internal, report, and docs examples
- Divider support between rows
- Text truncation for long helper copy
- Responsive wrapping on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the source attribution row
- `README.md` - usage and contribution context
