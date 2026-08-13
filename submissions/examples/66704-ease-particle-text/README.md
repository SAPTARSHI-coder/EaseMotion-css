# Particle Text Typography Component (`ease-particle-text`)

A pure HTML + Vanilla CSS particle-inspired typography component featuring repeating radial gradient matrix textures (`background-clip: text`), continuous background-position particle drift animations (`@keyframes particle-text-drift`), component-scoped CSS variables, and accessibility controls.

## Features

- **Pure HTML + CSS**: 100% interactive typography effect without JavaScript, external fonts, canvas, WebGL, or build scripts. Works offline.
- **Repeating Radial Gradient Texture**: Built using dual layered `repeating-radial-gradient(circle at ...)` matrices clipped to text via `-webkit-background-clip: text` and `color: transparent`.
- **Multiple Particle Variants**:
  - **Cosmic Cyan**: Cosmic cyan and violet particle dot matrix with continuous drift (`@keyframes particle-text-drift`) and glowing aura shimmer (`@keyframes particle-text-shimmer`).
  - **Cyberpunk Neon**: Dual-layer cyan and magenta particle matrix with diagonal movement (`@keyframes particle-text-drift-diagonal`).
  - **Solar Gold**: Radiant amber and gold particle field (`@keyframes particle-text-drift-reverse`).
  - **Quantum Core**: Emerald and teal subatomic dot pattern with subtle pulse scaling (`@keyframes particle-text-pulse`).
- **Interactive CSS Sandbox**: State controls driven by radio inputs (`<input type="radio" name="particle-speed">`) allowing users to toggle animation drift velocity.
- **100% Accessible & Readable**: Text content remains accessible to screen readers while ensuring contrast across backgrounds.
- **Theme Adaptability & Motion Controls**: Supports light/dark theme adaptation (`@media (prefers-color-scheme)`) and reduced motion controls (`@media (prefers-reduced-motion: reduce)`).

## Usage

Include `style.css` and use semantic HTML:

```html
<!-- Primary Hero Headline -->
<h1 class="particle-text particle-text-cosmic">EASEMOTION</h1>

<!-- Cyberpunk Variant -->
<h2 class="particle-text particle-text-cyberpunk">NEON MATRIX</h2>
```

### Customization Variables

```css
:root {
  --particle-bg: #0b0f19;
  --particle-surface: #111827;
  --particle-cyan: #06b6d4;
  --particle-magenta: #ec4899;
  --particle-violet: #8b5cf6;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/66704-ease-particle-text/demo.html) directly in any modern web browser to view the particle text typography component offline.
