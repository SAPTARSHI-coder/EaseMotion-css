# Interactive Tooltip with Neon Styling (`interactive-tooltip-neon`)

A pure HTML + Vanilla CSS interactive neon tooltip component featuring glowing neon borders (`box-shadow: 0 0 14px var(--neon-glow)`), CSS-only `:hover` and `:focus-visible` triggers, `aria-describedby` accessibility, color variants (Cyan, Magenta, Emerald), multiline text support, light/dark theme adaptation, and full accessibility support.

## Features

- **Pure HTML + CSS**: 100% interactive neon tooltip component without JavaScript, external fonts, image assets, or build scripts. Works offline.
- **Cyberpunk Neon Visual Aesthetics**: Distinctive neon stroke borders (`1px solid var(--neon-color)`), inner & outer glow effects (`box-shadow: 0 0 14px var(--neon-glow)`), and tooltip pointer arrows (`::after`).
- **CSS-Only Hover & Focus Triggers**: Reveals smoothly when the trigger is hovered (`:hover`) or focused via keyboard (`:focus-visible`).
- **GPU-Accelerated Enter/Exit Transition**: Operates strictly on `opacity`, `transform: translateY() scale()`, and `visibility` for smooth 60fps feedback.
- **100% Accessible**: Built using `aria-describedby="tooltip-id"` on triggers and `role="tooltip"` on tooltip bubbles. Keyboard navigation supported (`Tab`, `Shift+Tab`, `Enter`, `Space`) with distinct `:focus-visible` indicators.
- **Responsive & Mobile Ready**: Tooltips position cleanly on narrow viewports (320px–1440px+) without horizontal scrollbars.
- **Theme Adaptability & Motion Controls**: Supports dark space theme default presentation, light theme adaptation (`@media (prefers-color-scheme)`), and reduced motion controls (`@media (prefers-reduced-motion: reduce)`).

## Usage

Include `style.css` and use semantic HTML:

```html
<div class="tooltip-wrapper">
  <button
    type="button"
    class="neon-tooltip-trigger"
    aria-describedby="tip-cyan"
  >
    <span>Hover or Focus</span>
  </button>
  <span id="tip-cyan" class="neon-tooltip-bubble" role="tooltip">
    Cyberpunk Status: 100% Operational
  </span>
</div>
```

### Customization Variables

```css
:root {
  --neon-color: #38bdf8;
  --neon-secondary: #f43f5e;
  --neon-bg: #090d16;
  --neon-glow: rgba(56, 189, 248, 0.4);
  --tooltip-duration: 0.25s;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/79961-interactive-tooltip-neon/demo.html) directly in any modern web browser to interact with the neon tooltip component offline.
