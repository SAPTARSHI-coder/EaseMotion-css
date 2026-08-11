# CSS Ripple-Wave Badge for Gaming Hub Layouts

A modern, high-performance, accessibility-first status and notification badge component designed specifically for Gaming Hubs, Esports Dashboards, and Streaming Portals. Built using **ONLY HTML5 and CSS3** without JavaScript or external frameworks.

---

## Overview

The **CSS Ripple-Wave Badge** provides high-visibility telemetry indicators featuring smooth 60fps concentric ripple animations, neon gaming aesthetics, glassmorphism, and responsive design. It supports multiple state variants (Live Broadcast, Online/Ready, VIP Boss, Combat Active, Level Up, and Stealth/AFK) and multiple sizing options (Small, Medium, Large, and Avatar Icon).

---

## Features

- **Triple-Layer Ripple Wave Animation**: Concentric expanding pulse rings driven by 60fps GPU-accelerated CSS keyframe animations.
- **Neon Gaming Color Palette**: High-contrast cyberpunk themes (Neon Live Magenta, Cyber Cyan, Mythic Gold, Battle Crimson, Emerald Prestige, Stealth Violet).
- **Glassmorphism Backdrop UI**: `backdrop-filter: blur(12px)` background with subtle inner highlights and semi-transparent borders.
- **Multiple Badge Variants**:
  - `gaming-badge--live`: Live Streaming & Broadcasts
  - `gaming-badge--online`: Online & Match Ready
  - `gaming-badge--boss`: VIP & Legendary Boss Rank
  - `gaming-badge--battle`: Active Combat & High Priority Alerts
  - `gaming-badge--rank`: Level Unlocks & Prestige Rewards
  - `gaming-badge--stealth`: Stealth & AFK Status
- **Flexible Sizing**: `.gaming-badge--sm`, `.gaming-badge--md` (default), `.gaming-badge--lg`, and `.gaming-badge--icon` (circular avatar attachment).
- **Zero JavaScript**: Pure CSS implementation including interactive tab switching.
- **Accessibility & Focus Styles**: Screen-reader friendly via `role="status"` and `aria-label`, plus visible focus rings for keyboard navigation.
- **Reduced Motion Support**: Fully respects `prefers-reduced-motion: reduce` by replacing wave animations with static ambient glows.
- **Fully Responsive**: Adapts seamlessly to all screen sizes from mobile devices to ultrawide gaming displays.

---

## Folder Structure

```
submissions/examples/ripple-wave-badge-gaming-hub/
├── demo.html        # Interactive gaming dashboard demo showcasing badge variants
├── style.css        # Full CSS design system, variables, keyframes & component styles
└── README.md        # Comprehensive documentation and integration guide
```

---

## Installation

No build steps or npm packages required. Simply download or clone the repository files into your project workspace.

Include `style.css` in your HTML `<head>` tag:

```html
<link rel="stylesheet" href="path/to/submissions/examples/ripple-wave-badge-gaming-hub/style.css">
```

---

## Usage

### 1. Basic Online Status Badge
```html
<span class="gaming-badge gaming-badge--online gaming-badge--md" role="status" aria-label="Status: Online">
  <span class="gaming-badge__dot"></span>
  <span class="gaming-badge__text">MATCH READY</span>
</span>
```

### 2. Live Broadcast Badge (Large)
```html
<span class="gaming-badge gaming-badge--live gaming-badge--lg" role="status" aria-label="Status: Live Streaming">
  <span class="gaming-badge__dot"></span>
  <span class="gaming-badge__text">LIVE BROADCAST</span>
</span>
```

### 3. Avatar Icon Overlay Badge
```html
<div class="avatar-wrapper">
  <img src="avatar.jpg" alt="Player Avatar" class="avatar">
  <span class="avatar-badge gaming-badge gaming-badge--icon gaming-badge--boss" role="status" aria-label="VIP Boss Online">
    <span class="gaming-badge__dot"></span>
  </span>
</div>
```

---

## CSS Variables

Customize themes by editing or overriding the `:root` custom properties in `style.css`:

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--neon-live` | `#ff007f` | Neon Pink for Live Streams |
| `--neon-cyan` | `#00f3ff` | Cyber Cyan for Match Ready / Online |
| `--neon-gold` | `#ffaa00` | Radiant Gold for VIP & Boss Status |
| `--neon-red` | `#ff2a5f` | Crimson Red for Combat / Battle Alerts |
| `--neon-purple` | `#a855f7` | Stealth Violet for AFK / Stealth Mode |
| `--neon-emerald` | `#00ff88` | Emerald Green for Rank / Level Up |
| `--bg-card` | `rgba(18, 24, 38, 0.65)` | Glassmorphism card surface background |
| `--border-glass` | `rgba(255, 255, 255, 0.12)` | Glass border outline |
| `--anim-ripple-duration` | `2s` | Speed of concentric ripple wave cycle |

---

## Accessibility

- **Semantic ARIA Roles**: Includes `role="status"` and `aria-label="..."` attributes to ensure screen readers announce status changes accurately.
- **Keyboard Navigation**: Badges decorated with `tabindex="0"` display clear high-contrast focus rings when tabbed to (`:focus-visible`).
- **Motion Sensitivity**: Evaluates `@media (prefers-reduced-motion: reduce)` to disable continuous scaling/pulsing keyframe animations while maintaining static visual status.
- **Contrast Ratios**: Meets WCAG 2.1 AA contrast criteria for text legibility over dark glassmorphic backgrounds.

---

## Browser Support

- Chrome / Edge (Latest)
- Firefox (Latest)
- Safari 14+ (Supports `-webkit-backdrop-filter` and standard CSS keyframes)

---

## Customization

### Changing Ripple Wave Speed
To adjust the speed of the ripple animation, update `--anim-ripple-duration`:

```css
:root {
  --anim-ripple-duration: 1.2s; /* Faster intense ripple pulse */
}
```

### Adding a Custom Badge Color
Create a custom variant class by mapping new CSS variables:

```css
.gaming-badge--legendary {
  color: #00e5ff;
  background: linear-gradient(135deg, rgba(0, 229, 255, 0.15), rgba(18, 24, 38, 0.7));
  border-color: rgba(0, 229, 255, 0.35);
}

.gaming-badge--legendary:hover {
  border-color: #00e5ff;
  box-shadow: 0 0 20px rgba(0, 229, 255, 0.45);
}
```
