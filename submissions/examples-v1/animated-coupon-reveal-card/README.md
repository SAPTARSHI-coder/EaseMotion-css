# Animated Coupon Reveal Card

## Overview

Animated Coupon Reveal Card is a CSS-only interactive card effect that reveals a discount coupon code when the user hovers over the card.

The component combines smooth hover animations, coupon-style cutout edges, and a hidden promo code section to create an engaging promotional UI element without requiring JavaScript.

---

## Features

- Pure CSS implementation
- No JavaScript required
- Smooth hover reveal animation
- Coupon-style ticket design
- Responsive layout
- Lightweight and reusable
- Easy to customize colors, text, and discount codes

---

## Folder Structure

```text
animated-coupon-reveal-card/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

1. Copy the HTML structure from `demo.html`.
2. Add the styles from `style.css`.
3. Customize the discount text, colors, and card size as needed.
4. Open `demo.html` directly in a browser to view the effect.

---

## Customization

### Change Discount Badge Text

```html
<span class="coupon-badge">20% OFF</span>
```

### Change Coupon Code

```html
<div class="coupon-code">SAVE20</div>
```

### Change Card Background

```css
.coupon-card {
  background: #ffffff;
}
```

### Change Hover Animation Distance

```css
.coupon-card:hover {
  transform: translateY(-10px);
}
```

### Change Reveal Animation Speed

```css
.coupon-code {
  transition: 0.35s ease;
}
```

---

## Why It Fits EaseMotion CSS

This example follows EaseMotion CSS principles by providing:

- A visually appealing hover interaction
- Human-readable CSS
- Reusable promotional card design
- Self-contained implementation
- No modifications to framework files
- Smooth motion-focused user experience

---

## Use Cases

- E-commerce discount sections
- Promotional offers
- Pricing pages
- Marketing landing pages
- Reward and loyalty programs

---

## Author

Created as a submission example for EaseMotion CSS.
