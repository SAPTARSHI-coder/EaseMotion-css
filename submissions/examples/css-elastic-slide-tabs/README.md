# CSS Elastic-Slide Tabs for Fintech Dashboard Layouts

A lightweight, responsive, accessible, and high-performance **CSS Elastic-Slide Tabs** component system designed for fintech trading dashboards, order books, trade execution logs, and market analytics portals.

---

## Overview

The **CSS Elastic-Slide Tabs** component delivers smooth tab navigation featuring a spring elastic sliding backdrop indicator (`cubic-bezier(0.68, -0.55, 0.265, 1.55)`), glowing cyan accents, and glassmorphism panel styling.

Built using **Zero JavaScript**, active tab indicator sliding and panel switching are driven entirely by pure CSS3 radio button state controls (`:checked`), maintaining accessibility and zero runtime framework overhead.

---

## Features

- 📈 **Fintech Trading Theme**: Dark algorithmic trading desk styling with neon cyan (`#00f3ff`), electric blue (`#38bdf8`), and green (`#22c55e`) accents.
- 🚀 **Elastic-Slide Micro-Interactions**: Active tab indicator glides with spring elastic cubic-bezier motion (`transform: translateX(...)`).
- ⚡ **Pure CSS State Logic**: Zero JavaScript tab switching using hidden radio inputs and `:checked` sibling selectors.
- 💎 **Glassmorphism Panels**: Translucent dark container backgrounds with backdrop blur filters (`backdrop-filter: blur(16px)`).
- 🎨 **CSS Custom Properties**: Centralized `:root` design tokens for colors, fonts, glow effects, and transitions.
- ♿ **Accessibility (a11y)**: Full support for `:focus-visible` outline rings, ARIA landmark roles (`role="tab"`, `role="tabpanel"`), and screen reader labels.
- 🎬 **Prefers Reduced Motion**: Complete animation suppression when system `prefers-reduced-motion: reduce` is enabled.
- 📱 **Fully Responsive**: Mobile, tablet, and desktop grid layouts optimized across all viewport dimensions.

---

## Folder Structure

```text
submissions/examples/css-elastic-slide-tabs/
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
  <input type="radio" name="elastic-tabs" id="tab-analytics" class="tab-radio" checked>
  <input type="radio" name="elastic-tabs" id="tab-orderbook" class="tab-radio">

  <!-- Navigation Header -->
  <nav class="tabs-nav" aria-label="Trading Desk Navigation">
    <div class="tabs-list" role="tablist">
      <label for="tab-analytics" class="tab-item" tabindex="0" role="tab">
        <span class="tab-label">Market Analytics</span>
      </label>
      <label for="tab-orderbook" class="tab-item" tabindex="0" role="tab">
        <span class="tab-label">Order Book</span>
      </label>
      <span class="elastic-slide-bar"></span>
    </div>
  </nav>
</main>
```

---

## CSS Variables

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--bg-primary` | `#090c15` | Deep obsidian background color |
| `--accent-cyan` | `#00f3ff` | Neon cyan primary accent color |
| `--accent-blue` | `#38bdf8` | Electric blue secondary accent |
| `--panel-bg` | `rgba(17, 24, 39, 0.78)` | Translucent glassmorphism card fill |
| `--font-sans` | `'Inter', sans-serif` | Clean UI sans-serif font |
| `--font-mono` | `'JetBrains Mono', monospace` | Financial ticker monospace font |

---

## Customization

To modify theme colors, override the CSS custom properties in your stylesheet:

```css
:root {
  --accent-cyan: #ff007f; /* Custom Rose Accent */
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

- **Desktop (> 768px)**: Horizontal tab bar with sliding indicator and 3-column metric grid.
- **Tablet & Mobile (< 768px)**: Stacked vertical tab navigation with single-column metric layout.

---

## Browser Compatibility

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+
