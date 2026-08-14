# ease-rotate-in-up-right

## Description

A rotate-in animation that enters from the lower-left direction while using a top-right transform origin.

Animation behavior:

```css
transform-origin: right top;
rotate(-90deg);
opacity: 0 → 1;
```

## Usage

```html
<div class="ease-rotate-in-up-right">
    Content
</div>
```

## Features

- Rotate-in entrance effect
- Top-right transform origin
- Opacity transition
- Stagger-friendly
- Accessibility support
- Pure CSS implementation

## Accessibility

Supports:

```css
prefers-reduced-motion
```

to disable animation when users request reduced motion.

## Why EaseMotion CSS?

Provides a reusable motion primitive for dashboards, cards, onboarding flows, and UI sections while maintaining EaseMotion CSS's animation-first philosophy.