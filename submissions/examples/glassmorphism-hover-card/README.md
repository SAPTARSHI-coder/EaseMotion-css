# glassmorphism-hover-card — Glassmorphism Hover Card Demo

## Feature overview

This demo provides a set of CSS-only glassmorphism hover cards showcasing multiple visual variants:

- Frosted Glass Card
- Neon Glow Glass Card
- Floating Blur Card
- Gradient Glass Panel
- Interactive Hover Glass Card

Features include backdrop blur, layered transparency, gradient lighting, subtle hover elevation, and responsive layouts.

## Usage

Open `demo.html` directly in a browser. The demo imports only the local `style.css` file and requires no JavaScript.

- Resize the browser to test responsive behavior.
- Hover over each card to see elevation, glow, and lighting effects.
- The demo respects `prefers-reduced-motion` to disable animations for accessibility.

## Folder structure

```
submissions/examples/glassmorphism-hover-card/
├── demo.html
├── README.md
└── style.css
```

## Customization examples

- Increase or decrease blur by editing `backdrop-filter: blur()` in `.glass-card` variants.
- Tune hover elevation by adjusting `translateY()` and `scale()` values in the hover selectors.
- Change gradient colors by editing the `linear-gradient` values in `.glass-card.gradient`.

## Browser compatibility

This demo targets modern browsers that support `backdrop-filter`, CSS gradients, `mix-blend-mode`, and CSS transitions. It works best in recent versions of Chrome, Edge, Safari, and Firefox. On browsers without `backdrop-filter`, the panels gracefully fall back to translucent backgrounds.

## Accessibility notes

- The demo respects `prefers-reduced-motion: reduce` to disable non-essential animation and transitions.
- Ensure sufficient color contrast when customizing colors for production use.

## Why this fits EaseMotion CSS

The submission demonstrates motion-rich UI patterns implemented purely with CSS, aligning with EaseMotion's goal of lightweight, reusable animation utilities. These glassmorphism utilities can be adopted as composable patterns within larger interfaces without introducing JavaScript or external dependencies.
