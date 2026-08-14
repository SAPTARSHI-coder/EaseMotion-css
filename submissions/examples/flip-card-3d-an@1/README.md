# 3D Flip Card (`ease-flip-card-an`)

## Description
This submission adds a **3D Flip Card** effect to EaseMotion CSS.

When the user hovers over the card, it flips 180 degrees along the Y-axis to reveal the back side content. The effect uses pure CSS 3D transforms with `perspective`, `transform-style: preserve-3d`, and `backface-visibility`.

## Features
- Pure CSS, zero JavaScript
- Smooth 3D flip animation
- Front and back face content
- Customizable colors and speed
- Includes `prefers-reduced-motion` support
- Responsive and accessible

## How to Use
Create a card structure with front and back faces:

```html
<div class="ease-flip-card-an">
  <div class="ease-flip-inner-an">
    <div class="ease-flip-front-an">
      <h2>Front Side</h2>
      <p>Hover to flip</p>
    </div>
    <div class="ease-flip-back-an">
      <h2>Back Side</h2>
      <p>Hidden content here</p>
    </div>
  </div>
</div>
```

## Customization
You can change colors, speed, and dimensions using CSS variables:

```html
<div
  class="ease-flip-card-an"
  style="
    --flip-speed-an: 0.8s;
    --flip-front-bg-an: linear-gradient(135deg, #00c6ff, #0072ff);
    --flip-back-bg-an: linear-gradient(135deg, #f7971e, #ffd200);
  "
>
  <!-- card content -->
</div>
```

## Demo
Open `demo.html` directly in your browser. No server is required.

## Checklist
- [x] Code is placed inside `submissions/examples/flip-card-3d-an/`
- [x] Includes `demo.html`
- [x] Includes `style.css`
- [x] Includes `README.md`
- [x] Follows unique suffix naming rule
- [x] No changes made to `core/`
- [x] No changes made to `components/`