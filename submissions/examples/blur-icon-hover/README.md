# Animation: Blur Icon Hover

Implements the `ease-blur-icon-hover` utility class for EaseMotion CSS.  
Adds a smooth blur + scale effect to icon components on hover.  
Pure CSS only — no JavaScript.

## Usage

```html
<div class="ease-blur-icon-hover">
  <img src="icon.svg" alt="icon" />
</div>
```

## How it works

Uses `@keyframes` with `filter: blur()` and `transform: scale()`  
triggered on `:hover`, with `ease-in-out` easing.

## Browser Support

Chrome 49+, Firefox 31+, Safari 9.1+, Edge 15+

Closes #65
