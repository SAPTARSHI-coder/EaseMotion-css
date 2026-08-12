# Blur Back to Top (Glassmorphism Style)

A lightweight, high-end floating navigation anchor node designed with pure frosted glass filter definitions (`backdrop-filter`) for the **EaseMotion CSS** animation framework package.

## ✨ Features
- 💎 **Glassmorphic Render Layers:** Translucent surface filters capture underneath components, producing crisp color shifts during scroll passes.
- 🚫 **Zero JavaScript Overheads:** Operates fully on native browser target link anchoring mechanics paired alongside smooth scrolling styles.
- ♿ **Highly Accessible:** Integrates focus state outlines for screen navigation alongside fallback paths inside `prefers-reduced-motion`.
- 📱 **Mobile Adaptive Layouts:** Flexibly drops scaling footprints down automatically inside compact screens.

## 🛠️ Usage

1. Put the hidden `#top-anchor` pointer tag right at the opening peak of your document `<body>`.
2. Insert the floating action link block markup found in `demo.html` immediately near the bottom of your global templates.
3. Hook up the core element properties (`style.css`).
4. Personalize blur distributions or surface transparency masks from your local configurations:

```css
:root {
  --glass-blur: 14px;
  --glass-bg: rgba(255, 255, 255, 0.45);
}