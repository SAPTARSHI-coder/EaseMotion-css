# mask vs clip-path Demo

## What does this do?

Compares two CSS approaches for hiding/revealing parts of an element: \clip-path\ (crops the element shape) and \mask\ (controls visibility via alpha/luminance masks).

## Key differences

| Feature | clip-path | mask |
|---|---|---|
| Crops element box | Yes | No |
| Gradient support | No | Yes |
| Events outside shape | Blocked | Still received |
| Animated transitions | Yes (same shape type) | Yes |

## When to use which?

- **clip-path**: Use when you want to visually crop an element into a geometric shape (circle, polygon, etc.) and you want clicks/events to respect the visible area.
- **mask**: Use when you need smooth fade effects, gradient-based transparency, or when the element should remain interactable even in invisible regions.
