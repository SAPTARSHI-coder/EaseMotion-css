# Pulsating Wave CSS Tooltip Component

A pure HTML + Vanilla CSS interactive tooltip and popover component featuring a staggered "Pulsating Wave" expanding ring effect around a stable tooltip container.

## Features

- **Pure HTML + CSS**: 100% interactive without JavaScript, external fonts, external assets, or build scripts. Works offline.
- **Pulsating Wave Mechanics**: Staggered expanding wave rings (`::before` & `::after`) pulse outward (`transform: scale()`) and fade while the tooltip text container remains rock-solid stable.
- **Dual Hover & Focus Discovery**: Revealed via pointer `:hover` as well as keyboard `:focus` and `:focus-visible` on native `<button>` controls.
- **Accessible (a11y)**: Connects trigger elements to tooltips using `aria-describedby` and `role="tooltip"`, with clear `:focus-visible` outlines.
- **Hardware-Friendly Animations**: GPU-accelerated transitions on `opacity` and `transform`.
- **Responsive & Dark Mode**: Adapts across mobile viewports (down to 320px), `@media (prefers-color-scheme)`, and `@media (prefers-reduced-motion: reduce)`.

## Usage

Include `style.css` and associate your trigger and tooltip using `aria-describedby`:

```html
<div class="tooltip-wrapper">
  <button type="button" class="tooltip-trigger" aria-describedby="tip-demo">
    <span>Live Telemetry</span>
  </button>
  <div id="tip-demo" class="wave-tooltip tooltip-top" role="tooltip">
    <div class="wave-rings" aria-hidden="true"></div>
    <div class="tooltip-header">LIVE STATUS</div>
    <div class="tooltip-body">Telemetry stream active.</div>
  </div>
</div>
```

### Customization Variables

```css
:root {
  --tooltip-bg: #0f172a;
  --tooltip-border: #1e293b;
  --tooltip-text: #f8fafc;
  --tooltip-header: #38bdf8;
  --wave-color: rgba(56, 189, 248, 0.45);
}
```
