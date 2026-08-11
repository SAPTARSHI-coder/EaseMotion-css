# Pseudo-Class :active State Demo

Demonstrates the :active pseudo-class for press feedback, showing active states on buttons, links, and interactive elements using EaseMotion's timing and shadow tokens for satisfying tactile feedback.

## Features

- Press-in button effects with box-shadow depth: buttons visually depress when clicked using `transform: translateY()` and `box-shadow: none`
- Multiple active state variants: press, shrink, glow pulse, flash, and color flash
- Icon buttons that invert colors on press (background and text swap)
- Active card states using scale and shadow transitions for clickable card patterns
- Navigation links that fill with primary color on press
- Active list items with padding and color transitions simulating tap feedback
- Dark mode support via `prefers-color-scheme: dark`
- Reduced motion support via `prefers-reduced-motion: reduce`
- Uses `--ease-glow-*` tokens for glow effects and `--ease-shadow-*` for depth

## Usage

```html
<button class="active-btn active-btn-press">Press Effect</button>
<div class="active-card" tabindex="0" role="button">
  <div class="active-card-title">Clickable Card</div>
</div>
```

## Why is it useful?

The `:active` pseudo-class provides immediate tactile feedback when a user clicks or taps an element. Using `--ease-speed-medium` (300ms) for transitions and `--ease-shadow-sm`/`--ease-shadow-lg` for depth creates a satisfying click feel that users expect from native applications. The `transform: scale()` reduction on press gives a physical "press-in" sensation.
