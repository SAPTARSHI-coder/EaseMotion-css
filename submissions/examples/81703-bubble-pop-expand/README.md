# Bubble Pop Expand

Bubble Pop Expand is a CSS entrance animation for playful interfaces, status cards, onboarding surfaces, and lightweight feedback elements. The motion starts from a small scale, expands past the target size, and settles smoothly.

## Features

- `@keyframes ease-bubble-pop-expand` defines the motion.
- `--ease-duration` controls animation speed.
- `--ease-timing` allows the timing curve to be customized.
- `transform` and `opacity` keep the animated properties compositor-friendly.
- `prefers-reduced-motion` disables the non-essential motion.

## Usage

```html
<div class="ease-anim-bubble-pop-expand">Content</div>
```

Override the timing variables on the component or a parent scope when a different rhythm is needed.

## Demo

Open `demo.html` directly in a modern browser. The example is self-contained and does not require JavaScript.
