# Skeleton Loading State Pulse Animation

A lightweight utility class `ease-skeleton-pulse-dj` to create smooth shimmering skeleton wireframes while data is loading.

---

## 🎨 Overview

This example demonstrates how to build structural placeholder layouts using standard CSS linear-gradients, shift transitions, and infinite keyframe scaling.

* **Transitions:** Infinite linear keyframe position shift (`linear infinite`).
* **Responsiveness:** Works natively on block nodes of any size (cards, avatar circles, paragraph lines).
* **Dark Mode:** Seamlessly changes token colors in dark/light themes.

---

## 🛠️ Usage

Simply add `.ease-skeleton-pulse-dj` to any element you wish to turn into a skeleton loader.

### CSS Class Reference

```css
.ease-skeleton-pulse-dj {
  background: linear-gradient(
    90deg,
    var(--ease-skeleton-base) 25%,
    var(--ease-skeleton-shimmer) 37%,
    var(--ease-skeleton-base) 63%
  );
  background-size: 400% 100%;
  animation: ease-skeleton-shimmer 1.4s ease-in-out infinite;
  position: relative;
  overflow: hidden;
}

@keyframes ease-skeleton-shimmer {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
```

---

## 🔗 Setup Instructions

To open this demo locally:

1. Clone or fetch the repository.
2. Navigate to `submissions/examples/19789-skeleton-pulse/`.
3. Open `demo.html` directly in any web browser.
