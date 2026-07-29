# Animated Gradient Border

## What does this do?
A rotating conic-gradient border that spins continuously around any element. Pure CSS — no JS required. Uses `@property` to register `--border-angle` as an animatable custom property, then drives it with a `@keyframes` animation. Works on cards, buttons, inputs, and any element.

## Variants
- `.gradient-border` — default purple gradient, always spinning
- `.gradient-border--rainbow` — full spectrum gradient
- `.gradient-border--slow` — slower rotation speed
- `.gradient-border-hover` — only activates on hover
- `.gradient-border-btn` — button with spinning gradient border

## How to use it
```html
<div class="gradient-border">
  <h3>Card Title</h3>
  <p>Content here.</p>
</div>

<button class="gradient-border-btn">Get Started</button>

<!-- Hover only -->
<div class="gradient-border-hover">
  <p>Border spins on hover only.</p>
</div>
```

## Customization
```css
.gradient-border {
  --gb-color-1: #6c63ff;
  --gb-color-2: #a78bfa;
  --gb-color-3: #6c63ff;
  --gb-speed:   3s;
  --gb-width:   2px;
  --gb-radius:  1rem;
}
```

## Why it fits EaseMotion CSS
The framework has `ease-gradient-rotation` for backgrounds and `ease-hover-glow` — but zero support for animated borders. This fills a real gap. Pure CSS, composable with existing classes, customizable via CSS variables, and includes `prefers-reduced-motion` fallback.

## Browser support
`@property` is supported in Chrome 85+, Edge 85+, Firefox 128+, Safari 16.4+. Falls back to a static border gracefully in unsupported browsers.
