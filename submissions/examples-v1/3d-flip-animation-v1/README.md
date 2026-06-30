# 🌀 EaseMotion CSS — 3D Flip Animation Components

Premium, hardware-accelerated 3D interactions and entrance animations for modern web applications. Fully responsive, ultra-smooth, and engineered with native **Light/Dark theme support**.

---

## 🚀 What's Inside?

Implementing 3D transformations (`perspective`, `transform-style: preserve-3d`, and `backface-visibility`) from scratch is notoriously tricky and cross-browser finicky.

EaseMotion CSS gives you instant access to hardware-accelerated 3D animations without writing a single line of JavaScript. This module introduces two core patterns:

1. **Interactive Hover Cards:** Classic 3D front/back flip behavior for pricing tiers, team profiles, and feature cards.
2. **Entrance Animations:** High-impact, springy 3D entry states for dynamic UI elements.

---

## 🛠️ Installation & Setup

Include the compiled EaseMotion utilities in your main stylesheet, or drop them directly into your project component.

```css
/* Ensure your global variables accommodate theme tokens if using Light/Dark modes */
:root[data-theme="dark"] {
  --bg-dark: #09090e;
  --card-bg: #11111a;
  --card-border: #232336;
  --accent: #6366f1;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
}
:root[data-theme="light"] {
  --bg-dark: #f8fafc;
  --card-bg: #ffffff;
  --card-border: #e2e8f0;
  --accent: #4f46e5;
  --text-main: #0f172a;
  --text-muted: #64748b;
}
```
