# ease-sling-in-right

## Description

A fast entrance animation that slings an element into view from the far right with an elastic overshoot before settling into position.

Animation behavior:

```css
translateX(200%)
→ overshoot
→ translateX(0)
```

## Usage

```html
<div class="ease-sling-in-right">
    Content
</div>
```

## Features

- Elastic entrance motion
- Overshoot effect
- Responsive friendly
- Stagger-compatible
- Pure CSS implementation
- Reduced-motion support

## Accessibility

Supports:

```css
prefers-reduced-motion
```

to disable animations for users who prefer reduced motion.

## Why EaseMotion CSS?

Provides a reusable motion primitive for dashboards, onboarding screens, cards, notifications, and UI entrances while following EaseMotion CSS's animation-first philosophy.