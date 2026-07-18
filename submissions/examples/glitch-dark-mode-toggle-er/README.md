# Glitch Dark Mode Toggle

A pure CSS dark/light mode toggle with a glitch animation effect that plays during state transitions — no JavaScript required.

## What it does

A reusable dark mode toggle switch that uses the native `<input type="checkbox">` `:checked` pseudo-class and CSS `:has()` selector to switch the page between light and dark themes, with animated glitch artifacts on the track, thumb, and label text during the transition.

## How it is used

```html
<label class="ease-glitch-toggle" aria-label="Toggle dark mode">
  <input type="checkbox" class="ease-glitch-toggle-input" />
  <span class="ease-glitch-toggle-track">
    <span class="ease-glitch-toggle-thumb">
      <svg class="ease-glitch-toggle-icon ease-glitch-toggle-icon--sun" ...>...</svg>
      <svg class="ease-glitch-toggle-icon ease-glitch-toggle-icon--moon" ...>...</svg>
    </span>
  </span>
  <span class="ease-glitch-toggle-label-text">
    <span class="ease-glitch-toggle-word--light">Light</span>
    <span class="ease-glitch-toggle-word--dark">Dark</span>
  </span>
</label>
```

Wrap the entire control in a `<label>` so clicking anywhere toggles the checkbox. To apply dark mode to your page, use `:has(.ease-glitch-toggle-input:checked)` on a parent element to swap CSS custom properties.

## Why it fits EaseMotion CSS

This component follows EaseMotion's zero-dependency, animation-first, pure-CSS philosophy. It uses `ease-kf-*` prefixed keyframes (`ease-kf-glitch-track-flash`, `ease-kf-glitch-thumb-jitter`, `ease-kf-glitch-text-artifact`), CSS custom properties for theming, and respects `prefers-reduced-motion` for accessibility. The glitch effect is built entirely with CSS pseudo-elements, `clip-path`, and `mix-blend-mode` — no JavaScript or external libraries needed.

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-glitch-toggle-duration` | `0.35s` | Transition duration |
| `--ease-glitch-toggle-easing` | `cubic-bezier(0.4, 0, 0.2, 1)` | Transition easing curve |
| `--ease-glitch-track-light` | `#d1d5db` | Track color in light mode |
| `--ease-glitch-track-dark` | `#1e293b` | Track color in dark mode |
| `--ease-glitch-thumb` | `#ffffff` | Thumb color (light mode) |
| `--ease-glitch-accent` | `#6366f1` | Focus ring accent color |
| `--ease-glitch-cyan` | `#00e5ff` | Glitch cyan artifact color |
| `--ease-glitch-magenta` | `#ff006e` | Glitch magenta artifact color |
| `--ease-glitch-track-width` | `72px` | Track width |
| `--ease-glitch-track-height` | `36px` | Track height |
| `--ease-glitch-thumb-size` | `28px` | Thumb diameter |

## Accessibility

- Uses a real `<input type="checkbox">`, natively keyboard operable (Tab + Space) and screen-reader accessible.
- Wrapping `<label>` provides a large click target.
- Visible `:focus-visible` outline on the hidden input reflects onto the track.
- `prefers-reduced-motion: reduce` collapses all transitions and animations to near-instant.

## Files included

- `demo.html` — self-contained browser demo
- `style.css` — pure CSS implementation
- `README.md` — this documentation
