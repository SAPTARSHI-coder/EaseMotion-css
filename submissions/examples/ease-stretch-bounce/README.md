# Ease Stretch Bounce

A squash-and-stretch animation that briefly stretches an element before bouncing past its center position and settling back to normal size.

## Features

- Physics-inspired stretch effect
- Y-axis stretch variant
- X-axis stretch variant
- Smooth bounce-back motion
- Pure CSS implementation

## Animation Sequence

### Y Axis

```css
scaleY(1)
→ scaleY(1.3)
→ scaleY(0.9)
→ scaleY(1)
```

### X Axis

```css
scaleX(1)
→ scaleX(1.3)
→ scaleX(0.9)
→ scaleX(1)
```

## Usage

```html
<div class="ease-stretch-bounce-y">
  Content
</div>

<div class="ease-stretch-bounce-x">
  Content
</div>
```

## Use Cases

- Attention-grabbing UI elements
- Interactive cards
- Notifications
- Buttons
- Animated components

## Files

- `demo.html`
- `style.css`
- `README.md`