# Magnetic Hover Effect Component (`ease-magnetic-hover`)

A pure HTML + Vanilla CSS magnetic hover pop-out elevation component featuring bouncy cubic-bezier physics (`cubic-bezier(0.34, 1.56, 0.64, 1)`), scale & translateY transforms (`scale(1.1) translateY(-5px)`), focus-visible keyboard support, CSS custom properties API, dark/light theme adaptation, and reduced motion accessibility fallbacks.

> **Note**: As cursor-tracking attraction requires JavaScript, this pure-CSS component acts as a high-fidelity magnetic pop-out elevation approximation that responds seamlessly to mouse hover and keyboard focus without JS.

## Features

- **Pure HTML + CSS**: 100% responsive magnetic hover interaction without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **Bouncy Spring Physics**: Uses custom timing curve `cubic-bezier(0.34, 1.56, 0.64, 1)` to simulate tactile spring feedback on hover and focus.
- **GPU Accelerated**: Utilizes composite properties (`transform`, `box-shadow`) to maintain 60fps interaction without layout reflows.
- **3 Intensity Variants**:
  - Subtle Magnetic (`.ease-magnetic-subtle`) &rarr; `scale(1.05) translateY(-3px)`
  - Standard Magnetic (Default) &rarr; `scale(1.1) translateY(-5px)`
  - Ultra Bouncy (`.ease-magnetic-bouncy`) &rarr; `scale(1.15) translateY(-8px)`
- **100% Accessible**: Full support for `:focus-visible` keyboard navigation and `@media (prefers-reduced-motion: reduce)` fallbacks (`transform: none !important; transition: none !important;`).
- **Theme Adaptability & Motion Controls**: Supports dark space surface default presentation, light theme adaptation (`@media (prefers-color-scheme)`), and reduced motion controls.

## Usage

Include `style.css` and use semantic HTML:

```html
<!-- Primary Magnetic Button -->
<button
  type="button"
  class="ease-magnetic-hover magnetic-btn magnetic-btn-primary"
>
  <span>Explore Workspace</span>
</button>

<!-- Subtle Magnetic Navigation Link -->
<a href="#" class="ease-magnetic-hover ease-magnetic-subtle magnetic-link">
  <span>Dock Link</span>
</a>

<!-- Ultra Bouncy Feature Card -->
<div class="ease-magnetic-hover ease-magnetic-bouncy magnetic-card">
  <h3>Interactive Surface Card</h3>
</div>
```

### Customization Variables

```css
.ease-magnetic-hover {
  --magnetic-scale: 1.12;
  --magnetic-translate-y: -6px;
  --magnetic-duration: 0.3s;
  --magnetic-timing: cubic-bezier(0.34, 1.56, 0.64, 1);
  --magnetic-shadow: 0 16px 32px rgba(2, 132, 199, 0.25);
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/71711-ease-magnetic-hover/demo.html) directly in any modern web browser to interact with the magnetic hover component offline.
