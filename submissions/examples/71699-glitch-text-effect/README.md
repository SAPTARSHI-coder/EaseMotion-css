# Cyberpunk Glitch Text Effect Component (`ease-glitch-text`)

A pure HTML + Vanilla CSS cyberpunk glitch text effect component featuring `data-text` attribute mirroring, `::before` (Cyan offset) and `::after` (Red offset) pseudo-element overlays, rapidly shifting `clip-path: polygon()` horizontal slice keyframes (`@keyframes ease-glitch-clip-1`, `@keyframes ease-glitch-clip-2`), red/cyan chromatic separation, dark/light theme adaptation, and reduced motion accessibility fallbacks.

## Features

- **Pure HTML + CSS**: 100% responsive glitch text animation without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **`data-text` Content Mirroring**: Uses CSS `content: attr(data-text)` on `::before` and `::after` pseudo-elements to position exact text overlays over the original base element.
- **Dynamic `clip-path` Slice Keyframes**: Rapidly animates horizontal polygon slice coordinates (`@keyframes ease-glitch-clip-1`, `@keyframes ease-glitch-clip-2`) with micro `transform: translate()` offsets to create realistic screen tearing and RGB split effects.
- **Chromatic Separation**: Applies contrasting cyan (`text-shadow: -2px 0 #00ffff`) and red (`text-shadow: 2px 0 #ff0055`) text shadows to pseudo-element layers.
- **100% Accessible**: Original text remains real accessible DOM text for screen readers while pseudo-elements act as decorative overlays. Includes `@media (prefers-reduced-motion: reduce)` fallbacks (`animation: none !important; opacity: 0 !important;`) for clean, readable static text.
- **Theme Adaptability & Motion Controls**: Supports dark space terminal theme default presentation, light theme adaptation (`@media (prefers-color-scheme)`), and reduced motion controls.

## Usage

Include `style.css` and use semantic HTML:

```html
<!-- Cyberpunk Hero Glitch Heading -->
<h1 class="ease-glitch-text" data-text="SYSTEM OVERRIDE">SYSTEM OVERRIDE</h1>

<!-- Subtle Subtitle Glitch -->
<p
  class="ease-glitch-text ease-glitch-subtle"
  data-text="CHROMATIC TETHER DETECTED"
>
  CHROMATIC TETHER DETECTED
</p>

<!-- Matrix Green/Magenta Variant -->
<span class="ease-glitch-text ease-glitch-matrix" data-text="MATRIX DATA">
  MATRIX DATA
</span>

<!-- Hover-Triggered Glitch Button -->
<button
  class="ease-glitch-text ease-glitch-hover-only glitch-btn"
  data-text="INITIALIZE PROTOCOL"
>
  INITIALIZE PROTOCOL
</button>
```

### Customization Variables

```css
.ease-glitch-text {
  --glitch-cyan: #00ffff;
  --glitch-red: #ff0055;
  --glitch-speed: 2.5s;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/71699-glitch-text-effect/demo.html) directly in any modern web browser to interact with the glitch text effect component offline.
