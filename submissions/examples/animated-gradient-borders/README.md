# CSS Animated Gradient Borders

## What does it do?
Demonstrates 6 animated gradient border effects using
`conic-gradient`, `border-image`, and CSS `@property`
for smooth rotation animations.

## How is it used?
```html
<!-- Rotating gradient border -->
<div class="ease-gradient-border">
  <div class="ease-gradient-border-inner">
    Your content here
  </div>
</div>

<!-- Glow border -->
<div class="ease-gradient-border-glow">
  Your content here
</div>

<!-- Hover reveal -->
<div class="ease-gradient-border-hover">
  Your content here
</div>
```

## Variants
| Class | Effect |
|---|---|
| `.ease-gradient-border` | Rotating conic-gradient border |
| `.ease-gradient-border-pulse` | Pulsing opacity border |
| `.ease-gradient-border-sweep` | Sweeping gradient border |
| `.ease-gradient-border-glow` | Static border with glow shadow |
| `.ease-gradient-border-hover` | Reveals on hover only |

## CSS Variables
- `--ease-gb-angle` — rotation angle (animated via @property)
- `--ease-gb-speed` — animation duration (default: 3s)
- `--ease-gb-bg` — inner background color (default: #0f172a)
- `--ease-gb-padding` — inner padding (default: 1.5rem)

## Features
- 6 border animation variants
- CSS `@property` for smooth angle interpolation
- Hover interaction variant
- Respects prefers-reduced-motion
- Pure CSS, no JavaScript

## Preview
Open `demo.html` directly in browser.