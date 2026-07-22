# Shimmer Product Card

A modern **Shimmer Product Card** component built for **EaseMotion CSS**. The component features a smooth shimmer sweep animation, hover elevation, responsive layout, and reusable styling while remaining lightweight and JavaScript-free.

---

## Features

- ✨ Pure CSS implementation
- 🌟 Smooth shimmer sweep animation
- 📦 Responsive product card layout
- ⬆️ Hover lift with subtle scaling
- 🎨 Uses EaseMotion CSS variables and design tokens
- ♿ Accessible button focus states
- 🚫 No JavaScript required

---

## Files

```
shimmer-product-card-as/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

Include EaseMotion CSS before the component stylesheet.

```html
<link rel="stylesheet" href="../../../easemotion.css">
<link rel="stylesheet" href="style.css">
```

Example:

```html
<article class="ease-product-card">
  <div class="ease-product-image">⌨️</div>

  <div class="ease-product-body">
    <h2 class="ease-product-title">Retro Mechanical Keyboard</h2>

    <div class="ease-product-rating">★★★★★</div>

    <div class="ease-product-price">$129</div>

    <button class="ease-product-btn">
      Buy Now
    </button>
  </div>
</article>
```

---

## Accessibility

- Semantic HTML using `<article>` and `<button>`
- Keyboard-accessible button with visible focus state
- Responsive layout for desktop and mobile
- Pure CSS interaction without JavaScript

---

## Responsive

The cards are displayed in a responsive grid that automatically adjusts to different screen sizes.

---

## Why it fits EaseMotion CSS

The component follows EaseMotion CSS's animation-first philosophy by providing a reusable product card enhanced with a subtle shimmer effect, smooth hover interactions, and human-readable class names while leveraging EaseMotion design tokens.

---

## Author

Created as a GSSoC'26 contribution for **EaseMotion CSS**.