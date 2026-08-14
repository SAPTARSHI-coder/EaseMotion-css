# Basic Key Fact Row

## What it does

This submission adds a simple CSS-only key fact row for reports, documentation pages, article summaries, dashboard cards, and review panels.

It aligns a fact label, main value, helper copy, and small context tag in one compact layout.

## How to use it

Add the utility class to a row containing a label, fact copy, and optional tag:

```html
<div class="basic-key-fact-row">
  <span class="fact-label">Coverage</span>
  <div class="fact-copy">
    <strong>92%</strong>
    <p>Most checklist items are complete and ready to review.</p>
  </div>
  <span class="fact-tag is-good">Strong</span>
</div>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, composable, and useful across docs, reports, dashboards, article cards, and compact summaries. It keeps important facts easy to scan with pure HTML and CSS.

## Included features

- Fact label, value, helper copy, and context tag layout
- Strong, default, and muted tag examples
- Divider support between rows
- Text truncation for long helper copy
- Responsive stacked layout on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the key fact row
- `README.md` - usage and contribution context
