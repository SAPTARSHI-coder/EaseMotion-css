# Solar Flare Radial CSS Button Component

A pure HTML + Vanilla CSS button component featuring a "Solar Flare Radial" visual identity with layered radial-gradient flare cores (`radial-gradient(circle at 50% 50%, rgba(255, 245, 180, 0.95)...)`), glowing perimeter borders (`border: 1px solid rgba(255, 179, 0, 0.55)`), expanding solar halo pseudo-elements (`::before`), and native button controls.

## Features

- **Pure HTML + CSS**: 100% interactive without JavaScript, external fonts, external image assets, or build scripts. Works offline.
- **Solar Flare Radial Identity**: Multi-layer radial gradient flare core, glowing solar border, text luminescent shadow, and expanding solar halo pseudo-element (`::before`).
- **100% Accessible**: Built using native `<button type="button">` with native keyboard activation (`Enter`, `Space`), disabled-state styling (`disabled`), and clear `:focus-visible` indicators.
- **Clear `:focus-visible` States**: Dedicated focus outlines on active button controls with radiant amber glow.
- **Responsive & Mobile Ready**: Responsive flex layout wraps cleanly across mobile viewports (320px–1440px+).
- **Theme Adaptability & Motion Controls**: Supports `@media (prefers-color-scheme)` and `@media (prefers-reduced-motion: reduce)`.

## Usage

Include `style.css` and use semantic HTML:

```html
<button class="solar-button" type="button">
  <span class="solar-button__text">ACTIVATE CORE</span>
</button>

<button class="solar-button" type="button" disabled>
  <span class="solar-button__text">SYSTEM OFFLINE</span>
</button>
```

### Customization Variables

```css
:root {
  --solar-bg: #120b03;
  --solar-surface: #241305;
  --solar-primary: #ffb300;
  --solar-secondary: #ff5a1f;
  --solar-border: rgba(255, 179, 0, 0.55);
}
```
