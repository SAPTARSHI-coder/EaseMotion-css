# ease-glassmorphism-pricing-grid

A responsive, three-column glassmorphic pricing card grid with a staggered entry scale/fade-in animation and interactive hover-grow buttons — ideal for SaaS and software landing pages.

## Features

- 🎯 Smooth staggered CSS entry animation (fade + scale) per card, no JS
- 🖱️ Interactive triggers: hover-lift on cards, hover-grow on buttons
- 🧊 Frosted-glass (glassmorphism) card backgrounds via `backdrop-filter: blur()`
- ⭐ Featured/highlighted plan variant with badge
- 🎨 Fully customizable via CSS custom properties
- 🌗 Light/dark mode support via `[data-theme]`
- 📱 Fully responsive: 3 columns → 2 columns → 1 column
- ♿ Accessible: semantic heading per card, checkmark icons are decorative (feature meaning conveyed by text), visible `:focus-visible` outlines on buttons
- 🧠 Respects `prefers-reduced-motion`

## Usage

```html
<section class="ease-pricing-section" data-theme="dark">
  <div class="ease-pricing-grid">
    <div class="ease-pricing-card">
      <h3 class="ease-pricing-plan">Hobby</h3>
      <div class="ease-pricing-price">$0<span>/mo</span></div>
      <ul class="ease-pricing-features">
        <li>1 project</li>
      </ul>
      <button class="ease-pricing-btn" type="button">Get Started</button>
    </div>
    <!-- repeat .ease-pricing-card for each plan -->
  </div>
</section>
```

Add `.ease-pricing-card--featured` plus a `<span class="ease-pricing-badge">Most Popular</span>` to highlight a recommended plan.

## CSS Variables

| Variable                    | Default     | Description                          |
|-------------------------------|-------------|-----------------------------------------|
| `--ease-pricing-bg`            | `rgba(255,255,255,0.03)` | Card glass background     |
| `--ease-pricing-border`        | `rgba(255,255,255,0.08)` | Card border color         |
| `--ease-pricing-blur`          | `16px`      | Backdrop blur strength                 |
| `--ease-pricing-radius`        | `24px`      | Card corner radius                     |
| `--ease-pricing-text`          | `#f8fafc`   | Card text color                        |
| `--ease-pricing-muted`         | `#94a3b8`   | Secondary text color                   |
| `--ease-pricing-accent`        | `#818cf8`   | Featured border / icon accent color    |
| `--ease-pricing-btn-bg`        | `#6366f1`   | Button background                      |
| `--ease-pricing-btn-text`      | `#ffffff`   | Button text color                      |
| `--ease-pricing-page-bg`       | `#0f172a`   | Section background behind the grid     |
| `--ease-pricing-duration`      | `0.6s`      | Entry animation duration               |
| `--ease-pricing-stagger`       | `0.12s`     | Delay increment between cards          |
| `--ease-pricing-easing`        | `cubic-bezier(0.16, 1, 0.3, 1)` | Entry animation easing |

## Accessibility

- Each plan name uses a semantic `<h3>`.
- Feature lists are plain `<ul>`/`<li>` — the checkmark SVGs are purely decorative, since the feature text itself conveys the meaning.
- All buttons have visible `:focus-visible` outlines for keyboard navigation.
- The staggered entry animation and hover-grow effects are disabled under `prefers-reduced-motion: reduce`; cards render immediately at full opacity.

## Browser Support

`backdrop-filter` requires a reasonably modern browser (Chrome 76+, Safari 9+, Firefox 103+, Edge 79+). Where unsupported, cards gracefully fall back to their solid `background` color without blur.