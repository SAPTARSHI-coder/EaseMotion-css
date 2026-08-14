# CSS Float-Drift Progress Bar for Gaming Hub Layouts

A lightweight, responsive, accessible, and high-performance **CSS Float-Drift Progress Bar** component system created for gaming hubs, esports rank progression, and cyberpunk status dashboards.

---

## Overview

The **CSS Float-Drift Progress Bar** component provides visual rank progression meters enhanced with smooth float-drift vertical levitation keyframe micro-interactions (`@keyframes float-drift-head-anim`), floating particle glow indicators, and glassmorphism panel styling.

Built using **Zero JavaScript**, interactive tier selection (25%, 50%, 75%, 100%) relies strictly on pure CSS3 radio button state controls (`:checked`), maintaining accessibility and zero runtime framework overhead.

---

## Features

- 🎮 **Gaming Hub Theme**: Cyberpunk dark aesthetics with neon cyan (`#00f3ff`), emerald green (`#00ff66`), and purple (`#a855f7`) glow accents.
- 🛸 **Float-Drift Micro-Interactions**: Active indicator head levitates with continuous keyframe float-drift motion.
- ⚡ **Pure CSS State Logic**: Zero JavaScript tier switching driven by hidden radio inputs and `:checked` sibling selectors.
- 💎 **Glassmorphism Panels**: Translucent dark container backgrounds with backdrop blur filters (`backdrop-filter: blur(16px)`).
- 🎨 **CSS Custom Properties**: Centralized `:root` design tokens for colors, fonts, glow effects, and transitions.
- ♿ **Accessibility (a11y)**: Full support for `:focus-visible` outline rings, ARIA progress roles (`role="progressbar"`), and screen reader labels.
- 🎬 **Prefers Reduced Motion**: Complete animation suppression when system `prefers-reduced-motion: reduce` is enabled.
- 📱 **Fully Responsive**: Mobile, tablet, and desktop grid layouts optimized across all viewport dimensions.

---

## Folder Structure

```text
submissions/examples/css-float-drift-progress-bar/
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
<div class="progress-track" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" aria-label="Rank Progress">
  <div class="progress-fill" style="width: 75%;">
    <span class="float-drift-head">
      <span class="head-particle"></span>
    </span>
  </div>
</div>
```

---

## CSS Variables

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--bg-primary` | `#06090e` | Deep obsidian background color |
| `--accent-cyan` | `#00f3ff` | Cyan primary accent color |
| `--accent-green` | `#00ff66` | Emerald green secondary accent |
| `--panel-bg` | `rgba(14, 20, 32, 0.78)` | Translucent glassmorphism card fill |
| `--font-heading` | `'Orbitron', sans-serif` | Futuristic gaming heading font |
| `--font-body` | `'Rajdhani', sans-serif` | Tactical body typography |

---

## Customization

To modify theme colors, override the CSS custom properties in your stylesheet:

```css
:root {
  --accent-cyan: #ff7700; /* Custom Orange Accent */
  --accent-green: #00e5ff; /* Custom Aqua Accent */
}
```

---

## Accessibility

- Visible keyboard focus rings styled with `:focus-visible`.
- Standard ARIA progress bar semantics (`role="progressbar"`, `aria-valuenow`).
- Semantic HTML tags (`<header>`, `<main>`, `<section>`, `<label>`).

---

## Responsive Behaviour

- **Desktop (> 900px)**: Full horizontal header layout and multi-column meter grid.
- **Tablet (600px - 900px)**: Auto-wrapping tier control triggers and adaptive card padding.
- **Mobile (< 600px)**: Single column stacked layout with full-width action buttons.

---

## Browser Compatibility

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+
