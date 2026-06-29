# Hover Card Lift Utilities

Cards and interactive elements that animate with lift, shadow, scale, and glow effects on hover. Provides clear affordance for interactive UI elements.

## Features

- **5 lift variants**: default, scale, glow, border, bounce
- **Directional lifts**: up, down, left, right
- **Color tint lifts**: primary, secondary, success, danger, warning, info
- **Speed variants**: fast (150ms), default, slow (600ms)
- **Tilt effect**: 3D perspective rotation on hover
- **Image card**: with overlay reveal and zoom
- **Lift button**: lift + glow on interactive buttons
- **Interactive row**: slide-right effect for list items
- **Reduced motion** support

## Usage

```html
<div class="lift-card">
  Hover me to lift
</div>
```

With scale and glow:

```html
<div class="lift-card lift-card--scale lift-card--glow">
  Enhanced card
</div>
```

Lift button:

```html
<button class="lift-btn">Click Me</button>
```

## Files

- `style.css` — all lift utilities
- `demo.html` — interactive showcase
- `README.md` — this documentation
