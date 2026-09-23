# EaseMotion — Curtain Slide Reveal Door Pattern

An ultra-performant, hardware-accelerated split-curtain reveal animation pattern for the **EaseMotion** core library.

## Features

- **60 FPS Guaranteed:** Utilizes composited layer properties (`transform: translate3d()` and `opacity`) to guarantee off-thread GPU rendering.
- **Configurable SCSS Mixin:** Flexible SCSS mixin supporting customizable timing and duration variables.
- **Accessibility:** Fully supports `prefers-reduced-motion` media queries for accessible UX.
- **Zero Layout Shifts:** Causes zero repaints or reflows during playback.

## Quick Start

### 1. SCSS Mixin

```scss
@use 'easemotion/core/animations/curtain-slide-reveal-door' as *;

.my-card {
  @include ease-curtain-slide-reveal-door(
    $duration: 1s, 
    $timing: cubic-bezier(0.77, 0, 0.175, 1)
  );
}
