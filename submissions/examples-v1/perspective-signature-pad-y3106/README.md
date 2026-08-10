# Perspective Signature Pad

## 1. What does this do?

A 3D perspective-transformed signature pad component designed for secure verification and checkout flows, popping forward and flattening smoothly into 2D drawing space upon active hover or input focus.

## 2. How is it used?

Wrap the card in a perspective layout wrapper and apply standard components like `signature-card` and `canvas`:

```html
<div class="perspective-container">
  <div class="signature-card">
    <canvas id="signature-canvas"></canvas>
  </div>
</div>
```

## 3. Why is it useful?

It matches EaseMotion CSS's architectural vision:

- **Human-readable**: Modular styling tags like `perspective-container` and `signature-card` communicate spatial roles clearly.
- **Animation-first**: Implements advanced 3D transforms (`rotateX`, `rotateY`, `translateZ`) and spring physics transitions to replicate realistic tactile depth interfaces.
- **Composable**: Perfect for banking panels, authorization sheets, legal compliance overlays, or e-commerce payment confirmation drawers.
