# Typographic Stroke-to-Gradient Reveal

## What does this do?
This feature introduces an elegant typographic hover reveal animation where hollow outlined display text fills up with a vibrant gradient sweep from left to right on mouse hover.

## How is it used?
Wrap display text inside a container using `.em-stroke-reveal-container`, and apply the `.em-stroke-reveal-text` class along with a theme variant (e.g. `.theme-cosmic`, `.theme-teal`, `.theme-sunset`) and matching `data-text` attribute:

```html
<div class="em-stroke-reveal-container">
  <h1 class="em-stroke-reveal-text theme-cosmic" data-text="Future of Motion">
    Future of Motion
  </h1>
</div>
```

## Why is this useful for EaseMotion CSS?
Static headers or simple color changes offer limited visual depth.

This component improves typography layouts by:
- **Offering a clean horizontal sweep:** Animating `clip-path` creates a smooth, premium color scan line transition that feels responsive and alive.
- **Ensuring SEO & Accessibility compliance:** The text is mirrored dynamically using the `data-text` attribute inside a pseudo-element overlay, keeping the main HTML heading index readable for screen-readers.
- **Zero JavaScript dependencies:** It runs entirely on the browser's GPU compositor thread using native transitions, maintaining a stable 60fps frame rate.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` directly in your browser and hover over the headers to inspect the color sweep.

## Contribution Notes
- Class naming was handled by the contributor (`.em-stroke-reveal-container`, `.em-stroke-reveal-text`, `.theme-cosmic`, etc.).
- Maintainer will rename to `ease-*` convention before merging.
