# Ease Cyberpunk Dynamic Button

## Description
A button styled for cyberpunk interfaces — neon glow border, an animated scan-line sweep on hover, a text glitch-flicker effect on hover, and a rotating conic-gradient neon border chase. Pure CSS, zero JavaScript.

## Features
- Glowing neon border and text shadow at rest
- Scan-line light sweep across the button on hover
- Text glitch-flicker animation (RGB-split style) on hover
- Rotating neon border chase revealed on hover
- Pink/cyan `variant-pink` color scheme available
- Fully responsive (inline-block, scales with content)
- Respects `prefers-reduced-motion`

## Usage
```html
<button type="button" class="ease-cyber-btn">
  <span class="btn-text">Initialize</span>
</button>

<button type="button" class="ease-cyber-btn variant-pink">
  <span class="btn-text">Access Denied</span>
</button>
```
The `<span class="btn-text">` wrapper is required — it's the element the glitch-flicker animation targets.

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--btn-fg` | `#00f0ff` | Primary neon color (border, text, glow) |
| `--btn-accent-2` | `#ff00c8` | Secondary color (glitch flicker, border chase, focus outline) |
| `--btn-glow` | `rgba(0, 240, 255, 0.6)` | Glow shadow color |
| `--btn-duration` | `0.3s` | Hover transition speed |
| `--btn-radius` | `6px` | Corner rounding |

## Accessibility
Standard `<button>` element with visible `:focus-visible` outline. Respects `prefers-reduced-motion` by disabling the scan-line sweep, border chase, and glitch flicker animations entirely.

## Files
- `demo.html` — live example with default and pink variants
- `style.css` — component styles and all animations
- `README.md` — this file