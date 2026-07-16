# SCSS Utility: Accordion Expand/Collapse Utilities

A high-performance SCSS utility partial that handles smooth vertical expand/collapse interface layouts without rendering-cycle layout drops or content clipping.

## Structural Parameters

- `$max-height` (Default: `2000px`) - Safety upper boundary threshold to support rich text volumes.
- `$duration` (Default: `tokens.$ease-duration-md`) - Component transition velocity.
- `$easing` (Default: `tokens.$ease-ease-standard`) - Cubic-bezier vector tracking alignment.
- `$collapsed-op` / `$expanded-op` - Controls opacity fades concurrently with size shifts.

---

## Technical Integration Guide

### Sass Framework Integration
```scss
@use "../../scss/mixins" as ease;
@use "../../scss/tokens" as tokens;

.custom-faq-drawer {
  @include ease.ease-accordion(
    $max-height: 1200px,
    $duration: tokens.$ease-duration-lg
  );
}

```
---
Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**