# Floating Dock Navigation Bar (macOS Style)

> A fluid, macOS-inspired bottom navigation dock featuring proximity-based icon scaling, glassmorphic styling, and active application indicator dots.

## Features

- **Proximity Magnification** — Uses vanilla JavaScript to calculate mouse distance from dock icons, scaling them up dynamically (up to `1.4x`) along with adjacent icons to simulate a physical, fluid reaction.
- **Glassmorphism Backdrop** — A sleek semi-transparent background featuring `backdrop-filter: blur(16px)` integrated tightly with the page context.
- **Active State Indicators** — Toggling the `.is-active` class displays a subtle blue indicator dot directly beneath the respective application icon.
- **Tooltip Labels** — Hovering over an item reveals a centered, floating tooltip naming the application.
- **Graceful Degradation** — If JavaScript fails or is disabled, the dock gracefully falls back to pure CSS hover elevation (`transform: translateY(-8px) scale(1.15)`).
- **Mobile Responsive** — Proximity scaling is disabled on screens smaller than 480px, switching to a fixed, evenly spaced bottom navigation layout.

## Files

```
submissions/examples/floating-dock-nav-em/
├── demo.html    — Semantic `<nav>` structure containing lists of icons, tooltips, and indicator dots
├── style.css    — Glass backdrop filters, CSS custom property (`--scale`) hooks, and responsive layouts
├── script.js    — Pythagorean mouse distance calculations for smooth CSS `--scale` updates
└── README.md    — Component documentation
```

## Design Tokens

| Variable | Default Value | Purpose |
|---|---|---|
| `--dock-bg` | `rgba(255, 255, 255, 0.1)` | Glassmorphism base |
| `--icon-size` | `50px` | Base unscaled width/height of dock icons |
| `--dot-color` | `#3b82f6` | Indicator dot and focus ring color |
| `--scale` | `1` | Dynamically injected via JS for hover scaling |

## Usage

```html
<nav class="dock-container">
  <ul class="dock" id="dock">
    <li class="dock__item is-active">
      <button class="dock__btn">
        <span class="dock__tooltip">App Name</span>
        <div class="dock__icon">...</div>
        <div class="dock__dot"></div>
      </button>
    </li>
  </ul>
</nav>
```

## Acceptance Criteria ✅

- [x] Navigation dock stays centered at the bottom of the viewport via fixed positioning.
- [x] Icons scale up smoothly when hovered (using JS proximity math with CSS fallbacks).
- [x] Tooltip labels appear centered directly above hovered dock icons.
- [x] Active indicator dots display under active route items (`.is-active`).
- [x] Fully functional on mobile viewports (scaling disabled, icons stack side-by-side).
- [x] Conforms to the repository structure and required file names (`demo.html`, `style.css`, etc).

## License

MIT — Part of the [EaseMotion-css](https://github.com/SAPTARSHI-coder/EaseMotion-css) library.
