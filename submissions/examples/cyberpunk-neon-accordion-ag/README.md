# Cyberpunk Neon Accordion

A CSS accordion with a cyberpunk-inspired neon theme and a pulse animation when a section is expanded.

## What does this do?

Creates an accessible accordion using the native `<details>` and `<summary>` elements. Opening an item highlights the header with a neon glow and a pulse animation.

## How is it used?

```html
<details class="ease-accordion">
  <summary class="ease-accordion-header">
    <span class="ease-accordion-title">Your Title Here</span>
  </summary>

  <div class="ease-accordion-content">
    <p>Your content goes here.</p>
  </div>
</details>
```

## Why is it useful?

It provides a visually distinctive accordion without requiring JavaScript. The colors and animation settings can be easily customized using CSS custom properties.