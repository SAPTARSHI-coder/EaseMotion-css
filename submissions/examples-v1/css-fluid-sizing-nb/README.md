# CSS Fluid Sizing

## What does this do?

A self-contained educational showcase that demonstrates the practical use of CSS `min()`, `max()`, and `clamp()` mathematical functions for fluid typography, responsive containers, adaptive spacing, and modern responsive design patterns — all without media queries.

## How is it used?

Open `demo.html` directly in any browser. Resize the viewport to see each function respond in real time:

- **Hero section** uses `clamp()` for the title, subtitle, and description text.
- **min() demo** shows capped width containers and fluid padding.
- **max() demo** shows minimum-guarantee containers and scaling text.
- **clamp() demo** shows fluid typography, adaptive containers, spacing, and gaps.
- **Comparison section** shows three cards side-by-side with live `min()`, `max()`, and `clamp()` visual demonstrations.
- **Responsive playground** contains six cards with different fluid sizing properties.

All CSS functions are used in real declarations:

```css
width: min(90%, 600px);
width: max(320px, 50%);
font-size: clamp(1rem, 4vw, 3rem);
```

## Why is it useful?

Many developers rely on media queries for responsive design, but `min()`, `max()`, and `clamp()` offer a more elegant, maintainable approach. This showcase helps developers:

1. Visually understand the difference between the three functions.
2. See real-world use cases for each.
3. Build confidence using CSS mathematical functions in production.
4. Reduce reliance on hardcoded breakpoints.

## Explanation of min()

`min()` selects the smallest value from a comma-separated list of arguments.

```css
width: min(90%, 600px);
```

This sets the width to whichever is smaller: 90% of the parent or 600px. On narrow screens the element takes 90% width. On wide screens it stops at 600px.

## Explanation of max()

`max()` selects the largest value from a comma-separated list of arguments.

```css
width: max(320px, 50%);
```

This sets the width to whichever is larger: 320px or 50% of the parent. The element will never collapse below 320px, but will grow past it when the viewport allows.

## Explanation of clamp()

`clamp(min, preferred, max)` accepts three values and selects a value within the range.

```css
font-size: clamp(1rem, 4vw, 3rem);
```

The preferred value `4vw` scales with the viewport, but is clamped between `1rem` (minimum) and `3rem` (maximum). This creates true fluid typography — the text scales smoothly across all screen sizes without any media queries.

## Responsive Design Benefits

- **Zero media queries** for common sizing patterns
- **Smooth transitions** rather than breakpoint jumps
- **Future-proof** — works with any viewport size, including intermediate widths
- **Maintainable** — one declaration replaces multiple breakpoint overrides
- **Accessible** — respects user zoom and text-size preferences

## File Structure

```
submissions/examples/css-fluid-sizing-nb/
├── demo.html
├── style.css
└── README.md
```
