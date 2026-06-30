# ease-side-flip-out: Card Flips Out to the Side

An exit animation that flips an element away like a card being turned face-down, using rotateY with backface-visibility hidden.

## Classes

| Class | Effect |
|-------|--------|
| `ease-side-flip-out` | Flips element out to the right |
| `ease-side-flip-out-left` | Flips element out to the left |
| `ease-side-flip-out-hover` | Flips out on hover (right) |
| `ease-side-flip-out-left-hover` | Flips out on hover (left) |
| `ease-flip-perspective` | Wrapper that adds perspective |

## Usage

```html
<!-- Hover trigger -->
<div class="ease-flip-perspective">
  <div class="ease-side-flip-out-hover">
    Hover to flip out
  </div>
</div>

<!-- Class trigger -->
<div class="ease-flip-perspective">
  <div class="ease-side-flip-out">
    Flips out on load
  </div>
</div>
```

## Customization

```css
:root {
  --ease-side-flip-duration: 0.5s;
  --ease-side-flip-easing: cubic-bezier(0.55, 0, 1, 0.45);
}
```

## Features
- rotateY(0) → rotateY(90deg) exit animation
- backface-visibility: hidden
- Flip right and flip left variants
- Hover and class trigger options
- Customizable duration and easing
- Respects prefers-reduced-motion