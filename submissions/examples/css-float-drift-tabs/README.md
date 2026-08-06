# CSS Float-Drift Tabs for Fintech Dashboard Layouts

A lightweight, responsive, accessible, and high-performance **CSS Float-Drift Tabs** component system created for fintech dashboards, multi-currency treasury accounts, P2P lending portals, and liquidity pool managers.

---

## Overview

The **CSS Float-Drift Tabs** component provides multi-currency banking navigation tabs enhanced with vertical float-drift levitation keyframe micro-interactions (`@keyframes float-drift-active`), glowing cyan node indicators, and glassmorphism panel styling.

Built using **Zero JavaScript**, tab switching and panel visibility depend strictly on pure CSS3 radio button state controls (`:checked`), maintaining accessibility and zero runtime framework overhead.

---

## Features

- 💼 **Fintech Dashboard Theme**: Dark multi-currency banking aesthetic with neon cyan (`#00f3ff`), blue (`#38bdf8`), and purple (`#a855f7`) accents.
- 🛸 **Float-Drift Micro-Interactions**: Active tab node levitates with continuous keyframe float-drift motion.
- ⚡ **Pure CSS State Logic**: Zero JavaScript tab switching using hidden radio inputs and `:checked` sibling selectors.
- 💎 **Glassmorphism Panels**: Translucent dark container backgrounds with backdrop blur filters (`backdrop-filter: blur(16px)`).
- 🎨 **CSS Custom Properties**: Centralized `:root` design tokens for colors, fonts, glow effects, and transitions.
- ♿ **Accessibility (a11y)**: Full support for `:focus-visible` outline rings, ARIA landmark roles (`role="tab"`, `role="tabpanel"`), and screen reader labels.
- 🎬 **Prefers Reduced Motion**: Complete animation suppression when system `prefers-reduced-motion: reduce` is enabled.
- 📱 **Fully Responsive**: Mobile, tablet, and desktop grid layouts optimized across all viewport dimensions.

---

## Folder Structure

```text
submissions/examples/css-float-drift-tabs/
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
  <input type="radio" name="float-tabs" id="tab-accounts" class="tab-radio" checked>
  <input type="radio" name="float-tabs" id="tab-loans" class="tab-radio">

  <!-- Navigation Header -->
  <nav class="tabs-nav" aria-label="Banking Navigation">
    <div class="tabs-list" role="tablist">
      <label for="tab-accounts" class="tab-item" tabindex="0" role="tab">
        <span class="float-drift-node">01</span>
        <span class="tab-label">Global Accounts</span>
      </label>
    </div>
  </nav>
</main>
```

---

## CSS Variables

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--bg-primary` | `#060910` | Deep obsidian background color |
| `--accent-cyan` | `#00f3ff` | Neon cyan primary accent color |
| `--accent-blue` | `#38bdf8` | Electric blue secondary accent |
| `--panel-bg` | `rgba(14, 20, 32, 0.78)` | Translucent glassmorphism card fill |
| `--font-sans` | `'Inter', sans-serif` | Clean UI sans-serif font |
| `--font-mono` | `'JetBrains Mono', monospace` | Financial ticker monospace font |

---

## Customization

To modify theme colors, override the CSS custom properties in your stylesheet:

```css
:root {
  --accent-cyan: #ffaa00; /* Custom Amber Accent */
  --accent-blue: #00ffaa; /* Custom Emerald Accent */
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
