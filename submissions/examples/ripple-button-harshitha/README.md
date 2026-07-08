# Ripple Button Effect (Pure CSS)

A reusable **CSS ripple button** component built with **only HTML + CSS** (no JavaScript). On hover, a circular ripple smoothly expands from the center and stays inside the button using `overflow: hidden`.

## Features
- ✅ Pure HTML + CSS (no JS)
- ✅ Ripple animation on hover + `:focus-visible`
- ✅ Smooth transition + modern styling
- ✅ Responsive (buttons stack to full width on small screens)
- ✅ Configurable with CSS variables
- ✅ Respects `prefers-reduced-motion`

## Folder Structure
- `submissions/examples/ripple-button-harshitha/`
  - `demo.html`
  - `style.css`
  - `README.md`

## HTML Usage
Include the stylesheet:
```html
<link rel="stylesheet" href="./style.css" />
```

Default button:
```html
<button class="ease-ripple-btn" type="button">Click Me</button>
```

Optional variants:
```html
<button class="ease-ripple-btn ease-ripple-btn--blue" type="button">Get Started</button>
<button class="ease-ripple-btn ease-ripple-btn--green" type="button">Confirm</button>
<button class="ease-ripple-btn ease-ripple-btn--purple" type="button">Continue</button>
```

## Customization
Tune the ripple + button via CSS variables (set on `:root` or inline on the button):
- `--ease-ripple-duration`: ripple duration (default `0.62s`, within 0.4–0.8s)
- `--ease-ripple-ease`: easing curve
- `--ease-ripple-radius`: corner radius
- `--ease-ripple-padding-y`, `--ease-ripple-padding-x`: padding
- `--ease-ripple-start`: starting ripple size

Example (slightly slower ripple):
```html
<button class="ease-ripple-btn" style="--ease-ripple-duration: 0.75s" type="button">
  Click Me
</button>
```

## Browser Compatibility
Works in modern evergreen browsers (Chrome, Edge, Firefox, Safari) that support CSS pseudo-elements, transitions, and keyframes.

## Preview
Open `demo.html` to see the ripple effect.

