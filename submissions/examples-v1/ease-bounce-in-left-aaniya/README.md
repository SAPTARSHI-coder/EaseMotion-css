# ease-bounce-in-left: Slides In From Left With Elastic Overshoot

A CSS entrance animation where an element slides in from the left, overshoots slightly, then settles into place — part of the `ease-bounce-in` direction family alongside `ease-bounce-in-down`.

## Classes

| Class                 | Effect                               |
| --------------------- | ------------------------------------ |
| `ease-bounce-in-left` | Triggers bounce-in-left on class add |

## Usage

```html
<!-- Class trigger -->
<div class="ease-bounce-in-left">Slides in from left with overshoot</div>

<!-- List items with stagger -->
<div class="list-item ease-bounce-in-left" style="animation-delay:0.1s;">
  New message
</div>
```

## Animation

```css
@keyframes ease-bounce-in-left {
  0% {
    transform: translateX(-120%);
    opacity: 0;
  }
  60% {
    transform: translateX(8%);
    opacity: 1;
  }
  80% {
    transform: translateX(-4%);
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
}
```

## Customization

```css
:root {
  --ease-bounce-in-left-duration: 0.7s;
  --ease-bounce-in-left-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

## Features

- translateX(-120%) → overshoot → settle motion path
- Springy cubic-bezier(0.34, 1.56, 0.64, 1) easing
- Consistent with the ease-bounce-in-down family
- Works well for notification lists and toasts
- Customizable duration and easing
- Respects prefers-reduced-motion
