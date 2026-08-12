# Heading Text Reveal

An animated heading reveal using per-character staggered `translateY` + `opacity` transitions. Built with EaseMotion CSS custom properties.

## Features

- Characters animate in sequentially from below with a subtle overshoot
- Supports `<h1>`, `<h2>`, `<h3>` heading levels
- Replay button to reset and re-trigger the animation
- Fully configurable via CSS custom properties

## Custom Properties

| Property             | Default    | Description                |
| -------------------- | ---------- | -------------------------- |
| `--reveal-duration`  | `0.5s`     | Per-character duration     |
| `--reveal-stagger`   | `0.04s`    | Delay between characters   |
| `--reveal-color`     | `#1a1a2e`  | Text colour                |
| `--reveal-bg`        | `#f8f9fa`  | Page background            |
| `--reveal-font-size` | `2.5rem`   | Text font size             |

## Usage

```html
<link rel="stylesheet" href="style.css">

<h1>
  <span class="reveal-word">
    <span class="reveal-char">H</span>
    <span class="reveal-char">e</span>
    <span class="reveal-char">l</span>
    <span class="reveal-char">l</span>
    <span class="reveal-char">o</span>
  </span>
</h1>
```

Trigger on load automatically. Re-trigger with:

```js
document.querySelectorAll('.reveal-char').forEach((el, i) => {
  el.style.animation = `charReveal var(--reveal-duration, 0.5s) ease ${i * 0.04}s forwards`;
});
```
