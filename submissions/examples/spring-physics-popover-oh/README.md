# Component: Spring Physics Popover

This submission implements the Spring Physics Popover for issue **#46677**.

## Description

CSS popover with spring physics bounce animation effect.

## Features

- **Spring Animation**: Bounce and settle effect
- **Animation Variants**: Bounce, elastic, wobble styles
- **CSS Cubic Bezier**: Physics-based easing
- **Hover Trigger**: Shows on button hover
- **Bouncy Scale**: Overshoot scale animation

## Usage

```html
<div class="popover-container">
  <button class="trigger-btn">Hover Me</button>
  <div class="spring-popover">
    <h4>Title</h4>
    <p>Content</p>
  </div>
</div>
```

## Animation Variants

| Variant | Class | Effect |
|---------|-------|--------|
| Bounce | `.bounce` | Basic spring bounce |
| Elastic | `.elastic` | More elastic overshoot |
| Wobble | `.wobble` | Vertical wobble |

## Animation

```css
@keyframes springBounce {
  0% { transform: scale(0); }
  50% { transform: scale(1.1); }
  70% { transform: scale(0.95); }
  100% { transform: scale(1); }
}

.spring-popover {
  animation: springBounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
}
```

## Acceptance Criteria

- ✅ Spring bounce animation
- ✅ Animation variants
- ✅ CSS cubic-bezier easing
- ✅ Hover trigger
- ✅ README.md included
