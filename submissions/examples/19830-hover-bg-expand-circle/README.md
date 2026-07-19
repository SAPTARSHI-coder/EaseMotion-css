# Circular Grow Background Hover Animation

A premium hover animation effect where the background color grows dynamically in a circular shape from the center (or the exact mouse coordinates) to cover the entire element.

---

## 🎨 Overview

This example demonstrates a clean CSS-only circular ripple background fill on hover, enhanced with dynamic cursor coordinate tracking.

* **Transitions:** Smooth bezier-curved transform scaling (`cubic-bezier(0.4, 0, 0.2, 1)`).
* **Responsive Coverage:** Ensures the circular element expands cleanly to fill the bounding box of rectangular containers.
* **Customization:** Leverages local CSS variables (`--ease-circle-bg-color`, `--ease-text-hover`) to configure unique colors per element.
* **Dark Mode:** Fully styled to adapt dynamically to light/dark themes.

---

## 🛠️ Usage

Apply the `.ease-hover-bg-expand-circle` utility to any focusable or interactive block element (buttons, anchor tags, menu items, or grid cards).

### CSS Class Reference

```css
.ease-hover-bg-expand-circle {
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.ease-hover-bg-expand-circle::before {
  content: '';
  position: absolute;
  top: var(--circle-y, 50%);
  left: var(--circle-x, 50%);
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: var(--ease-circle-bg-color, #3b82f6);
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
  pointer-events: none;
}

.ease-hover-bg-expand-circle:hover::before {
  transform: translate(-50%, -50%) scale(3);
}
```

### Configurable Variables

| CSS Custom Variable | Purpose | Default |
|---|---|---|
| `--ease-circle-bg-color` | Set the color of the expanding circular background. | `#3b82f6` (Primary Blue) |
| `--ease-text-hover` | Set the text color when covered by the background. | `#ffffff` |

---

## 🔗 Setup Instructions

To open this demo locally:

1. Clone or fetch the repository.
2. Navigate to `submissions/examples/19830-hover-bg-expand-circle/`.
3. Open `demo.html` directly in any web browser.
