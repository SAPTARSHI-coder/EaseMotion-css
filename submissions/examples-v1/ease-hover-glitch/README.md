# ease-hover-glitch

## What does it do?

Element glitches with color channel separation on hover using \`::before\` and \`::after\` pseudo-elements — pure CSS, no JavaScript.

## Features

- `::before` and `::after` clones shift horizontally on hover
- Different translateX distances per clone
- Red (left-shift) and blue (right-shift) color channels
- Fast 0.2s animation that runs twice then stops

## Usage

```css
.element {
  position: relative;
}

.element::before,
.element::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
}

.element:hover::before {
  color: red;
  animation: glitch-left 0.2s ease 2;
}

.element:hover::after {
  color: blue;
  animation: glitch-right 0.2s ease 2;
}
```

## Browser Support

- `::before`/`::after` + `@keyframes` — Chrome 26+, Firefox 16+, Safari 6.1+

## Tech Stack

- HTML + CSS only, no JavaScript
- Uses `data-text` attribute for pseudo-element content

## Preview

Open `demo.html` directly in browser.
