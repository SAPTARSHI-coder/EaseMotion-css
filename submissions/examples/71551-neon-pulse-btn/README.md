# CSS Neon Pulse Button Component (`ease-neon-pulse-btn`)

A pure HTML + Vanilla CSS glowing neon pulse button component featuring multi-layered `box-shadow` and `text-shadow` depth, `@keyframes ease-neon-pulse-glow` intensity modulation, neon color modifiers (Cyan, Magenta, Emerald, Amber), dark/light theme adaptation, and reduced motion accessibility fallbacks without any JavaScript.

## Features

- **Pure HTML + CSS**: 100% responsive neon pulse button interaction without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **Multi-Layered `box-shadow` Halos**: Combines 4 distinct `box-shadow` depth layers (`0 0 5px`, `0 0 15px`, `0 0 30px`, `inset 0 0 10px`) paired with `text-shadow` to create realistic neon sign illumination.
- **Smooth Keyframe Glow Modulation**: Uses `@keyframes ease-neon-pulse-glow` to smoothly expand and contract blur radii and glow spread without layout reflows.
- **100% Accessible**: Uses semantic `<button>` elements with high-contrast text, explicit focus rings (`:focus-visible`), and `@media (prefers-reduced-motion: reduce)` fallbacks (`animation: none !important;`) for clean static presentation.
- **Theme Adaptability & Color Palette**: Supports dark space terminal default presentation, light theme adaptation (`@media (prefers-color-scheme)`), Cyan (`#00ffff`), Magenta (`.ease-neon-magenta`), Emerald (`.ease-neon-emerald`), and Amber (`.ease-neon-amber`) variants.

## Usage

Include `style.css` and use semantic HTML:

```html
<!-- Cyan Neon Pulse Button (Default) -->
<button type="button" class="ease-neon-pulse-btn">
  <span>LAUNCH PROTOCOL</span>
</button>

<!-- Magenta Neon Pulse Button -->
<button type="button" class="ease-neon-pulse-btn ease-neon-magenta">
  <span>SYSTEM OVERRIDE</span>
</button>

<!-- Emerald Matrix Neon Pulse Button -->
<button type="button" class="ease-neon-pulse-btn ease-neon-emerald">
  <span>INITIALIZE MATRIX</span>
</button>

<!-- Amber Gold Neon Pulse Button -->
<button type="button" class="ease-neon-pulse-btn ease-neon-amber">
  <span>SECURITY ACCESS</span>
</button>
```

### Customization Variables

```css
.ease-neon-pulse-btn {
  --neon-color: #00ffff;
  --neon-speed: 2s;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/71551-neon-pulse-btn/demo.html) directly in any modern web browser to interact with the neon pulse button component offline.
