# Shadow Pop Follow Button

A responsive, pure CSS follow button featuring a smooth **Shadow Pop** hover interaction inspired by modern admin panels and dashboard interfaces.

## Features

- 🎨 Pure CSS (no JavaScript)
- ✨ Smooth shadow-pop hover animation
- ♿ Keyboard accessible with `:focus-visible`
- 📱 Fully responsive
- 🎯 Uses EaseMotion CSS variables with fallbacks
- 🌙 Suitable for modern dashboard and admin UI layouts

## Files

```
shadow-pop-follow-button/
├── demo.html
├── style.css
└── README.md
```

## Preview

The demo includes three button states:

- Follow
- Following
- Disabled

## Customization

The component exposes CSS custom properties for easy theming.

```css
:root {
  --follow-bg: #ffffff;
  --follow-text: #111827;
  --follow-accent: #3b82f6;
  --follow-radius: 14px;
  --follow-duration: 280ms;
}
```

## Accessibility

- Uses semantic `<button>` elements.
- Supports keyboard navigation via `:focus-visible`.
- Includes `prefers-reduced-motion` support.

## Browser Support

Works in all modern browsers supporting:

- CSS Custom Properties
- Flexbox
- CSS Transitions
- `prefers-reduced-motion`