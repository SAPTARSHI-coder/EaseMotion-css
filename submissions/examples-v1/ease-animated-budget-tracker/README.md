# Animated Personal Finance Budget Tracker (`ease-animated-budget-tracker`)

A modern, fintech-inspired dashboard component built entirely with HTML and CSS. It showcases animated progress bars, SVG circular charts, hover interactions, and responsive CSS grid layouts.

## 🚀 Features & EaseMotion Showcase

- **CSS Progress Animations**: Utilizes CSS custom properties (e.g., `--progress: 80%`) to dynamically animate budget and savings bars on load.
- **SVG Circular Health Score**: Demonstrates how to animate `stroke-dasharray` for a beautiful, JS-free ring chart.
- **Responsive Grid**: Uses `auto-fit` and media queries to adapt from desktop dashboards to mobile views.
- **Interaction Utilities**: Introduces `.ease-hover-lift` and `.ease-hover-highlight` classes for smooth UI feedback.
- **Accessibility Friendly**: Includes `:focus-visible` styling for interactive elements.

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser. All required CSS is inside `style.css`.

To animate a budget bar dynamically:

```html
<div class="progress-bar">
  <!-- The bar will smoothly grow to 80% on load -->
  <div
    class="ease-progress ease-progress--warning"
    style="--progress: 80%;"
  ></div>
</div>
```
