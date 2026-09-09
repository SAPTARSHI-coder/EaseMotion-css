# Hover Corner Dots (#88288)

## Abstract
The Hover Corner Dots component provides a lightweight, highly efficient micro-interaction for cards, containers, and interactive elements. Upon hover, four indicator dots scale and fade cleanly into the four corners of the container. Built entirely in CSS, it uses zero JavaScript and relies on pseudo-elements combined with `box-shadow` offset rendering for minimal paint overhead and optimal 60fps performance.

## CONTRIBUTING.md Compliance

### 1. What does this do?
Implements a subtle hover interaction (`.ease-corner-dots`) where four corner indicator dots smoothly fade and scale into view using pseudo-elements (`::before` and `::after`) and CSS `box-shadow` translation.

### 2. How is it used?
Apply the `.ease-corner-dots` class to cards, buttons, or interactive elements. Ensure the element maintains a relative positioning context (`position: relative`) and explicit dimensions.

```html
<div class="ease-corner-dots" role="button" tabindex="0">
  Hover Over Me
</div>
```

### 3. Why is it useful?
Provides clean visual framing and polish without requiring JavaScript event listeners or external animation libraries. It optimizes DOM footprint by using only two pseudo-elements to render four distinct corner dots via CSS `box-shadow`.

## Pseudo-Element & Box-Shadow Architecture
Rather than rendering four separate HTML `div` nodes or using four pseudo-elements (which CSS does not support), this architecture leverages:
- `::before` positioned at `top: 8px; left: 8px;` with a horizontal `box-shadow: 196px 0 0 currentColor;` to render both the top-left and top-right dots simultaneously.
- `::after` positioned at `bottom: 8px; left: 8px;` with a horizontal `box-shadow: 196px 0 0 currentColor;` to render both the bottom-left and bottom-right dots simultaneously.
- GPU-accelerated `transform: scale()` and `opacity` transitions utilizing custom cubic-bezier easing (`cubic-bezier(0.16, 1, 0.3, 1)`).

## Custom CSS Properties
The component is fully customizable via root or local CSS custom properties:

| Custom Property | Default Value | Description |
| :--- | :--- | :--- |
| `--dot-bg` | `#030712` | Main page background color |
| `--dot-surface` | `#1e293b` | Main container stage background |
| `--dot-surface-hover` | `#334155` | Corner dots element background on hover |
| `--dot-border` | `rgba(255, 255, 255, 0.1)` | Subtle border around container elements |
| `--dot-text` | `#f8fafc` | Primary typography color |
| `--dot-muted` | `#94a3b8` | Muted subtitle text color |
| `--dot-accent` | `#38bdf8` | Accent color for corner dots and highlight state |

---
*Compliant with EaseMotion-css CI/CD guidelines & High-Contrast Mode (`forced-colors: active`).*
