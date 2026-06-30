# Expandable Floating Action Button (FAB) Menu

A reusable, pure CSS expandable Floating Action Button (FAB) menu explicitly designed for mobile-first interfaces and dashboards. Integrates effortlessly with EaseMotion CSS animation utilities.

## Features

- 🚀 **Pure CSS Toggling:** Uses the "checkbox hack" (`<input type="checkbox">` paired with `<label>`) to handle click states, completely eliminating the need for JavaScript.
- ✨ **Staggered Animations:** Menu items animate upwards seamlessly with staggered delays for a premium feel.
- ♿ **Keyboard Accessible:** Both the trigger and the expanded items are fully focusable and usable via keyboard navigation. Hidden items are safely removed from the focus order (`visibility: hidden`) until the menu is opened.
- 📱 **Mobile-First:** Fixed positioning stays perfectly in the bottom-right corner across all device sizes.
- 🛑 **Prefers-Reduced-Motion:** Automatically disables all staggering, rotation, and scaling animations if a user has reduced motion configured.

## Usage

1. Copy the HTML structure from `demo.html` into the `<body>` of your layout.
2. Include the `style.css` which powers the fixed positioning, checkbox logic, and staggered transitions.
3. Replace the placeholder icons (`📄`, `📤`, etc.) with SVGs or icon fonts of your choice.

## Customization

Easily adjust the FAB colors, sizing, and transition speeds using the CSS variables placed at the top of `style.css`:

```css
:root {
  --fab-primary: #3b82f6;
  --fab-secondary: #ffffff;
  --fab-size: 56px;
  --fab-item-size: 48px;
  --transition-speed: 0.3s;
}
```

## Contributed by
- Man1ac-1773
