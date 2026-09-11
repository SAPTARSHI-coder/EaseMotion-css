# Day Night Toggle
A responsive, dependency-free day/night scene toggle for the
EaseMotion CSS gallery.

## Features
- Pure HTML and CSS.
- No JavaScript.
- No external dependencies.
- Toggles the complete scene between day and night.
- Animated sun and moon transition.
- Starry night sky with subtle twinkling stars.
- Clouds fade away during the night state.
- Layered hills and ground create a complete scene.
- Responsive layout.
- Keyboard accessible toggle.
- Visible `:focus-visible` state.
- `prefers-reduced-motion` support.
- EaseMotion-style CSS custom properties.

## Files
- `demo.html` — self-contained interactive demonstration.
- `style.css` — complete scene styling and animations.

## Usage
Keep `demo.html` and `style.css` in the same directory and open
`demo.html` in a browser.
No build step, framework, library, or JavaScript dependency is
required.

## How It Works
The toggle uses a native checkbox:
```html
<input
  class="theme-toggle"
  type="checkbox"
  id="day-night"
  aria-label="Toggle between day and night"
>