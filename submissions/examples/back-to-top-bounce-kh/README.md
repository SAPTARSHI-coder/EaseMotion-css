# Back To Top Button With Bounce Entrance

## What does this do?

Provides a back-to-top button that appears after scrolling down the page and enters with a bounce animation.

## JavaScript

```js
if (window.scrollY > 300) {
  button.classList.add("ease-visible");
} else {
  button.classList.remove("ease-visible");
}
```

## How is it used?

```html
<button
  id="backToTop"
  class="back-to-top"
  aria-label="Back to top">
  ↑
</button>
```

The button becomes visible by toggling the `.ease-visible` class.

```css
.ease-visible {
  animation: bounceIn 0.6s ease;
}
```

## Features

- Appears after scrolling 300px
- Smooth scroll back to top
- Bounce entrance animation
- Reduced-motion support
- Accessible button label
- Self-contained demo

## Why does it fit EaseMotion CSS?

The component provides a lightweight, human-readable utility pattern focused on motion and interaction. It demonstrates how animations can improve usability while remaining accessible through reduced-motion support.