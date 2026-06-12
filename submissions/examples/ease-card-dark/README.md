# Dark Card Variant

## What does this do?

Adds a dark-themed variant (`ease-card-dark`) for the standard composable card component using dark backgrounds and light text variables.

## How is it used?

Combine the base `.ease-card` class with `.ease-card-dark` directly on your card container:

```html
<div class="ease-card ease-card-dark">
  <div class="ease-card-header">
    <h2 class="ease-card-title">Card Title</h2>
    <p class="ease-card-subtitle">Card Subtitle</p>
  </div>
  <div class="ease-card-body">
    <p>Card Content here...</p>
  </div>
</div>
```

## Why is it useful?

Modern web layouts often require visually distinct components for information hierarchy. Stacking a dark card variant allows designers to highlight premium features, display dark-mode blocks inside standard layouts, or emphasize promotional cards side-by-side with standard cards.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser to view the light vs dark card comparison.

## Contribution Notes

- Class naming: `ease-card-dark`.
