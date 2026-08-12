# CSS Glitch-Flicker Carousel for Fintech Dashboard Layouts

A lightweight, responsive, accessible, and high-performance **CSS Glitch-Flicker Carousel** component system designed for fintech dashboards, crypto exchange tickers, forex analytics portals, and financial market feeds.

---

## Overview

The **CSS Glitch-Flicker Carousel** component presents financial assets and market analytics cards enhanced with chromatic text shadow glitch keyframe micro-interactions (`@keyframes glitch-flicker-anim`), live status indicator pulses, and glassmorphism panel styling.

Built using **Zero JavaScript**, slide navigation is driven strictly by pure CSS3 radio button state controls (`:checked`), maintaining accessibility and zero runtime framework overhead.

---

## Features

- 💹 **Fintech Dashboard Theme**: Dark modern financial styling with electric blue (`#38bdf8`), cyan (`#00f3ff`), and green (`#22c55e`) accents.
- ⚡ **Glitch-Flicker Micro-Interactions**: Chromatic text shadow distortion and digital flicker keyframes on active slide categories.
- 🚀 **Pure CSS State Logic**: Zero JavaScript slide switching using hidden radio inputs and CSS transform translate track movements.
- 💎 **Glassmorphism Panels**: Translucent dark container backgrounds with backdrop blur filters (`backdrop-filter: blur(16px)`).
- 🎨 **CSS Custom Properties**: Centralized `:root` design tokens for colors, fonts, glow effects, and transitions.
- ♿ **Accessibility (a11y)**: Full support for `:focus-visible` outline rings, ARIA landmark roles (`role="tab"`, `role="tabpanel"`), and screen reader labels.
- 🎬 **Prefers Reduced Motion**: Complete animation suppression when system `prefers-reduced-motion: reduce` is enabled.
- 📱 **Fully Responsive**: Mobile, tablet, and desktop grid layouts optimized across all viewport dimensions.

---

## Folder Structure

```text
submissions/examples/css-glitch-flicker-carousel/
├── demo.html    # Interactive HTML showcase page
├── style.css    # Pure CSS stylesheet containing all carousel animations & tokens
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
<div class="carousel-track-wrapper">
  <div class="carousel-track">
    <article id="panel-1" class="carousel-slide" role="tabpanel">
      <div class="slide-card glass-card">
        <span class="card-category glitch-text">BLOCKCHAIN ASSETS</span>
        <h2>BITCOIN PRO // BTC-USD</h2>
        <span class="price-val">$94,850.20</span>
      </div>
    </article>
  </div>
</div>
```

---

## CSS Variables

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--bg-primary` | `#0a0d14` | Deep obsidian background color |
| `--accent-blue` | `#38bdf8` | Electric blue primary accent color |
| `--accent-cyan` | `#00f3ff` | Cyan secondary accent color |
| `--panel-bg` | `rgba(18, 24, 38, 0.78)` | Translucent glassmorphism card fill |
| `--font-sans` | `'Inter', sans-serif` | Clean UI sans-serif font |
| `--font-mono` | `'JetBrains Mono', monospace` | Financial ticker monospace font |

---

## Customization

To modify theme colors, override the CSS custom properties in your stylesheet:

```css
:root {
  --accent-blue: #a855f7; /* Custom Purple Accent */
  --accent-cyan: #3b82f6; /* Custom Blue Accent */
}
```

---

## Accessibility

- Visible keyboard focus rings styled with `:focus-visible`.
- Standard ARIA tab panel semantics (`role="tab"`, `role="tabpanel"`).
- Semantic HTML tags (`<header>`, `<main>`, `<nav>`, `<article>`).

---

## Responsive Behaviour

- **Desktop (> 768px)**: 3-column metric box grid with horizontal slide layout.
- **Tablet (600px - 768px)**: 2-column metric grid and adaptive container padding.
- **Mobile (< 600px)**: Single column metric grid with full-width action buttons.

---

## Browser Compatibility

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+
