# CSS Neon Form Fields

A responsive form component with neon glow borders that activate when
the user focuses an input or textarea.

The effect is implemented entirely with HTML and CSS.

## Features

- Pure HTML and CSS
- No JavaScript required
- Neon glow on focus
- Smooth focus transitions
- Responsive layout
- Accessible form labels
- Keyboard-friendly focus states
- Native HTML validation
- Reduced-motion support
- Modern dark neon design

## Files

- `demo.html` — Form structure and demo
- `style.css` — Complete styling and neon effects

## How It Works

The neon effect is created with the `:focus` pseudo-class:

```css
.field input:focus,
.field textarea:focus {
  border-color: #00f5d4;
  box-shadow:
    0 0 0 3px rgba(0, 245, 212, 0.1),
    0 0 12px rgba(0, 245, 212, 0.22),
    0 0 30px rgba(0, 245, 212, 0.1);
}