# CSS Calorie Macro Ring

A CSS-only nutrition dashboard featuring three animated concentric rings
for carbohydrates, protein, and fat.

## Features

- Pure HTML and CSS
- Three concentric macro rings
- Animated progress visualization
- Gradient and glow effects
- Glassmorphism dashboard
- Responsive layout
- Hover interactions
- Accessible progressbar attributes
- `prefers-reduced-motion` support
- No JavaScript dependencies

## Files

- `demo.html` - Component markup and demo
- `style.css` - Complete styling and animations

## Customization

The macro percentages can be changed directly in the
`conic-gradient()` definitions inside `style.css`.

Example:

```css
background:
  conic-gradient(
    from 0deg,
    #ffb347 0 72%,
    rgba(255, 255, 255, 0.07) 72% 100%
  );