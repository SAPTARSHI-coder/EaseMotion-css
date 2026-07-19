# Navbar Focus Transitions

Adds smooth CSS transitions to navbar focus states for keyboard/assistive
navigation, instead of abrupt instant changes.

## Usage

```html
<nav class="ease-navbar">
  <a href="#" class="navbar-item">Home</a>
</nav>
```

Link the stylesheet — focus-visible states will transition smoothly
over ~200ms while preserving accessible contrast and visible outlines.

## Why it fits EaseMotion CSS

Keeps accessibility (visible focus, WCAG contrast) while making
interactions feel more polished and consistent with animation-first
design.