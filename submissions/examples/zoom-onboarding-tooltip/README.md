# Zoom Onboarding Tooltip

A responsive, pure CSS **Zoom Onboarding Tooltip** designed for portfolio websites and personal landing pages. The component features a smooth zoom-in animation, keyboard accessibility, and a clean onboarding experience without requiring JavaScript.

## Features

- 🎨 Pure CSS (No JavaScript)
- 🔍 Smooth zoom-in tooltip animation
- 💼 Portfolio-inspired UI
- 📱 Fully responsive
- ♿ Keyboard accessible
- 🎯 Uses EaseMotion CSS variables with fallback values
- 🛡️ Supports `prefers-reduced-motion`

## Files

```text
zoom-onboarding-tooltip/
├── demo.html
├── style.css
└── README.md
```

## Preview

The demo includes:

- Portfolio profile card
- Primary call-to-action button
- Zoom-in onboarding tooltip
- Tooltip arrow
- Responsive layout
- Keyboard-accessible interaction

## Usage

```html
<div class="tooltip-container">
  <button class="portfolio-btn">
    View Projects
  </button>

  <div class="onboarding-tooltip" role="tooltip">
    <strong>Start Here</strong>
    <span>Explore my featured projects and recent work.</span>

    <div class="tooltip-arrow"></div>
  </div>
</div>
```

## Customization

Customize the component using CSS variables.

```css
:root {
  --tooltip-bg: #ffffff;
  --tooltip-text: #0f172a;
  --tooltip-primary: #2563eb;
  --tooltip-radius: 16px;
  --tooltip-duration: 280ms;
}
```

## Accessibility

- Semantic HTML structure
- Uses a native `<button>` element
- Tooltip includes `role="tooltip"`
- Supports keyboard interaction with `:focus-within`
- Visible keyboard focus using `:focus-visible`
- Honors `prefers-reduced-motion`

## Browser Support

Compatible with modern browsers supporting:

- CSS Custom Properties
- CSS Transitions
- CSS Transforms
- Flexbox
- `prefers-reduced-motion`

## Why it fits EaseMotion CSS

This component aligns with EaseMotion CSS's animation-first philosophy by providing a lightweight, reusable onboarding pattern powered entirely by CSS. The zoom animation, responsive design, and accessible interactions make it a practical addition for portfolio websites while remaining easy to customize and integrate into the EaseMotion ecosystem.