# Trophy Glow Pulse Component

## Abstract

The **Trophy Glow Pulse** component (`.ease-trophy-container`) delivers a high-impact, celebratory micro-interaction for web applications. Built entirely with pure CSS custom properties, hardware-accelerated transforms, radial bloom layers, and floating physics, it provides an expressive visual landmark for achievements, milestones, and reward unlocks.

---

## CONTRIBUTING.md Compliance

### 1. What does this do?
Implements a celebratory "Trophy Glow Pulse" animation (`.ease-trophy-container`) featuring a multi-layered radial glow bloom, floating suspension physics, and a pulsing gold icon.

### 2. How is it used?
Embed the `.ease-trophy-container` structure inside victory modals, gamification dashboards, or reward screens. Use the provided JavaScript trigger or class toggle to restart the celebration loop on demand.

### 3. Why is it useful?
Provides immediate emotional feedback and reward reinforcement for users completing key milestones, all rendered via hardware-accelerated CSS without heavy image assets.

---

## Glow & Float Architecture

The component relies on a synchronized dual-layer animation setup:

1. **Floating Suspension (`easeTrophyFloat`)**: Translates the trophy container along the Y-axis using a smooth 3-second `ease-in-out` infinite loop.
2. **Radial Glow Expansion (`easeGlowPulse`)**: Applied via the `::before` pseudo-element, creating a pulsing radial ambient light bloom (`var(--trophy-glow)`) with expanding scale and variable blur depth.
3. **Gold Icon Pulsing (`easeTrophyPulse`)**: Enhances icon drop-shadow intensity and scale to mimic dynamic illumination.

---

## Custom CSS Properties

| Token | Default Value | Description |
| :--- | :--- | :--- |
| `--trophy-bg` | `#030712` | Deep background tone |
| `--trophy-surface` | `#0f172a` | Stage container background |
| `--trophy-border` | `rgba(245, 158, 11, 0.2)` | Stage border highlight |
| `--trophy-gold-primary` | `#f59e0b` | Primary trophy gold highlight |
| `--trophy-gold-light` | `#fef08a` | Light gold accent tone |
| `--trophy-gold-dark` | `#d97706` | Dark golden gradient tone |
| `--trophy-glow` | `rgba(245, 158, 11, 0.5)` | Radial bloom aura color |
| `--trophy-text` | `#f8fafc` | Title typography color |
| `--trophy-muted` | `#94a3b8` | Subtitle description color |
