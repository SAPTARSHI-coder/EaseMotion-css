# CSS Bounce-Pulse Card Grid for SaaS Showcase Layouts

A modern **Bounce-Pulse Card Grid** built with pure HTML and CSS. Cards enter with a staggered bounce-pulse, keep a soft ambient pulse accent, and respond to hover/focus with a playful bounce — ideal for SaaS landing pages, feature sections, and product showcases.

**Issue:** [#59555](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/59555)

## Features

- Pure HTML5 & CSS3 (no JavaScript)
- Staggered bounce-pulse entrance animation
- Hover / focus-within bounce-pulse feedback
- Soft ambient pulse accents per card
- Glassmorphism-inspired SaaS cards
- Fully responsive (desktop, tablet, mobile)
- Keyboard-accessible focus styles on links
- `prefers-reduced-motion` support
- Tunable via CSS custom properties

## Folder Structure

```text
m-bounce-pulse-card-grid-59555/
├── demo.html
├── style.css
└── README.md
```

## Usage

Open `demo.html` in any modern browser, or link the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Markup pattern:

```html
<section class="card-grid">
  <article class="card card--accent-1">
    <div class="card__pulse" aria-hidden="true"></div>
    <div class="card__icon" aria-hidden="true">🚀</div>
    <h2>Fast Deployment</h2>
    <p>Short feature description.</p>
    <a class="card__link" href="#">Learn more</a>
  </article>
</section>
```

## CSS Custom Properties

Override these on `:root` (or a parent) to theme the grid:

| Property | Default | Purpose |
| --- | --- | --- |
| `--bg-start` / `--bg-end` | `#0f172a` / `#1e293b` | Page gradient |
| `--card-bg` | `rgba(255,255,255,.08)` | Card fill |
| `--card-border` | `rgba(255,255,255,.16)` | Card border |
| `--primary` / `--secondary` | `#6366f1` / `#06b6d4` | Accent colors |
| `--text` / `--muted` | `#f8fafc` / `#cbd5e1` | Typography colors |
| `--radius` | `22px` | Card corner radius |
| `--transition` | `0.35s ease` | UI transition timing |
| `--bounce-duration` | `0.75s` | Bounce animation length |
| `--pulse-duration` | `2.4s` | Ambient pulse loop |
| `--bounce-lift` | `-14px` | Peak vertical lift |
| `--bounce-scale` | `1.06` | Peak scale on bounce |
| `--grid-gap` | `1.75rem` | Gap between cards |
| `--card-pad` | `2rem 1.75rem` | Inner card padding |
| `--shadow-hover` | indigo soft shadow | Hover elevation |

Example:

```css
:root {
  --primary: #8b5cf6;
  --bounce-duration: 0.9s;
  --bounce-lift: -18px;
}
```

## Accessibility

- Decorative pulse orbs and icons use `aria-hidden="true"`
- Links expose a visible `:focus-visible` ring
- Under `prefers-reduced-motion: reduce`, entrance/hover animations and pulse loops are disabled; cards remain fully readable

## Browser Support

- Chrome
- Edge
- Firefox
- Safari
- Opera

Created for the **EaseMotion CSS** examples collection.
