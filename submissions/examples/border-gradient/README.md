# ease-border-gradient

An animated rotating gradient border utility for [EaseMotion CSS](https://github.com/SAPTARSHI-coder/EaseMotion-css).

Creates eye-catching glowing borders that rotate around any element — cards, buttons, inputs — using CSS `conic-gradient` and `@property`. Zero JavaScript.

---

## Preview

Gradient border spins continuously around the element using a `conic-gradient` anchored to an animated `--ease-border-angle` CSS custom property.

---

## Usage

### HTML Structure

```html
<!-- Card -->
<div class="ease-card ease-border-gradient ease-border-gradient-purple">
  Featured Plan
</div>

<!-- Button -->
<button class="ease-btn ease-border-gradient ease-border-gradient-hover">
  Get Started
</button>

<!-- Input -->
<input class="ease-border-gradient ease-border-gradient-slow" placeholder="Email address" />
```

### Include the stylesheet

```html
<link rel="stylesheet" href="style.css">
```

---

## Available Classes

| Class | Effect |
|---|---|
| `.ease-border-gradient` | Base class — rotating rainbow gradient border (required) |
| `.ease-border-gradient-purple` | Purple → blue rotating border |
| `.ease-border-gradient-sunset` | Orange → pink rotating border |
| `.ease-border-gradient-slow` | 6s rotation speed |
| `.ease-border-gradient-fast` | 1.5s rotation speed |
| `.ease-border-gradient-hover` | Only animates on hover |

---

## How It Works (Technical)

```css
/* 1. Register @property so the browser can animate the angle */
@property --ease-border-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

/* 2. Spin the angle via keyframes */
@keyframes ease-border-spin {
  to { --ease-border-angle: 360deg; }
}

/* 3. Use ::before pseudo-element with conic-gradient */
.ease-border-gradient::before {
  content: '';
  position: absolute;
  inset: -2px;               /* border thickness */
  border-radius: inherit;
  background: conic-gradient(
    from var(--ease-border-angle, 0deg),
    #7c3aed, #3b82f6, #06b6d4, #7c3aed
  );
  z-index: -1;
  animation: ease-border-spin 3s linear infinite;
}
```

The element's own background sits on top via `::after`, so only the border area shows the gradient.

---

## Features

- ✅ Zero JavaScript — pure CSS only
- ✅ Uses `@property` for smooth angle animation
- ✅ 3 color variants (rainbow, purple, sunset)
- ✅ 3 speed variants (slow, default, fast)
- ✅ Hover-only mode for subtle interactions
- ✅ Works on cards, buttons, and inputs
- ✅ Reduced motion support — shows static gradient instead of spinning
- ✅ Themeable via CSS custom properties

---

## CSS Custom Properties (Theming)

```css
:root {
  --ease-border-width:       2px;
  --ease-border-radius:      12px;
  --ease-border-speed:       3s;
  --ease-border-speed-slow:  6s;
  --ease-border-speed-fast:  1.5s;

  /* Rainbow colors */
  --ease-border-c1: #7c3aed;
  --ease-border-c2: #3b82f6;
  --ease-border-c3: #06b6d4;
  --ease-border-c4: #7c3aed;
}
```

---

## File Structure

```
border-gradient/
├── style.css     # Component styles
├── demo.html     # Interactive demo page
└── README.md     # This file
```

---

## Browser Support

`@property` is supported in Chrome, Edge, and Firefox 128+. Safari support landed in Safari 17.2+. For older browsers the border still renders — it just won't animate smoothly (falls back to a static gradient).

---

## Closes

Resolves issue [#2723](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/2723)

---

## Author

Contributed as part of **Girl script  Summer of Code 2026**