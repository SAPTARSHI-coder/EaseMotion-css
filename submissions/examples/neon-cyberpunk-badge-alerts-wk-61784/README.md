# Neon Cyberpunk Badge Alerts

A lightweight, responsive, accessible, and high-performance **Neon Cyberpunk Badge Alerts** component system designed for futuristic gaming hubs, cyberpunk UI interfaces, security monitoring consoles, and status dashboards.

---

## Overview

The **Neon Cyberpunk Badge Alerts** component system provides visually striking status badges (including **ONLINE**, **WARNING**, **CRITICAL**, **SECURE**, **AI ACTIVE**, and **SYSTEM READY**) enhanced with glowing neon borders, soft pulse keyframe micro-interactions (`@keyframes soft-pulse-glow`), and glassmorphism panel aesthetics.

Built using **Zero JavaScript**, it relies exclusively on pure HTML5 and CSS3 keyframe animations while strictly honoring user accessibility settings such as `prefers-reduced-motion`.

---

## Features

- 🟢 **ONLINE Alert**: Neon green glow status badge with real-time heartbeat indicator.
- 🟠 **WARNING Alert**: Neon amber warning alert badge with subtle pulse keyframes.
- 🔴 **CRITICAL Alert**: High-intensity neon magenta/red alert badge for system failures.
- 🔵 **SECURE Alert**: Neon cyan security vault badge with shield icon highlights.
- 🟣 **AI ACTIVE Alert**: Neon purple intelligence process alert badge.
- 🟡 **SYSTEM READY Alert**: Neon gold ready state indicator badge.
- 💎 **Glassmorphism Design**: Backdrop blur filters (`backdrop-filter: blur(16px)`), translucent dark overlays, and subtle border glows.
- 📐 **Sizing Tokens**: Sizing variants including Small (`.badge-sm`), Medium (`.badge-md`), and Large (`.badge-lg`).
- 🎨 **CSS Custom Properties**: Centralized `:root` design tokens for colors, fonts, glow effects, and transitions.
- ♿ **Accessibility (a11y)**: Focus-visible outline rings (`:focus-visible`), ARIA status roles (`role="status"`), and keyboard navigation support (`tabindex="0"`).
- 🎬 **Prefers Reduced Motion**: Complete animation and transition suppression when system `prefers-reduced-motion: reduce` is enabled.
- 📱 **Fully Responsive**: Mobile, tablet, and desktop grid layouts optimized across all viewport dimensions.
- ⚡ **Zero Dependencies**: Pure HTML5 and CSS3 without external frameworks or JavaScript runtime code.

---

## Folder Structure

```text
submissions/examples/neon-cyberpunk-badge-alerts-wk-61784/
├── demo.html    # Interactive HTML showcase page
├── style.css    # Pure CSS stylesheet containing all badge animations & tokens
└── README.md    # Documentation and usage guide
```

---

## Installation

No build step or package installation is required.

Simply copy `style.css` or include it in your HTML `<head>`:

```html
<link rel="stylesheet" href="path/to/style.css">
```

---

## Usage

Include the badge markup within your application header, user status cards, or security dashboard grids:

### Basic Online Status Badge

```html
<div class="cyber-badge badge-online" tabindex="0" role="status" aria-label="System Status: ONLINE">
  <span class="badge-border-glow"></span>
  <span class="badge-dot"></span>
  <span>ONLINE</span>
</div>
```

---

## HTML Example

Here is a full layout snippet representing a status panel within a cyberpunk console:

```html
<div class="glass-panel">
  <h2 class="section-heading">SYSTEM STATUS ALERTS</h2>
  <div class="badge-grid" role="group">
    
    <!-- ONLINE Badge -->
    <div class="cyber-badge badge-online" tabindex="0" role="status">
      <span class="badge-dot"></span>
      <span class="badge-text">ONLINE</span>
    </div>

    <!-- SECURE Badge -->
    <div class="cyber-badge badge-secure" tabindex="0" role="status">
      <span class="badge-dot"></span>
      <span class="badge-text">SECURE</span>
    </div>

  </div>
</div>
```

---

## CSS Variables

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--bg-primary` | `#05070c` | Deep obsidian background color |
| `--neon-green` | `#00ff66` | Neon green online status accent |
| `--neon-amber` | `#ffaa00` | Neon amber warning status accent |
| `--neon-red` | `#ff0055` | Neon red critical alert accent |
| `--neon-cyan` | `#00f3ff` | Neon cyan secure status accent |
| `--neon-purple` | `#a855f7` | Neon purple AI process accent |
| `--neon-gold` | `#ffd700` | Neon gold system ready accent |
| `--font-heading` | `'Orbitron', sans-serif` | Futuristic cyberpunk heading font |
| `--font-body` | `'Rajdhani', sans-serif` | Tactical body typography |

---

## Customization

To modify theme colors, override the CSS custom properties in your stylesheet:

```css
:root {
  --neon-cyan: #ff007f; /* Custom Rose Accent */
  --neon-green: #00ffaa; /* Custom Mint Accent */
}
```

---

## Accessibility

- Keyboard focus rings styled with `:focus-visible`.
- Standard ARIA status semantics (`role="status"`).
- Semantic HTML tags (`<header>`, `<main>`, `<section>`, `<article>`).

---

## Responsive Behaviour

- **Desktop (> 800px)**: Multi-column responsive grid layout (`repeat(auto-fit, minmax(220px, 1fr))`).
- **Tablet (600px - 800px)**: 2-column badge grid and adaptive card padding.
- **Mobile (< 600px)**: Single column stacked badge grid layout.

---

## Browser Compatibility

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+
