# Auto-Reveal Navigation Header on Upward Scroll

Implements auto-hide and auto-show behavior for a top navigation header. The header hides on scroll down to maximize content visibility, and smoothly reappears as soon as the user scrolls up — even slightly — without needing to scroll back to the top.

## Classes

| Class                  | Effect                            |
| ---------------------- | --------------------------------- |
| `.docs-header`         | Base fixed header with transition |
| `.docs-header.hidden`  | Header slides up out of view      |
| `.docs-header.visible` | Header slides back into view      |

## Usage

```html
<header class="docs-header visible" id="docs-header">
  <!-- Navigation Content -->
</header>
```

```js
let lastScrollY = window.scrollY;
const header = document.getElementById("docs-header");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 80) {
    header.classList.add("hidden");
    header.classList.remove("visible");
  } else {
    header.classList.remove("hidden");
    header.classList.add("visible");
  }

  lastScrollY = currentScrollY;
});
```

## Why this fits EaseMotion CSS

Improves navigation accessibility on long documentation pages, reduces unnecessary scrolling, and keeps the interface clean by hiding the header only when it's not needed — all driven by a simple CSS transform transition.

## Features

- Auto-hides header on scroll down
- Auto-reveals header on any upward scroll
- Smooth 0.3s transform transition
- Minimal JS — only handles scroll direction detection
- Works well on long documentation-style pages
