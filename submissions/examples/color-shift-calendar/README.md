# Color Shift Calendar

A responsive, pure CSS **Color Shift Calendar** inspired by modern banking dashboards. The component features smooth color-shift hover animations, accessible date buttons, and a clean financial interface without requiring JavaScript.

## Features

- 🎨 Pure CSS (No JavaScript)
- 📅 Banking-inspired calendar layout
- 🌈 Color shift hover animation
- 📱 Fully responsive
- ♿ Keyboard accessible
- 🎯 Uses EaseMotion CSS variables with fallback values
- 🛡️ Supports `prefers-reduced-motion`

## Files

```text
color-shift-calendar/
├── demo.html
├── style.css
└── README.md
```

## Preview

The demo includes:

- Banking dashboard calendar card
- Monthly calendar grid
- Color-shift hover interaction
- Highlighted current day
- Selected payment date
- Responsive layout

## Usage

```html
<div class="calendar-grid calendar-dates">
  <button>11</button>
  <button class="today">12</button>
  <button class="selected">16</button>
</div>
```

## Customization

Customize the component using CSS variables.

```css
:root {
  --calendar-bg: #f8fafc;
  --primary: #2563eb;
  --secondary: #10b981;
  --radius: 20px;
  --transition: 300ms;
}
```

## Accessibility

- Semantic HTML structure
- Date cells use native `<button>` elements
- Keyboard focus with `:focus-visible`
- Responsive across desktop and mobile devices
- Supports `prefers-reduced-motion`

## Browser Support

Compatible with modern browsers supporting:

- CSS Custom Properties
- CSS Grid
- CSS Transitions
- Flexbox
- `prefers-reduced-motion`

## Why it fits EaseMotion CSS

This component follows EaseMotion CSS's animation-first philosophy by providing a reusable, CSS-only calendar with smooth color-shift interactions. The banking-inspired design, accessible controls, responsive layout, and customizable design tokens make it suitable for integration into modern dashboard interfaces.