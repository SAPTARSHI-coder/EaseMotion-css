# Neumorphic Soft Tilt Hover Button

## What does this do?

This pull request introduces a pure CSS animated Button utilizing a smooth **Tilt Hover** interaction transition, styled precisely to complement **Neumorphic Soft interface aesthetics**. The component is fully responsive, keyboard accessible, and explicitly exposes custom parameters (such as timing, easing, and scale factors) via standard CSS custom properties.

---

## How is it used?

Structure the HTML template by framing the primary action trigger with directional grid detection zones:

```html
<div class="button-container">
        <div class="tilt-button-wrapper theme-pure">
          <div class="tilt-zone top-left"></div>
          <div class="tilt-zone top-right"></div>
          <div class="tilt-zone bottom-left"></div>
          <div class="tilt-zone bottom-right"></div>
          
          <button class="tilt-btn" aria-label="Initialize Core Node">
            <span class="btn-text">INITIALIZE</span>
          </button>
        </div>
```

---

## Exposed Global Parameters

Developers can easily customize the component by modifying the global `:root` CSS variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `--tilt-duration` | Controls the smoothness and speed of the tilt animation. | `400ms` |
| `--tilt-scale` | Defines the button scale applied during hover. | `1.02` |
| `--tilt-angle-x` | Controls the maximum X-axis tilt angle. | Customizable |
| `--tilt-angle-y` | Controls the maximum Y-axis tilt angle. | Customizable |

---

## Why is it useful?

This component aligns with EaseMotion's philosophy of creating lightweight, high-performance UI interactions. It delivers a premium neumorphic 3D hover experience using only native CSS, leveraging hardware-accelerated transforms for smooth animations while eliminating the need for JavaScript and minimizing rendering overhead.