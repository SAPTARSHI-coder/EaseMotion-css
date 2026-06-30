# ease-light-speed-out-right

## What does it do?

Element exits right at high speed with skew — `translateX(100%) + skewX(-30deg) + opacity(0)` — pure CSS, no JavaScript.

## Features

- Fast ease-in timing for high-speed feel
- Combined translate + skew + opacity exit
- Replays on hover

## Usage

```css
.element {
  transition:
    transform 0.35s ease-in,
    opacity 0.35s ease-in;
}

.element:hover {
  transform: translateX(100%) skewX(-30deg);
  opacity: 0;
}
```

## Browser Support

- `transform` + `opacity` + `transition` — Chrome 26+, Firefox 16+, Safari 6.1+

## Tech Stack

- HTML + CSS only, no JavaScript

## Preview

Open `demo.html` directly in browser.
