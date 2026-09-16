# Synthwave Grid Line CSS Button Component

A pure HTML + Vanilla CSS button component featuring a "Synthwave Grid Line" visual identity with repeating linear-gradient perspective grid lines (`repeating-linear-gradient(...)`), glowing cyan horizon line details (`::after`), neon pink (`#ff2bd6`) & cyan (`#28f7ff`) glow borders, and native button controls.

## Features

- **Pure HTML + CSS**: 100% interactive without JavaScript, external fonts, external image assets, or build scripts. Works offline.
- **Synthwave Grid Line Identity**: Dark synthwave surface, repeating perspective grid lines (`::before`), cyan horizon line (`::after`), neon pink & cyan box-shadow glows, and pointer-safe decorative layers (`pointer-events: none`).
- **100% Accessible**: Built using native `<button type="button">` with native keyboard activation (`Enter`, `Space`), disabled-state styling (`disabled`), and clear `:focus-visible` indicators.
- **Clear `:focus-visible` States**: Dedicated focus outlines on active button controls with radiant cyan neon glow.
- **Responsive & Mobile Ready**: Responsive flex layout wraps cleanly across mobile viewports (320px–1440px+).
- **Theme Adaptability & Motion Controls**: Supports `@media (prefers-color-scheme)` and `@media (prefers-reduced-motion: reduce)`.

## Usage

Include `style.css` and use semantic HTML:

```html
<button class="synth-button" type="button">
  <span class="synth-button__text">LAUNCH SYSTEM</span>
</button>

<button class="synth-button" type="button" disabled>
  <span class="synth-button__text">GRID OFFLINE</span>
</button>
```

### Customization Variables

```css
:root {
  --synth-bg: #09051a;
  --synth-surface: #160b2e;
  --synth-pink: #ff2bd6;
  --synth-cyan: #28f7ff;
  --synth-border: rgba(255, 43, 214, 0.65);
}
```
