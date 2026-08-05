# Animated Carousel (Confetti Style) Component

A highly interactive, zero-dependency, **Pure CSS** slider built directly for the **EaseMotion CSS** animation block collection.

## ✨ Features
- 🚫 **Zero JavaScript:** Utilizes native CSS radio selector mutations to power transition state management.
- 🎭 **Confetti Particle Burst:** Multi-layered structural keyframe layers burst out simultaneously with every index changes.
- ♿ **Highly Accessible:** Packed with functional ARIA roles (`aria-roledescription`, `aria-label`) and implements full fallback rules for `prefers-reduced-motion`.
- 📱 **Fully Responsive:** Adapts instantly across fluid width layouts.

## 🛠️ Usage

1. Copy the layout component markup found in `demo.html` into your application markup flow.
2. Link or embed the accompanying component style definitions (`style.css`).
3. If leveraging customized variable setups, override standard tokens locally via root states:

```css
:root {
  --ease-motion-duration: 0.6s;
  --color-primary: #6366f1;
}