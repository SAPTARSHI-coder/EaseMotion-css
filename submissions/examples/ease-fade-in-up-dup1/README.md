# ease-fade-in-up

Element fades in while gently rising upward from its starting position — the most common entrance animation pattern on the web.

## Classes

| Class | Effect |
|-------|--------|
| `.ease-fade-in-up` | Fades from opacity 0 → 1 while translating from `--ease-rise-distance` → 0 |

## Custom property

| Property | Default | Description |
|----------|---------|--------------|
| `--ease-rise-distance` | `20px` | How far the element rises during the entrance |

## Usage

```html
<!-- Default 20px rise -->
<div class="ease-fade-in-up">Content</div>

<!-- Custom rise distance -->
<div class="ease-fade-in-up" style="--ease-rise-distance: 60px;">Content</div>
```

## Why is this useful?

The single most common entrance pattern across landing pages, cards, and content sections — opacity + translateY combined into one named class with a configurable rise distance, instead of writing the same keyframe by hand in every project.

## Tech Stack

- HTML
- CSS only — no JavaScript

## Accessibility

Includes `@media (prefers-reduced-motion: reduce)`, disabling the animation and snapping the element directly to its final visible, resting position.

## Why it fits EaseMotion CSS

Follows the existing `ease-kf-` keyframe naming convention and `var(--ease-speed-*)`/`var(--ease-ease)` timing tokens used throughout `core/animations.css`, and exposes a configurable `--ease-rise-distance` custom property consistent with the framework's token-driven design philosophy.

Closes #11826
