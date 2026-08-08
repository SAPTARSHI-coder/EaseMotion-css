# Particle Signature Pad (Banking Design Pattern)

## 1. What does this do?

This component provides a pure CSS-animated signature verification pad inspired by premium banking apps, which automatically traces a cursive signature with a trailing glow of exploding light particles upon activation.

## 2. How is it used?

Apply the class names to build the interactive signature block structure in your HTML, using radio/checkbox selectors to trigger the path-drawing animations:

```html
<!-- Interactive control -->
<input type="radio" id="state-signing" name="pad-state" class="state-control" />

<!-- Signature Pad Panel -->
<div class="signature-pad-wrapper">
  <!-- Grid backdrop -->
  <div class="pad-grid-bg"></div>

  <!-- SVG Signature Line -->
  <svg class="signature-svg" viewBox="0 0 400 150">
    <path class="signature-path main-path" d="..." />
  </svg>

  <!-- Particle emitters positioned at coordinates along the path -->
  <div class="particle-emitter" style="left: 20%; top: 60%; --delay: 0.2s;">
    <span class="particle" style="--dx: -12px; --dy: -8px;"></span>
    <span class="particle" style="--dx: 8px; --dy: -15px;"></span>
  </div>
</div>
```

## 3. Why is it useful?

It fulfills EaseMotion CSS's philosophy of offering ultra-premium, lightweight transitions and animations with zero external JavaScript dependencies, utilizing hardware-accelerated SVG properties, responsive layout constraints, and native `@media (prefers-reduced-motion)` overrides.
