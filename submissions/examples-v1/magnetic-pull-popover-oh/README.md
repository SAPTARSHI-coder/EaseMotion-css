# Component: Magnetic Pull Popover

This submission implements the Magnetic Pull Popover for issue **#46691**.

## Description

CSS popover with magnetic pull attraction animation effect.

## Features

- **Magnetic Pull**: Attraction animation effect
- **Animation Variants**: Strong, soft, pulse styles
- **Arrow Indicator**: Visual pointer
- **Hover Trigger**: Shows on button hover
- **Continuous Animation**: Infinite loop animation

## Usage

```html
<div class="popover-container">
  <button class="trigger-btn">Hover Me</button>
  <div class="magnetic-popover">
    <h4>Title</h4>
    <p>Content</p>
    <div class="magnet-indicator"></div>
  </div>
</div>
```

## Animation Variants

| Variant | Class | Animation |
|---------|-------|-----------|
| Default | none | Gentle magnetic pull |
| Strong | `.strong` | More pronounced |
| Soft | `.soft` | Subtle movement |
| Pulse | `.pulse` | Glow pulse effect |

## Animation

```css
@keyframes magneticPull {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  25% { transform: translateX(-50%) translateY(-3px) scale(1.02); }
  75% { transform: translateX(-50%) translateY(-1px) scale(0.99); }
}
```

## Acceptance Criteria

- ✅ Magnetic pull animation
- ✅ Animation variants
- ✅ Arrow indicator
- ✅ Continuous animation loop
- ✅ README.md included
