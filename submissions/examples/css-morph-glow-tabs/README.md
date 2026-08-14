# CSS Morph-Glow Tabs for Fintech Dashboard Layouts

A lightweight, responsive, accessible, and high-performance **CSS Morph-Glow Tabs** component system created for fintech dashboards, asset allocation heatmaps, P&L analytics, and financial security vaults.

---

## Overview

The **CSS Morph-Glow Tabs** component provides sleek financial portal navigation tabs enhanced with morphing border geometry shifts (`border-radius: 20px 8px 20px 8px` &larr;&rarr; `8px 20px 8px 20px`), glowing ambient backdrop pulse keyframes (`@keyframes morph-glow-pulse`), and glassmorphism panel styling.

Built using **Zero JavaScript**, tab switching and panel visibility depend strictly on pure CSS3 radio button state controls (`:checked`), maintaining accessibility and zero runtime framework overhead.

---

## Features

- 💼 **Fintech Dashboard Theme**: Dark modern analytics aesthetic with electric purple (`#a855f7`), cyan (`#00f3ff`), and green (`#22c55e`) accents.
- 🔮 **Morph-Glow Micro-Interactions**: Active tab item morphs border geometry while pulsating ambient glowing backdrops.
- ⚡ **Pure CSS State Logic**: Zero JavaScript tab switching using hidden radio inputs and `:checked` sibling selectors.
- 💎 **Glassmorphism Panels**: Translucent dark container backgrounds with backdrop blur filters (`backdrop-filter: blur(16px)`).
- 🎨 **CSS Custom Properties**: Centralized `:root` design tokens for colors, fonts, glow effects, and transitions.
- ♿ **Accessibility (a11y)**: Full support for `:focus-visible` outline rings, ARIA landmark roles (`role="tab"`, `role="tabpanel"`), and screen reader labels.
- 🎬 **Prefers Reduced Motion**: Complete animation suppression when system `prefers-reduced-motion: reduce` is enabled.
- 📱 **Fully Responsive**: Mobile, tablet, and desktop grid layouts optimized across all viewport dimensions.

---

## Folder Structure

```text
submissions/examples/css-morph-glow-tabs/
├── demo.html    # Interactive HTML showcase page
├── style.css    # Pure CSS stylesheet containing all tab animations & tokens
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
<main class="tabs-section">
  <!-- Radio Control Triggers -->
  <input type="radio" name="morph-tabs" id="tab-allocation" class="tab-radio" checked>
  <input type="radio" name="morph-tabs" id="tab-heatmap" class="tab-radio">

  <!-- Navigation Header -->
  <nav class="tabs-nav" aria-label="Analytics Navigation">
    <div class="tabs-list" role="tablist">
      <label for="tab-allocation" class="tab-item" tabindex="0" role="tab">
        <span class="tab-label">Asset Allocation</span>
      </label>
    </div>
  </nav>
</main>
```

---

## CSS Variables

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--bg-primary` | `#070a12` | Deep obsidian background color |
| `--accent-purple` | `#a855f7` | Electric purple primary accent color |
| `--accent-cyan` | `#00f3ff` | Cyan secondary accent color |
| `--panel-bg` | `rgba(15, 22, 36, 0.78)` | Translucent glassmorphism card fill |
| `--font-sans` | `'Inter', sans-serif` | Clean UI sans-serif font |
| `--font-mono` | `'JetBrains Mono', monospace` | Financial ticker monospace font |

---

## Customization

To modify theme colors, override the CSS custom properties in your stylesheet:

```css
:root {
  --accent-purple: #3b82f6; /* Custom Blue Accent */
  --accent-cyan: #ff007f; /* Custom Rose Accent */
}
```

---

## Accessibility

- Visible keyboard focus rings styled with `:focus-visible`.
- Standard ARIA tab panel semantics (`role="tab"`, `role="tabpanel"`).
- Semantic HTML tags (`<header>`, `<main>`, `<nav>`, `<article>`).

---

## Responsive Behaviour

- **Desktop (> 768px)**: Horizontal tab bar with 3-column metric grid.
- **Tablet & Mobile (< 768px)**: Vertical tab layout with single-column metric grid.

---

## Browser Compatibility

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+
