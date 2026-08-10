# Glassmorphic Floating System Theme Switcher Pill

A modern glassmorphic floating segment control component for Light / Dark / System theme switching. Features a spring-physics sliding active indicator pill, rotating SVG icon micro-interactions, `localStorage` persistence, and full keyboard accessibility.

## Features

- 🔮 **Glassmorphism**: `backdrop-filter: blur(16px) saturate(180%)` with `rgba` background and solid fallback for unsupported browsers.
- 🎛️ **Sliding Indicator**: Active highlight pill repositioned dynamically with `left` and `width` CSS transitions using a spring easing curve `cubic-bezier(0.34, 1.56, 0.64, 1)`.
- 🌀 **Icon Rotation Transitions**: Sun rotates `30deg`, Moon tilts `-20deg`, Monitor scales up on selection — all with spring physics.
- 💾 **localStorage Persistence**: Selected theme persists across page reloads via `localStorage.setItem`. Respects private browsing gracefully.
- 🖥️ **System Mode**: Listens to `prefers-color-scheme` media query changes to automatically respond when user switches OS theme.
- ♿ **Full Accessibility**: `role="radiogroup"`, `role="radio"`, `aria-checked`, `aria-label`, Arrow key navigation (`ArrowLeft` / `ArrowRight` / `ArrowUp` / `ArrowDown`).

## File Structure

```text
submissions/examples/glass-theme-switcher-rs/
├── demo.html    # Interactive demo showcasing the component
├── index.html   # Main entry demo page
├── style.css    # CSS tokens, glassmorphism, sliding pill, icon transitions
├── script.js    # Theme logic, localStorage, ARIA keyboard navigation
└── README.md    # Documentation and customization guide
```

## Quick Start

### 1. HTML Markup

```html
<div class="theme-switcher-pill" id="theme-pill" role="radiogroup" aria-label="Select color theme">
  <div class="pill-indicator" id="pill-indicator" aria-hidden="true"></div>

  <button class="pill-option" role="radio" aria-checked="false"
          data-theme="light" aria-label="Light theme">
    <span class="pill-icon"><!-- Sun SVG --></span>
    <span class="pill-label">Light</span>
  </button>

  <button class="pill-option" role="radio" aria-checked="true"
          data-theme="system" aria-label="System theme">
    <span class="pill-icon"><!-- Monitor SVG --></span>
    <span class="pill-label">System</span>
  </button>

  <button class="pill-option" role="radio" aria-checked="false"
          data-theme="dark" aria-label="Dark theme">
    <span class="pill-icon"><!-- Moon SVG --></span>
    <span class="pill-label">Dark</span>
  </button>
</div>
```

### 2. Apply Theme to Root

The script toggles `data-theme="light"` or `data-theme="dark"` on `<html>`. Define your theme tokens:

```css
:root, [data-theme="light"] {
  --bg: #f0f4ff;
  --text: #0f172a;
}

[data-theme="dark"] {
  --bg: #0b0f19;
  --text: #f8fafc;
}
```

### 3. Include CSS & JS

```html
<link rel="stylesheet" href="style.css">
<script src="script.js" defer></script>
```

## CSS Custom Properties

| Variable | Purpose |
| :--- | :--- |
| `--pill-bg` | Glass pill background (`rgba` with opacity) |
| `--pill-border` | Pill container border color |
| `--pill-shadow` | Pill drop shadow and inner glow |
| `--pill-indicator-bg` | Sliding active highlight fill |
| `--pill-indicator-shadow` | Active indicator glow shadow |
| `--pill-active-color` | Text color for selected option |
| `--pill-active-icon-color` | Icon color for selected option |
| `--pill-option-color` | Default unselected text color |

## localStorage Key

The component uses `easemotion-theme` as the localStorage key. Values stored: `"light"`, `"dark"`, `"system"`.
