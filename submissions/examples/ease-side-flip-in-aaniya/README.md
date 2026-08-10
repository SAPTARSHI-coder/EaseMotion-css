# ease-side-flip-in: Card Flips In from the Side

An entrance animation that flips an element in like a card being turned face-up from the side, using rotateY with backface-visibility hidden.

## Classes

| Class | Effect |
|-------|--------|
| `ease-side-flip-in` | Flips element in from the right |
| `ease-side-flip-in-left` | Flips element in from the left |
| `ease-side-flip-in-hover` | Reveals on hover from right |
| `ease-side-flip-in-left-hover` | Reveals on hover from left |
| `ease-flip-perspective` | Wrapper that adds perspective |

## Usage

```html
<!-- Flip in on load -->
<div class="ease-flip-perspective">
  <div class="ease-side-flip-in">
    Flips in from right
  </div>
</div>

<!-- Flip in from left -->
<div class="ease-flip-perspective">
  <div class="ease-side-flip-in-left">
    Flips in from left
  </div>
</div>
```

## Customization

```css
:root {
  --ease-side-flip-in-duration: 0.5s;
  --ease-side-flip-in-easing: cubic-bezier(0, 0.55, 0.45, 1);
}
```

## Features
- rotateY(-90deg) → rotateY(0) entrance animation
- backface-visibility: hidden
- Flip from right and left variants
- Great for card game UI
- Customizable duration and easing
- Respects prefers-reduced-motion