# ease-zoom-out-up

## Overview

An exit animation class designed to transition elements out of view. It scales down the element to `70%` of its original size while shifting it upward by `20px` and fading its opacity to `0`. This is a classic exit effect for cards, notifications, toasts, modals, and popovers.

## Features

- Balanced `0.35s` duration exit transition using an `ease-in` timing curve.
- Perfect for dismissible components such as dialogue boxes, cards, and notification banners.
- Native accessibility support via system `prefers-reduced-motion` config checks.

## How it works

The utility transitions three core visual parameters in a single sequence:

- **Scale**: `scale(1)` to `scale(0.7)`.
- **Position**: Shifting upward `translateY(0)` to `translateY(-20px)`.
- **Opacity**: `1` to `0`.

Since it is an exit animation, it uses the CSS property `forwards` to ensure the element retains its invisible state after the animation ends.

## How to Apply to Any Element

Apply the `.ease-zoom-out-up` class when triggering the exit state:

```html
<div class="notification-banner ease-zoom-out-up">
  Successfully saved template edits.
</div>
```

## Common Exit Animation Use Cases

1. **Modals & Dialogs**: Animating confirmation screens, prompt boxes, or login overlays out of view.
2. **Notification Toasts**: Dismissing informational alert messages or system confirmations.
3. **Dashboard widgets**: Closing collapsible settings panels or data cards.

## Accessibility Notes

When the system has `prefers-reduced-motion: reduce` enabled, the animation transitions are skipped entirely. The element is instantly hidden (`opacity: 0` and final transforms are applied) to prevent distracting exit motion.
