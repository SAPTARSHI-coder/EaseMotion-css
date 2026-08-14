# CSS Bounce-Pulse Tabs for Fintech Dashboard Layouts

A lightweight, responsive, accessible, and high-performance **CSS Bounce-Pulse Tabs** component system designed for fintech dashboards, investment portals, corporate credit cards, and financial analytics applications.

---

## Overview

The **CSS Bounce-Pulse Tabs** component provides sleek portfolio navigation tabs enhanced with elastic spring bounce scale entrances (`cubic-bezier(0.34, 1.56, 0.64, 1)`), glowing bounce pulse feedback rings (`@keyframes tab-bounce-pulse`), and glassmorphism card styling.

Built using **Zero JavaScript**, tab switching and panel visibility depend entirely on pure CSS3 radio button state controls (`:checked`), maintaining accessibility and zero runtime framework overhead.

---

## Features

- 💼 **Fintech Dashboard Theme**: Dark modern wealth management aesthetic with electric blue (`#38bdf8`), emerald (`#10b981`), and purple (`#a855f7`) accents.
- 🏀 **Bounce-Pulse Micro-Interactions**: Active tab indicator pops with spring cubic-bezier scale bounce and glowing pulse ring.
- ⚡ **Pure CSS State Logic**: Zero JavaScript tab switching using hidden radio inputs and `:checked` sibling selectors.
- 💎 **Glassmorphism Panels**: Translucent dark container backgrounds with backdrop blur filters (`backdrop-filter: blur(16px)`).
- 🎨 **CSS Custom Properties**: Centralized `:root` design tokens for colors, fonts, glow effects, and transitions.
- ♿ **Accessibility (a11y)**: Full support for `:focus-visible` outline rings, ARIA landmark roles (`role="tab"`, `role="tabpanel"`), and screen reader labels.
- 🎬 **Prefers Reduced Motion**: Complete animation suppression when system `prefers-reduced-motion: reduce` is enabled.
- 📱 **Fully Responsive**: Mobile, tablet, and desktop grid layouts optimized across all viewport dimensions.

---

## Folder Structure

```text
submissions/examples/css-bounce-pulse-tabs/
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
  <input type="radio" name="fintech-tabs" id="tab-overview" class="tab-radio" checked>
  <input type="radio" name="fintech-tabs" id="tab-crypto" class="tab-radio">

  <!-- Tabs Navigation Header -->
  <nav class="tabs-nav" aria-label="Portfolio Navigation">
    <div class="tabs-list" role="tablist">
      <label for="tab-overview" class="tab-item" tabindex="0" role="tab">
        <span class="tab-label">Overview</span>
        <span class="bounce-dot"></span>
      </label>
    </div>
  </nav>
</main>
```

---

## CSS Variables

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--bg-primary` | `#080b12` | Deep obsidian background color |
| `--accent-blue` | `#38bdf8` | Electric blue primary accent color |
| `--accent-emerald` | `#10b981` | Emerald green secondary accent |
| `--panel-bg` | `rgba(16, 22, 34, 0.78)` | Translucent glassmorphism card fill |
| `--font-sans` | `'Inter', sans-serif` | Clean UI sans-serif font |
| `--font-mono` | `'JetBrains Mono', monospace` | Financial ticker monospace font |

---

## Customization

To modify theme colors, override the CSS custom properties in your stylesheet:

```css
:root {
  --accent-blue: #00f3ff; /* Custom Cyan Accent */
  --accent-emerald: #22c55e; /* Custom Mint Accent */
}
```

---

## Accessibility

- Visible keyboard focus rings styled with `:focus-visible`.
- Standard ARIA tab panel semantics (`role="tab"`, `role="tabpanel"`).
- Semantic HTML tags (`<header>`, `<main>`, `<nav>`, `<article>`).

---

## Responsive Behaviour

- **Desktop (> 800px)**: Horizontal tab bar with 3-column metric grid.
- **Tablet & Mobile (< 800px)**: Vertical tab layout with single-column metric grid.

---

## Browser Compatibility

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+
