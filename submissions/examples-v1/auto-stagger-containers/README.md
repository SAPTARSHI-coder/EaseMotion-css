# Auto-Stagger Containers

Adds container utilities that automatically stagger the animation delay of direct child elements using pure CSS.

## What does this do?

This feature eliminates manual delay classes by applying progressive animation delays to each direct child of a container. It supports three timing variants:

- `ease-auto-stagger` — default 100ms interval
- `ease-auto-stagger-fast` — 50ms interval
- `ease-auto-stagger-slow` — 200ms interval

## Usage

```html
<div class="ease-auto-stagger">
  <div class="ease-slide-up">Item 1</div>
  <div class="ease-slide-up">Item 2</div>
  <div class="ease-slide-up">Item 3</div>
</div>
```

## Example variants

### Feature cards

Use the default stagger container to sequence card entries with a moderate delay step.

### Navigation

Use `ease-auto-stagger-fast` for quick menu reveal sequences.

### Timelines

Use `ease-auto-stagger-slow` when you want more pronounced sequential pacing.

## Accessibility

- Uses `prefers-reduced-motion: reduce` to reset all delays to `0ms` for users who request reduced motion.
- Works with existing EaseMotion animation classes by only setting `animation-delay` on direct children.

## Why it fits EaseMotion CSS

It keeps motion declarative, lightweight, and human-readable. This utility removes the need for extra delay helper classes while still allowing existing animation utilities to control the actual animation behavior.
