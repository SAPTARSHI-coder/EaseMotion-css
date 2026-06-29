# Ease Spin Once Reverse

A reverse one-shot rotation animation that spins an element counterclockwise exactly once and stops.

## Features

- Single reverse rotation
- Counterclockwise spin
- Stops at final state
- Uses `animation-fill-mode: forwards`
- Pure CSS implementation

## Animation Sequence

```css
rotate(0deg)
→
rotate(-360deg)
```

## Usage

```html
<div class="ease-spin-once-reverse">
  Content
</div>
```

## CSS

```css
.ease-spin-once-reverse {
  animation: ease-spin-once-reverse 1s ease-in-out forwards;
}
```

## Use Cases

- Loading completion indicators
- Icon transitions
- Interactive UI feedback
- Motion-based attention effects

## Files

- demo.html
- style.css
- README.md