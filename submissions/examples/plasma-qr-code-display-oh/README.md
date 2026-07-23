# Component: Plasma QR Code Display

This submission implements the Plasma QR Code Display for GSSoC issue **#42017**.

## Description

Animated QR code display with plasma glow effects for portfolio designs.

## Features

- **Plasma Glow**: Animated background with plasma colors
- **Cell Pulse**: QR cells glow with staggered animations
- **Frame Glow**: Border glow effect around QR code
- **Text Glow**: Glowing title text animation
- **Color Variants**: Pink, Cyan, and Purple themes
- **Pure CSS Animation**: No JavaScript required

## Usage

```html
<div class="qr-display plasma-qr">
  <div class="plasma-bg"></div>
  <div class="qr-card">
    <div class="qr-frame">
      <div class="qr-pattern">
        <div class="qr-cell"></div>
        <div class="qr-cell filled"></div>
        <!-- More cells -->
      </div>
    </div>
  </div>
  <div class="qr-info">
    <h3>Scan Now</h3>
    <p>Description</p>
  </div>
</div>
```

## Color Variants

| Variant | Primary Color | Class |
|---------|--------------|-------|
| Default | Pink | `.plasma-qr` |
| Cyan | Cyan | `.cyan` |
| Pink | Pink | `.pink` |
| Purple | Purple | `.purple` |

## Animations

### Plasma Background
```css
@keyframes plasmaPulse {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
}
```

### Plasma Cell
```css
@keyframes plasmaCell {
  0%, 100% { background: #1a1a2e; }
  50% { background: var(--color-primary); box-shadow: 0 0 8px var(--color-primary); }
}
```

### Plasma Glow
```css
@keyframes plasmaGlow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.02); }
}
```

## Mini Variants

```html
<div class="qr-display plasma-qr mini pink">
  <div class="plasma-bg"></div>
  <div class="qr-card">
    <div class="qr-frame">
      <div class="qr-pattern">...</div>
    </div>
  </div>
</div>
```

## Acceptance Criteria

- ✅ Plasma background glow animation
- ✅ QR cell pulse effects
- ✅ Frame border glow
- ✅ Glowing title text
- ✅ Color variants (pink, cyan, purple)
- ✅ README.md included
