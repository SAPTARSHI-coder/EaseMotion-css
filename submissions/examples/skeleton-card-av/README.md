# Animated Skeleton Card Showcase

A highly performant, modular layout skeleton card template powered by hardware-accelerated linear shimmer gradients for the **EaseMotion CSS** UI element workspace.

## ✨ Features
- ⚡ **Pure HTML & CSS:** Operates instantly at compile time with zero scripting system footprints.
- 💨 **Hardware Accelerated:** Shifts `background-position` spaces cleanly along atomic layout layers to guarantee a solid 60fps render metric.
- ♿ **Semantic Accessibility Built-in:** Employs explicit structural ARIA indicators (`aria-busy="true"`) to inform screen readers of asynchronous states.
- 📱 **Fluid Grid Layout:** Scales across e-commerce, blog, dashboard, or mobile feeds via a smart `auto-fill` system.

## 🛠️ Usage

1. Mount the block mockup content wrapper elements found in `demo.html` into your application container components.
2. Bind the file styling metrics sheets (`style.css`).
3. Tweak base shimmer colors or timing curves from your local target rulesets:

```css
:root {
  --ease-motion-duration: 1.6s;
  --skeleton-base: #e2e8f0;
}
# Skeleton Card

## What does this do?

Creates an animated skeleton loading card that simulates content placeholders while data is loading.

---

## How is it used?

Open `demo.html` directly in a browser.

```html
<div class="skeleton-card">

    <div class="skeleton image"></div>

    <div class="content">

        <div class="skeleton title"></div>

        <div class="skeleton text"></div>

        <div class="skeleton button"></div>

    </div>

</div>
```

---

## Why is it useful?

Skeleton loaders improve perceived performance by showing users a preview of page structure while content is loading. They are commonly used in dashboards, social media feeds, blogs, e-commerce applications, and SaaS products. This standalone example demonstrates a clean, reusable loading state using only HTML and CSS.
