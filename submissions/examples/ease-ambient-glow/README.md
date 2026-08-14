# Fluid Ambient Mouse-Glow Grid (`ease-ambient-glow`)

A modern interactive card grid that creates a fluid ambient glow effect following the user's cursor. Each card responds independently with a dynamic radial spotlight and illuminated border, producing a tactile glassmorphism-inspired dashboard experience.

## Functional Composition

### Cursor-Following Ambient Glow

Each card tracks the user's cursor position and generates a smooth radial spotlight that moves in real time beneath the content layer.

### Dynamic Border Illumination

The border highlight responds to cursor movement, creating a subtle reactive edge glow that enhances depth and visual feedback.

### Glassmorphism Layout

Cards use translucent backgrounds, backdrop blur filters, and layered lighting effects to achieve a modern dashboard aesthetic.

### GPU-Accelerated Motion

The interaction relies on CSS gradients, transforms, and lightweight JavaScript pointer tracking to maintain smooth performance without complex animation libraries.

## Features

* Real-time cursor tracking
* Fluid ambient spotlight effect
* Dynamic border glow
* Glassmorphism styling
* Responsive grid layout
* Lightweight implementation
* Easy customization through CSS variables
* Suitable for dashboards, profile cards, feature grids, and asset directories

## Directory Tree Manifest

* `demo.html` — Standalone demonstration interface.
* `style.css` — Core styling and animation definitions.
* `README.md` — Feature documentation.

## Usage

```html
<div class="ease-ambient-glow-grid">

  <div class="ease-glow-card">
    <h3>Card Title</h3>
    <p>Card description.</p>
  </div>

</div>
```

The glow automatically follows the cursor when hovering over individual cards.

## Browser Support

Modern browsers supporting:

* CSS Custom Properties
* CSS Radial Gradients
* Backdrop Filter
* Flexbox/Grid Layout
* ES6 JavaScript

## Why It Fits EaseMotion CSS

* Human-readable class names
* Animation-first interaction design
* Lightweight and reusable
* Easy to compose with existing layouts
* Modern motion-focused user experience

## By

Pari Dubey
