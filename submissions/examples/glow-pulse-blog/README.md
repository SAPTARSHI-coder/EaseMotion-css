# Glow Pulse Blog Card

## Overview

A responsive glow pulse blog card designed for minimal blog layouts. Features a subtle pulsing glow animation that draws attention without distracting from the content. Built with pure HTML and CSS, fully responsive, keyboard accessible, and respects `prefers-reduced-motion`.

## Usage

```html
<article class="glow-pulse-card">
  <span class="tag">Design</span>

  <h1>Minimal Journal</h1>

  <p>
    Design isn't decoration. It's communication. Thoughtful motion helps guide
    attention without distracting from the content.
  </p>

  <a href="#">Read Article →</a>
</article>
```

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--glow-pulse-duration` | `3s` | Glow pulse animation duration |
| `--glow-pulse-scale` | `1.02` | Scale factor at the pulse peak |
| `--card-bg` | `#ffffff` | Card background color |
| `--card-radius` | `16px` | Card border radius |
| `--text-color` | `#1f2937` | Primary text color |
| `--muted-color` | `#6b7280` | Secondary text color |
| `--glow-color` | `#6366f1` | Accent and glow color |
| `--glow-shadow` | `rgba(99, 102, 241, 0.25)` | Glow shadow color |

### Customization

```css
:root {
  --glow-pulse-duration: 2.5s;
  --glow-pulse-scale: 1.04;

  --glow-color: #8b5cf6;
  --glow-shadow: rgba(139, 92, 246, 0.3);

  --card-radius: 20px;
}
```

## Features

- Pure HTML + CSS (no JavaScript)
- Responsive blog card layout
- Smooth glow pulse animation
- CSS custom properties for easy customization
- Keyboard accessible (`:focus-within`)
- Respects `prefers-reduced-motion`
- Subtle hover elevation effect
- Modern minimal blog aesthetic