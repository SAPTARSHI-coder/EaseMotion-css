# CSS Elastic-Slide Progress Bar for Gaming Hub Layouts

A lightweight, responsive, accessible, and high-performance **CSS Elastic-Slide Progress Bar** component system created for gaming hubs, ultimate ability chargers, matchmaking meters, and cyberpunk dashboards.

---

## Overview

The **CSS Elastic-Slide Progress Bar** component provides fluid energy meters styled with spring cubic-bezier sliding fill transitions (`cubic-bezier(0.68, -0.6, 0.32, 1.6)`), elastic head indicators, and glowing ambient fill tracks.

Built using **Zero JavaScript**, interactive charge adjustment (25%, 50%, 75%, 100%) relies entirely on pure CSS3 radio button state controls (`:checked`), maintaining accessibility and zero runtime framework overhead.

---

## Features

- 🎮 **Gaming Hub Theme**: Cyberpunk aesthetics with plasma pink (`#ff0055`), electric purple (`#9d4edd`), and cyan (`#00f3ff`) glow accents.
- 🚀 **Elastic-Slide Micro-Interactions**: Smooth spring elastic cubic-bezier fill transitions and bouncy indicator head positioning.
- ⚡ **Pure CSS State Logic**: Zero JavaScript level switching driven by hidden radio inputs and `:checked` sibling selectors.
- 💎 **Glassmorphism Panels**: Translucent dark container backgrounds with backdrop blur filters (`backdrop-filter: blur(16px)`).
- 🎨 **CSS Custom Properties**: Centralized `:root` design tokens for colors, fonts, glow effects, and transitions.
- ♿ **Accessibility (a11y)**: Full support for `:focus-visible` outline rings, ARIA progress roles (`role="progressbar"`), and screen reader labels.
- 🎬 **Prefers Reduced Motion**: Complete animation suppression when system `prefers-reduced-motion: reduce` is enabled.
- 📱 **Fully Responsive**: Mobile, tablet, and desktop grid layouts optimized across all viewport dimensions.

---

## Folder Structure

```text
submissions/examples/css-elastic-slide-progress-bar/
├── demo.html    # Interactive HTML showcase page
├── style.css    # Pure CSS stylesheet containing all progress animations & tokens
└── README.md    # Component documentation
```

---

## Installation

No build step or package installation is required.

Simply copy `style.css` or include it in your HTML `<head>`:

```html
<link rel="stylesheet" href="path/to/style.css">
```

---

## HTML Example

```html
<div class="progress-track" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" aria-label="Ultimate Charge">
  <div class="progress-fill" style="width: 75%;">
    <span class="elastic-head">
      <span class="head-core"></span>
    </span>
  </div>
</div>
```

---

## CSS Variables

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--bg-primary` | `#07090f` | Deep obsidian background color |
| `--accent-plasma` | `#ff0055` | Plasma pink primary accent color |
| `--accent-purple` | `#9d4edd` | Electric purple secondary accent |
| `--panel-bg` | `rgba(15, 21, 35, 0.78)` | Translucent glassmorphism card fill |
| `--font-heading` | `'Orbitron', sans-serif` | Futuristic gaming heading font |
| `--font-body` | `'Rajdhani', sans-serif` | Tactical body typography |

---

## Customization

To modify theme colors, override the CSS custom properties in your stylesheet:

```css
:root {
  --accent-plasma: #ffaa00; /* Custom Amber Accent */
  --accent-purple: #00ff88; /* Custom Emerald Accent */
}
```

---

## Accessibility

- Visible keyboard focus rings styled with `:focus-visible`.
- Standard ARIA progress bar semantics (`role="progressbar"`, `aria-valuenow`).
- Semantic HTML elements (`<header>`, `<main>`, `<section>`, `<label>`).

---

## Responsive Behaviour

- **Desktop (> 900px)**: Full horizontal layout with multi-column meter cards.
- **Tablet (600px - 900px)**: Auto-wrapping charge control triggers and adaptive card padding.
- **Mobile (< 600px)**: Single column stacked layout with full-width action buttons.

---

## Browser Compatibility

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+
