# CSS Float-Drift Stepper for Gaming Hub Layouts

A lightweight, responsive, accessible, and high-performance **CSS Float-Drift Stepper** component designed for gaming hubs, esports tournament portals, cybernetic quest configuration interfaces, and futuristic dashboards.

---

## Overview

The **CSS Float-Drift Stepper** component delivers a multi-phase wizard interface enhanced with smooth floating-drift keyframe micro-interactions, cybernetic glow accents, diamond node indicators, and glassmorphism panel styling. 

Built using **Zero JavaScript**, the step navigation and panel toggling rely entirely on pure CSS3 HTML radio button state controls (`:checked`), maintaining accessibility and zero runtime framework overhead.

---

## Features

- 🎮 **Gaming Hub Theme**: Dark cyberpunk aesthetics with neon cyan (`#00f3ff`), hot magenta (`#ff0055`), and diamond node geometry.
- 🛸 **Float-Drift Micro-Interactions**: Active step indicators levitate with continuous, smooth keyframe float-drift motion (`@keyframes float-drift-active`).
- ⚡ **Pure CSS State Logic**: Zero JavaScript step switching driven by hidden radio inputs and `:checked` sibling selectors.
- 💎 **Glassmorphism Panels**: Translucent dark backgrounds with backdrop blur filters (`backdrop-filter: blur(16px)`).
- 🎨 **CSS Custom Properties**: Centralized `:root` design tokens for colors, fonts, glow effects, and transitions.
- ♿ **Accessibility (a11y)**: Full support for `focus-visible` outline indicators, standard ARIA roles (`tabindex="0"`, `role="tab"`, `role="tabpanel"`), and screen reader labels.
- 🎬 **Prefers Reduced Motion**: Complete animation suppression when system `prefers-reduced-motion: reduce` is enabled.
- 📱 **Fully Responsive**: Adapts seamlessly across desktop monitors, tablets, and mobile devices.

---

## Folder Structure

```text
submissions/examples/css-float-drift-stepper/
├── demo.html    # Interactive HTML showcase page
├── style.css    # Pure CSS stylesheet containing all stepper animations & tokens
└── README.md    # Component documentation
```

---

## Usage

Include `style.css` in your HTML `<head>`:

```html
<link rel="stylesheet" href="path/to/style.css">
```

---

## HTML Example

```html
<main class="stepper-section">
  <!-- Radio Control Triggers -->
  <input type="radio" name="stepper-control" id="step-1" class="stepper-radio" checked>
  <input type="radio" name="stepper-control" id="step-2" class="stepper-radio">

  <!-- Stepper Nav Header -->
  <nav class="stepper-nav" aria-label="Quest Steps">
    <ul class="stepper-list">
      <li class="stepper-item">
        <label for="step-1" class="stepper-label" tabindex="0">
          <div class="node-wrapper">
            <span class="float-drift-node">01</span>
          </div>
          <span class="step-title">Avatar</span>
        </label>
      </li>
      <li class="stepper-item">
        <label for="step-2" class="stepper-label" tabindex="0">
          <div class="node-wrapper">
            <span class="float-drift-node">02</span>
          </div>
          <span class="step-title">Class</span>
        </label>
      </li>
    </ul>
  </nav>
</main>
```

---

## CSS Variables

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--bg-primary` | `#07090e` | Deep obsidian page background |
| `--accent-cyan` | `#00f3ff` | Neon cyan primary accent |
| `--accent-magenta` | `#ff0055` | Hot magenta secondary accent |
| `--panel-bg` | `rgba(15, 22, 36, 0.75)` | Translucent glassmorphism container fill |
| `--font-heading` | `'Orbitron', sans-serif` | Futuristic gaming heading font |
| `--font-body` | `'Rajdhani', sans-serif` | Tactical body typography |

---

## Customization

To modify the theme colors, override the CSS custom properties in your stylesheet:

```css
:root {
  --accent-cyan: #ff9900; /* Custom Amber Accent */
  --accent-magenta: #00ffcc; /* Custom Mint Accent */
}
```

---

## Accessibility

- Keyboard navigation via `Tab` and `Enter`/`Space` keys.
- Visible focus rings styled with `:focus-visible`.
- Semantic HTML tags (`<main>`, `<nav>`, `<article>`, `<label>`).

---

## Responsive Behaviour

- **Desktop (> 900px)**: Full horizontal stepper layout with node titles and connecting progress lines.
- **Tablet (600px - 900px)**: Compact node view with auto-hidden titles to maintain line alignment.
- **Mobile (< 600px)**: Flex wrap node layout with full-width responsive action buttons.

---

## Browser Compatibility

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+
