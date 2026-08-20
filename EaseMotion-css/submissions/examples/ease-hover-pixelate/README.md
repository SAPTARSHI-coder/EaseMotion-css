# ease-hover-pixelate

## What does it do?
Element appears to pixelate on hover using the CSS `blur + contrast` filter trick — pure CSS, no JavaScript.

## Features
- `filter: blur(1.5px) contrast(8)` creates pixelation effect
- Smooth 0.35s transition
- Fun for retro/game-themed UIs
- Works with gradients and solid colors

## Usage
```css
.element {
  transition: filter 0.35s ease;
}

.element:hover {
  filter: blur(1.5px) contrast(8);
}
```

## How it works
The `blur()` smooths adjacent pixels while `contrast()` hardens the edges back, creating a blocky pixelated appearance.

## Browser Support
- `filter` + `transition` — Chrome 53+, Firefox 49+, Safari 9.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
