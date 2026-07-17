# Pulse Number Counter

A responsive, pure CSS **Pulse Number Counter** inspired by modern analytics dashboards. The component highlights key performance metrics with a subtle pulse animation, making important values stand out without requiring JavaScript.

## Features

- 🎨 Pure CSS (No JavaScript)
- 📊 Analytics dashboard-inspired design
- 💓 Smooth pulse animation
- 📈 Trend indicator with supporting metrics
- 📱 Fully responsive
- ♿ Keyboard-friendly structure
- 🎯 Uses EaseMotion CSS variables with fallback values
- 🛡️ Supports `prefers-reduced-motion`

## Files

```text
pulse-number-counter/
├── demo.html
├── style.css
└── README.md
```

## Preview

The demo includes:

- Analytics KPI card
- Animated pulse effect around the primary metric
- Revenue trend indicator
- Supporting dashboard statistics
- Responsive layout

## Usage

```html
<div
  class="counter-value ease-pulse"
  aria-label="Total Revenue 128 thousand 450 dollars"
>
  $128,450
</div>
```

## Customization

Customize the component using CSS variables.

```css
:root {
  --counter-bg: #f8fafc;
  --primary: #2563eb;
  --success: #10b981;
  --radius: 22px;
  --transition: 300ms;
}
```

## Accessibility

- Semantic HTML structure
- Accessible metric using `aria-label`
- Responsive across desktop and mobile devices
- Supports `prefers-reduced-motion`

## Browser Support

Compatible with modern browsers supporting:

- CSS Custom Properties
- CSS Keyframes
- CSS Transitions
- Flexbox
- `prefers-reduced-motion`

## Why it fits EaseMotion CSS

This component aligns with EaseMotion CSS's animation-first philosophy by providing a reusable analytics dashboard widget built entirely with CSS. The pulse animation, responsive design, accessibility, and customizable design tokens make it suitable for integration into modern dashboards while remaining lightweight and easy to extend.