# Metallic Sheen Particles

A pure CSS/HTML decorative panel that combines a brushed-metal gradient
background, a slow diagonal light sheen sweep, and floating metallic
particles that drift and glint upward. No JavaScript, no canvas — just
`transform`/`opacity` keyframe animations for smooth, GPU-accelerated
motion.

## ✨ Features

- **Pure CSS / HTML** — no JS, no canvas, no external libraries
- **Hardware accelerated** — animations only touch `transform` and
  `opacity`, keeping them off the main thread and jank-free
- **Metallic Sheen category, Metallic Sheen style** — brushed-metal
  striped gradient + a moving diagonal highlight sweep across the surface
- **Ambient particle field** — 12 independently timed particles, each with
  its own position, size, drift, delay, and duration via CSS custom
  properties on each element (no repeated keyframes needed)
- **Dark mode compatible** — full palette swap via
  `prefers-color-scheme: dark`
- **Accessible** — decorative layers are `aria-hidden`, panel is labeled
  for assistive tech, and `prefers-reduced-motion` freezes all motion into
  a static equivalent
- **Fully responsive** — panel padding, radius, and type scale adapt for
  mobile

## 📁 Files

| File | Purpose |
|---|---|
| `demo.html` | Standalone showcase page with the metallic panel + particles |
| `style.css` | All styling, gradients, and particle/sheen animation logic |
| `README.md` | This file |

## 🚀 Usage

1. Include `style.css` in your page `<head>`.
2. Add the panel markup:

```html
<section class="em-metal-panel" aria-label="Decorative metallic sheen panel">

  <div class="em-metal-sheen" aria-hidden="true"></div>

  <div class="em-particles" aria-hidden="true">
    <span class="em-particle" style="--em-x:8%; --em-size:6px; --em-delay:0s; --em-dur:7s; --em-drift:26px;"></span>
    <!-- repeat with varied --em-x / --em-size / --em-delay / --em-dur / --em-drift -->
  </div>

  <div class="em-metal-content">
    <p class="em-metal-eyebrow">Brushed Titanium</p>
    <h2 class="em-metal-title">Metallic Sheen</h2>
    <p class="em-metal-copy">Your copy here.</p>
  </div>

</section>
```

3. Each `.em-particle` is configured entirely with inline custom
   properties — no extra CSS classes or keyframes needed per particle:

| Variable | Purpose |
|---|---|
| `--em-x` | Horizontal position (e.g. `35%`) |
| `--em-size` | Particle diameter (e.g. `4px`) |
| `--em-delay` | Animation start offset, staggers particles |
| `--em-dur` | Full float-cycle duration |
| `--em-drift` | Horizontal drift distance as it rises |

Add or remove `<span class="em-particle">` elements to change particle
density — more particles = denser effect, with no JS required.

## 🎛️ CSS Custom Properties

Global theme variables, overridable on `:root` or a scoped parent:

```css
:root {
  --em-page-bg: #eef0f4;         /* page background (light mode) */
  --em-page-text: #1a1c22;       /* page text (light mode) */
  --em-page-text-dim: #5b5f6b;   /* muted page text (light mode) */

  --em-metal-1: #3a3d45;         /* darkest metal gradient stop */
  --em-metal-2: #6b6f7a;         /* mid metal gradient stop */
  --em-metal-3: #9599a3;         /* lightest metal gradient stop */
  --em-metal-edge: rgba(255,255,255,0.35); /* panel border/inset highlight */

  --em-particle-color: rgba(255,255,255,0.9); /* particle glow color */
  --em-sheen-color: rgba(255,255,255,0.55);   /* sheen sweep highlight color */

  --em-radius: 20px;             /* panel corner radius */
  --em-dur-sheen: 5s;            /* sheen sweep cycle duration */
}
```

Dark mode automatically overrides the palette (background, metal tones,
particle/sheen brightness) inside a `prefers-color-scheme: dark` block —
no separate dark-mode class needed.

## 🧩 Key Classes

| Class | Purpose |
|---|---|
| `.em-metal-panel` | Panel container; brushed-metal gradient background |
| `.em-metal-sheen` | Diagonal light sweep layer, animates across the panel |
| `.em-particles` | Absolute-positioned particle container |
| `.em-particle` | Single glinting particle; behavior driven by inline CSS variables |
| `.em-metal-content` | Foreground text content, sits above the effect layers |

## ♿ Accessibility Notes

- `.em-metal-sheen` and `.em-particles` are purely decorative and marked
  `aria-hidden="true"` so screen readers skip them entirely.
- The panel itself carries a descriptive `aria-label` summarizing the
  decorative content for assistive technology users.
- Under `prefers-reduced-motion: reduce`, the sheen sweep and all particle
  animations are disabled and replaced with a static, low-opacity resting
  frame — the visual identity remains without any motion.
- No interactive controls exist in this component, so no keyboard focus
  management is required; it's safe to drop into any layout.

## ⚡ Performance Notes

- Every animation exclusively animates `transform` and `opacity`, which
  browsers can composite on the GPU without triggering layout or paint.
- `will-change: transform` (and `opacity` where relevant) hints the
  browser to promote the sheen and particle layers to their own
  compositor layers.
- Particle timing is staggered via `animation-delay` rather than JS
  `setTimeout`, so there is zero scripting overhead regardless of
  particle count.

## 📱 Responsive Behavior

- Panel padding, minimum height, and border radius shrink under the
  `560px` breakpoint.
- Particle positions are percentage-based (`--em-x`) and the sheen sweep
  uses percentage insets, so the effect scales correctly at any panel
  width without adjustment.

## 🌐 Browser Support

Relies on standard, widely-supported CSS: CSS custom properties, gradients
(`linear-gradient`, `repeating-linear-gradient`, `radial-gradient`),
`transform3d`/`translate3d`, `prefers-color-scheme`, and
`prefers-reduced-motion`. Works in all modern evergreen browsers.