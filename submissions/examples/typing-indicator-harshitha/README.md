# Typing Indicator (3 Animated Dots) — Pure HTML + CSS (Reusable)

A lightweight, responsive **chat-style typing indicator** that simulates the common **“user is typing”** effect using **only HTML and CSS**.

## Folder Structure

```
submissions/examples/typing-indicator-harshitha/
├── index.html
├── style.css
└── README.md
└── preview.png (or preview.gif)   # optional if the repo prefers images
```

## Features

- ✅ Pure HTML + CSS (no JavaScript)
- ✅ Smooth, continuous looping animation (staggered dot bounce)
- ✅ Responsive layout for desktop and mobile
- ✅ Customizable via CSS variables:
  - `--ti-color`
  - `--ti-dot-size`
  - `--ti-gap`
  - `--ti-speed`
  - `--ti-bounce-height`
- ✅ Respects `prefers-reduced-motion`

## HTML Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="./style.css" />
```

Default indicator:

```html
<div class="ease-typing-indicator-harshitha" role="status" aria-live="polite" aria-label="User is typing">
  <span class="dot" aria-hidden="true"></span>
  <span class="dot" aria-hidden="true"></span>
  <span class="dot" aria-hidden="true"></span>
</div>
```

## Customization (CSS Variables)

You can override variables on the indicator element:

```html
<div
  class="ease-typing-indicator-harshitha"
  style="--ti-color:#22c55e; --ti-dot-size:0.68rem; --ti-speed:0.65s; --ti-gap:0.35rem; --ti-bounce-height:0.6rem;"
  role="status"
  aria-live="polite"
  aria-label="User is typing"
>
  <span class="dot" aria-hidden="true"></span>
  <span class="dot" aria-hidden="true"></span>
  <span class="dot" aria-hidden="true"></span>
</div>
```

## Animation Behavior

- Dots bounce vertically in a staggered sequence.
- Animation runs infinitely and loops smoothly.
- When `prefers-reduced-motion: reduce` is enabled, the animation is disabled.

## Browser Compatibility

Works in modern evergreen browsers (Chrome, Edge, Firefox, Safari) supporting CSS animations and media queries.

## Demo

Open `index.html` inside this folder to see the component in action.

