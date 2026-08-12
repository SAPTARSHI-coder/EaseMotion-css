# Jelly Click Animation

## Overview

Jelly Click Animation is a reusable EaseMotion CSS utility that adds a soft elastic press interaction to clickable elements. It is built with pure CSS and gives buttons, cards, links, icons, and other interactive controls a satisfying jelly-like response on activation.

## Features

- CSS-only implementation
- Elastic squash and stretch effect on `:active`
- Smooth easing and natural return motion
- Lightweight and performant
- Works with buttons, cards, links, icon buttons, and any clickable element
- Customizable with CSS variables
- Respects `prefers-reduced-motion`

## Installation

Include the CSS file in your demo or project:

```html
<link rel="stylesheet" href="style.css" />
```

## Usage

Apply the utility class to any clickable item:

```html
<button class="ease-jelly-click">Click me</button>
<a href="#" class="ease-jelly-click">Link</a>
<div class="ease-jelly-card ease-jelly-click" role="button" tabindex="0">Interactive card</div>
```

## Customization

Override variables to adjust the timing, scale, and easing:

```css
.ease-jelly-click {
  --ease-jelly-duration: 320ms;
  --ease-jelly-scale-x: 0.9;
  --ease-jelly-scale-y: 1.08;
  --ease-jelly-ease: cubic-bezier(0.2, 1, 0.36, 1);
}
```

## Browser compatibility

- Chrome
- Firefox
- Edge
- Safari

## Notes

- The animation triggers on `:active` for direct press interactions.
- If the user prefers reduced motion, the effect is disabled for accessibility.
- Use the class on interactive elements and containers to preserve the same elastic feel across UI controls.
