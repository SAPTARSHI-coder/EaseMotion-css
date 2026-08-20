# Text Highlight Sweep

## What does this do?

Sweeps a customizable color highlight across text like a real highlighter pen, keeping the text highlighted after completion.

## How is it used?

Add the base class and optionally style variations to any inline text element:

```html
<!-- Basic Full Height Highlight Sweep -->
<span class="ease-text-highlight-sweep-ag hl-full">Your text here</span>

<!-- Marker-style Highlight Sweep (Bottom 50% Accent) -->
<span class="ease-text-highlight-sweep-ag hl-marker">Your text here</span>

<!-- Thin-style Underline Sweep (Bottom 20% Accent) -->
<span class="ease-text-highlight-sweep-ag hl-thin">Your text here</span>
```

### Customization

Customize the highlight color, duration, timing function, and delay via CSS custom properties:

```css
:root {
  --ease-highlight-color: #f472b6; /* Custom highlight color */
  --ease-highlight-duration: 1.2s; /* Custom sweep speed */
  --ease-highlight-delay: 0.5s; /* Custom animation delay */
}
```

## Why is it useful?

It provides a premium and realistic visual metaphor for emphasis. It is perfect for headers, callouts, hero sections, and key benefits lists where drawing the reader's attention to specific terms is crucial. By supporting multi-line decoration wrapping via `box-decoration-break: clone`, it remains functional and clean on any viewport.

## Tech Stack

- HTML
- CSS (no external dependencies, clean standard keyframe animation)
- Built-in accessibility configurations (`prefers-reduced-motion: reduce` fallback)
