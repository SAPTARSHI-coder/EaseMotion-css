# CSS Fade-In Hero Section — Glassmorphism Layouts

A pure CSS hero section featuring frosted-glass panels, ambient gradient orbs, and a staggered fade-in entrance animation. Built for SaaS landing pages, product showcases, and modern web apps.

## Demo

Open `demo.html` in any modern browser. No build step required.

## Features

- **Glassmorphism panels** — `backdrop-filter: blur` with semi-transparent backgrounds
- **Staggered fade-in** — panels enter sequentially using `animation-delay`
- **Ambient orbs** — three animated gradient blobs drift behind the glass
- **Responsive** — three-column stats grid collapses to two-column, then single-column
- **Accessible** — `prefers-reduced-motion` disables all animations instantly
- **Zero JavaScript** — pure HTML + CSS, no frameworks

## CSS Custom Properties

Override these on `:root` to re-theme the component:

```css
:root {
  --fhg-bg: #0c0f1a;
  --fhg-text: #e8ecf4;
  --fhg-muted: #8892a8;
  --fhg-accent: #7c6aef;
  --fhg-accent-light: #a49bff;
  --fhg-glass-bg: rgba(255, 255, 255, 0.06);
  --fhg-glass-border: rgba(255, 255, 255, 0.12);
  --fhg-glass-blur: 18px;
  --fhg-radius: 24px;
  --fhg-enter: 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  --fhg-stagger: 0.12s;
}
```

## How It Works

1. Each `.glass-panel` starts with `opacity: 0` and `translateY(24px)`
2. The `fhg-fade-in` keyframe animates both properties to their final state
3. `animation-delay` is set via CSS `calc()` using the `--fhg-stagger` variable
4. The `@media (prefers-reduced-motion: reduce)` block sets `animation: none` and resets opacity/transform

## Responsive Breakpoints

- **Desktop** (> 768px): 4-column stats grid, 2-column feature grid
- **Tablet** (≤ 768px): 2-column stats, single-column features
- **Mobile** (≤ 480px): full-width stack, stacked buttons

## Browser Support

Chrome 76+, Firefox 103+, Safari 14+, Edge 79+

## License

Free to use in any EaseMotion CSS project.
