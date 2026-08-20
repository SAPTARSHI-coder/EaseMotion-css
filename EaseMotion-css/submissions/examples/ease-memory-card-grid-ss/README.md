# Memory Card Grid Component

## Abstract

The **Memory Card Grid** component (`.ease-mem-grid`) presents a 3D grid layout designed for memory games, card galleries, and dashboard reveals. Each card utilizes 3D transforms (`preserve-3d`, `rotateY`, `rotateX`) and inline CSS custom properties (`--col`, `--row`) to create a staggered diagonal wave reveal animation powered entirely by CSS.

## CONTRIBUTING.md Compliance

### 1. What does this do?
Implements a Memory Card Grid component (`.ease-mem-grid`) where cards execute a staggered wave reveal entrance using 3D perspective and column/row calculation variables (`--col`, `--row`).

### 2. How is it used?
Embed the `.ease-mem-grid` structure into matching games, dashboard widgets, or interactive card galleries. Use the provided JavaScript trigger to restart the wave reveal animation on demand.

### 3. Why is it useful?
Delivers fluid, choreographed multi-element grid entrances entirely through hardware-accelerated CSS without requiring complex JavaScript timeline sequencing libraries.

## Wave Architecture

The wave entrance effect is achieved using CSS Custom Properties assigned per grid tile:

```html
<div class="ease-mem-card" style="--col: 1; --row: 1;">...</div>
```

The animation delay calculation applies an offset based on the sum of column and row values:

```css
animation-delay: calc((var(--col, 1) + var(--row, 1)) * 0.12s);
```

This creates a smooth diagonal ripple across the grid as cards rotate into view with GPU-accelerated transform and opacity keyframes (`easeCardWave`).

## Custom CSS Properties

| Property | Default Value | Description |
| :--- | :--- | :--- |
| `--mem-bg` | `#030712` | Main background color |
| `--mem-surface` | `#0f172a` | Container stage surface color |
| `--mem-card-back` | `#1e293b` | Unflipped card back face color |
| `--mem-card-front` | `#3b82f6` | Flipped card front gradient accent color |
| `--mem-border` | `rgba(59, 130, 246, 0.3)` | Container subtle border overlay |
| `--mem-text` | `#f8fafc` | Primary typography color |
| `--mem-muted` | `#94a3b8` | Subtitle and secondary text color |
| `--mem-shadow` | `rgba(59, 130, 246, 0.25)` | Button and element drop shadow color |
