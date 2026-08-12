# :focus-visible Accessibility

## What does it do?
A pure-CSS demo showing accessible focus indicators using `:focus-visible`, `:focus`, and `:focus-within` — no JavaScript required.

## Features
- **:focus vs :focus-visible** — comparison showing always-on vs keyboard-only focus rings
- **Custom Focus Rings** — glow, double ring, inset, and underline variants
- **Input Styles** — focus-visible styles for text inputs and selects
- **Focus-within Cards** — entire card highlights when any child element is focused
- **Accessible** — focus indicators only show for keyboard users, avoiding mouse-click interference

## Usage
```css
/* Keyboard-only focus ring */
button:focus-visible {
  outline: 2px solid #22c55e;
  outline-offset: 2px;
}

/* Group focus */
.card:focus-within {
  border-color: #6366f1;
}
```

## Classes
- `.focus-always` — `:focus` always visible
- `.fv-custom` — `:focus-visible` green ring (keyboard only)
- `.fv-glow`, `.fv-double`, `.fv-inset`, `.fv-underline` — custom focus ring variants
- `.fv-input` — focus-visible input styling
- `.fw-card` — focus-within card highlighting

## Browser Support
- `:focus-visible` — Chrome 86+, Firefox 85+, Safari 15.4+
- `:focus-within` — Chrome 60+, Firefox 52+, Safari 10.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser. Use Tab key to navigate focusable elements.
