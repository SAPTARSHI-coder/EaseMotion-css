# CSS Rotate-Fade Progress Bar for Gaming Hub Layouts

A lightweight, responsive, accessible, and high-performance **CSS Rotate-Fade Progress Bar** component system designed for gaming hubs, esports battle pass progression, level-up trackers, and futuristic gaming dashboards.

---

## Overview

The **CSS Rotate-Fade Progress Bar** component features dynamic progress fill meters enhanced with continuous rotating star/icon head indicators, glowing ambient neon fills, and fade pulse keyframe micro-interactions (`@keyframes rotate-fade-pulse`).

Built using **Zero JavaScript**, interactive progress simulation (25%, 50%, 75%, 100%) is accomplished strictly with pure CSS3 radio button state controls (`:checked`), maintaining accessibility and zero runtime framework overhead.

---

## Features

- 🎮 **Gaming Hub Theme**: Dark cyberpunk aesthetics with neon gold (`#ffd700`), cyan (`#00f3ff`), and magenta (`#ff0055`) glow accents.
- 🔄 **Rotate-Fade Micro-Interactions**: Rotating head indicator rings and smooth keyframe fade-pulse fill animations.
- ⚡ **Pure CSS State Logic**: Zero JavaScript level switching driven by hidden radio inputs and `:checked` sibling selectors.
- 💎 **Glassmorphism Panels**: Translucent dark container backgrounds with backdrop blur filters (`backdrop-filter: blur(16px)`).
- 🎨 **CSS Custom Properties**: Centralized `:root` design tokens for colors, fonts, glow effects, and transitions.
- ♿ **Accessibility (a11y)**: Full support for `:focus-visible` outline rings, ARIA roles (`role="progressbar"`), and keyboard navigation.
- 🎬 **Prefers Reduced Motion**: Complete animation suppression when system `prefers-reduced-motion: reduce` is requested.
- 📱 **Fully Responsive**: Mobile, tablet, and desktop grid layouts optimized across all viewport dimensions.

---

## Folder Structure

```text
submissions/examples/css-rotate-fade-progress-bar/
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
<div class="progress-track" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" aria-label="Battle Pass XP">
  <div class="progress-fill" style="width: 75%;">
    <span class="rotate-head">
      <svg class="head-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    </span>
  </div>
</div>
```

---

## CSS Variables

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--bg-primary` | `#06080d` | Deep obsidian background color |
| `--accent-gold` | `#ffd700` | Gold primary accent color |
| `--accent-cyan` | `#00f3ff` | Cyan secondary accent color |
| `--panel-bg` | `rgba(14, 20, 32, 0.75)` | Translucent glassmorphism card fill |
| `--font-heading` | `'Orbitron', sans-serif` | Futuristic gaming heading font |
| `--font-body` | `'Rajdhani', sans-serif` | Tactical body typography |

---

## Customization

To modify theme colors, override the CSS custom properties in your stylesheet:

```css
:root {
  --accent-gold: #ff007f; /* Custom Rose Accent */
  --accent-cyan: #00ffaa; /* Custom Emerald Accent */
}
```

---

## Accessibility

- Visible keyboard focus rings styled with `:focus-visible`.
- Standard ARIA progress bar semantics (`role="progressbar"`, `aria-valuenow`).
- Semantic HTML tags (`<header>`, `<main>`, `<section>`, `<label>`).

---

## Responsive Behaviour

- **Desktop (> 900px)**: Full side-by-side header meta and multi-column meter grid layout.
- **Tablet (600px - 900px)**: Auto-wrapping level control buttons and responsive card padding.
- **Mobile (< 600px)**: Single column stacked layout with full-width action triggers.

---

## Browser Compatibility

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+
