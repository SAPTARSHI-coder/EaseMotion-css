# Ease Responsive Dark Mode Card

## Description
A fully responsive card component with a built-in light/dark mode toggle. Toggling smoothly transitions the entire card's background, border, text, and shadow between themes. Pure CSS toggle — driven by a hidden checkbox, zero JavaScript required.

## Features
- Smooth color-transition dark/light mode toggle scoped to this single card
- Toggle switch with spring-eased thumb animation
- Fully responsive (percentage-based width, image height adjusts on small screens)
- Fully customizable via CSS custom properties (both light and dark palettes)
- Respects `prefers-reduced-motion`

## Usage
```html
<div class="ease-dark-card">
  <div class="theme-toggle-row">
    <input type="checkbox" id="cardThemeToggle" class="toggle-input" />
    <label for="cardThemeToggle" class="toggle-switch" aria-label="Toggle dark mode"></label>
  </div>

  <div class="card-body">
    <div class="card-image">🌗</div>
    <h3 class="card-title">Card Title</h3>
    <p class="card-desc">Card description text.</p>
    <a href="#" class="card-cta">Learn More</a>
  </div>
</div>
```

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--card-bg-light` / `--card-bg-dark` | `#ffffff` / `#14141c` | Card background per theme |
| `--card-fg-light` / `--card-fg-dark` | `#0f172a` / `#f5f7fa` | Text color per theme |
| `--card-border-light` / `--card-border-dark` | `#e2e8f0` / `#2a2a3f` | Border color per theme |
| `--accent` | `#6366f1` | Toggle/CTA accent color |
| `--card-duration` | `0.4s` | Theme transition speed |
| `--card-radius` | `18px` | Card corner rounding |

## Accessibility
Toggle is a native checkbox/label pair (fully keyboard operable) with a visible `:focus-visible` outline and an `aria-label`. Respects `prefers-reduced-motion` by disabling all theme-transition animations.

## Files
- `demo.html` — live working example with the toggle
- `style.css` — component styles and theme transition
- `README.md` — this file