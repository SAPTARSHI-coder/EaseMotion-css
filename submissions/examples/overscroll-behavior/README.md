# Overscroll Behavior

## What does it do?
A pure-CSS demo showing how to control scroll chaining using `overscroll-behavior` — no JavaScript required.

## Features
- **auto (default)** — scroll chaining propagates to parent elements
- **contain** — prevents scroll chaining; keeps the overscroll effect within the element
- **none** — prevents both scroll chaining and overscroll bounce effects
- **Side-by-side comparison** — three panels showing each behavior

## Usage
```css
/* Prevent scroll chaining inside a chat box or sidebar */
.chat-box {
  overscroll-behavior: contain;
}

/* Prevent all overscroll effects */
.modal {
  overscroll-behavior: none;
}
```

## Classes
- `.os-auto` — default scroll chaining
- `.os-contain` — prevent chaining to parent
- `.os-none` — prevent all overscroll effects
- `.scroll-box` — scrollable container with styled content

## Browser Support
- `overscroll-behavior` — Chrome 63+, Firefox 59+, Safari 16+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser. Scroll past the end of each box to see the difference.
