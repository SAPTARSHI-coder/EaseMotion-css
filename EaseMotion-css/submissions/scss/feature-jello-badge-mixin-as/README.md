# Jello Badge Mixin

## Overview

A reusable SCSS mixin that adds a smooth jello animation to interactive badge elements.

## Features

- Smooth jello animation
- Reusable SCSS mixin
- Accessible focus styles
- Supports `prefers-reduced-motion`
- Easy to customize

## Usage

```scss
@use "ease-motion" as *;

.badge {
  @include ease-jello-badge-mixin-as(0.5s);
}
```

## Accessibility

- Includes keyboard focus styling.
- Respects the user's `prefers-reduced-motion` setting.

## Why use it?

This mixin provides a lightweight interactive animation suitable for badges, labels, and status indicators while following EaseMotion CSS contribution guidelines.