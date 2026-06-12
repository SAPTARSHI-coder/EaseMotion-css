# CSS-only Accordion Component

## What does this do?
A lightweight accordion component built with semantic HTML and pure CSS. It lets users expand and collapse content sections without JavaScript, using the native `<details>` and `<summary>` elements.

## How is it used?
Add the class to any HTML element:

```html
<div class="accordion">
  <details class="accordion-item">
    <summary class="accordion-trigger">Question</summary>
    <div class="accordion-content">Answer</div>
  </details>
</div>
```

## Why is it useful?
This fits EaseMotion CSS because it is human-readable, animation-first, and composable. Developers often need accordions for FAQs and docs, and a CSS-only version keeps the library lightweight while still feeling interactive.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open demo.html directly in your browser to see the effect.

## Contribution Notes
- Class naming was handled by the contributor
- Maintainer will rename to ease-* convention before merging
