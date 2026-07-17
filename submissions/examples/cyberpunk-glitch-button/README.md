# Cyberpunk Glitch & Slicing Button

A highly stylized button that, on hover, experiences a digital "glitch"—slicing the button horizontally, shifting RGB channels, and stuttering.

## Features
- Chromatic aberration using `text-shadow`
- Dynamic horizontal slicing using `clip-path: polygon`
- Fast, stuttering animations using `alternate-reverse` keyframes
- Pure CSS implementation, no JavaScript

## Usage
```html
<button class="glitch-btn" data-text="GLITCH">GLITCH</button>
```

**Note:** The `data-text` attribute must precisely match the text inside the button, as it is used by the pseudo-elements to duplicate and slice the text on hover.

## Browser Support
- Chrome, Firefox, Safari, Edge (Modern versions supporting `clip-path`)

## Tech Stack
- HTML + CSS only
