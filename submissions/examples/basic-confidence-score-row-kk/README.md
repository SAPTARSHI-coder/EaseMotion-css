# Basic Confidence Score Row

## What it does

This submission adds a simple CSS-only confidence score row for review panels, report cards, search results, quality checks, and analysis summaries.

It aligns a score, result title, helper copy, and confidence label in one compact layout.

## How to use it

Add the utility class to a row containing a score, copy, and confidence label:

```html
<div class="basic-confidence-score-row">
  <strong class="confidence-score">96%</strong>
  <div class="confidence-copy">
    <span>High match</span>
    <p>The submitted pattern closely matches the expected layout.</p>
  </div>
  <span class="confidence-label is-high">High</span>
</div>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, composable, and useful across reports, review panels, result cards, quality checks, and dashboard summaries. It keeps confidence information easy to scan with pure HTML and CSS.

## Included features

- Score, title, helper copy, and confidence label layout
- High, medium, and low confidence examples
- Divider support between rows
- Text truncation for long helper copy
- Responsive wrapping on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the confidence score row
- `README.md` - usage and contribution context
