# Entrance Fade-Up Animation

An entrance animation that fades elements in while sliding them up slightly — combining opacity and `translateY` into a single class, with stagger-delay helpers for sequencing multiple elements.

## How this differs from existing fade animations

`core/animations.css` already has `.ease-fade-in` (opacity-only, no vertical motion). This adds vertical motion to create a more dynamic entrance effect, plus 5 stagger-delay utility classes that the existing fade-in doesn't provide.

## Classes

| Class | Effect |
|-------|--------|
| `.ease-fade-up` | Fades in + slides up 20px on entrance |
| `.ease-fade-up-delay-1` to `-5` | Adds 0.1s-0.5s animation-delay for staggering |

## Usage

```html
<div class="card ease-fade-up">First</div>
<div class="card ease-fade-up ease-fade-up-delay-1">Second</div>
<div class="card ease-fade-up ease-fade-up-delay-2">Third</div>
```

## Why is this useful?

A common pattern for landing page sections, card grids, and list items appearing on page load — staggering each one slightly creates a more polished, sequential reveal instead of everything appearing at once.

## Tech Stack

- HTML
- CSS only — no JavaScript

## Accessibility

Includes `@media (prefers-reduced-motion: reduce)`, disabling the animation entirely and snapping elements straight to their final visible state.

## Why it fits EaseMotion CSS

Follows the existing `ease-kf-` keyframe naming convention and `var(--ease-speed-*)`/`var(--ease-ease)` timing tokens used throughout `core/animations.css`, and mirrors the stagger-delay pattern already established for `.ease-reveal-delay-N`.

Closes #11689
