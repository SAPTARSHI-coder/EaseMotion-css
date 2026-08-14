# Motion Tokens

## Overview

Motion Tokens is a lightweight SCSS utility for retrieving standardized animation values from reusable token maps. It provides CSS-first functions for durations, delays, easing functions, and distances without generating CSS automatically.

## Available Functions

| Function                  | Description                                                        |
| ------------------------- | ------------------------------------------------------------------ |
| `motion-duration($token)` | Returns a duration token value for animation or transition timing. |
| `motion-delay($token)`    | Returns a delay token value for staggered or deferred motion.      |
| `motion-easing($token)`   | Returns an easing token value for animation or transition curves.  |
| `motion-distance($token)` | Returns a distance token value for movement-based transforms.      |

Unknown tokens raise a meaningful SCSS `@error`.

## Available Tokens

| Duration Token | Value   |
| -------------- | ------- |
| `instant`      | `0ms`   |
| `fast`         | `200ms` |
| `normal`       | `400ms` |
| `slow`         | `700ms` |

| Delay Token | Value   |
| ----------- | ------- |
| `none`      | `0ms`   |
| `xs`        | `50ms`  |
| `sm`        | `100ms` |
| `md`        | `150ms` |
| `lg`        | `250ms` |

| Easing Token | Value                            |
| ------------ | -------------------------------- |
| `linear`     | `linear`                         |
| `smooth`     | `ease-out`                       |
| `standard`   | `ease`                           |
| `emphasized` | `cubic-bezier(0.22, 1, 0.36, 1)` |

| Distance Token | Value  |
| -------------- | ------ |
| `xs`           | `4px`  |
| `sm`           | `8px`  |
| `md`           | `16px` |
| `lg`           | `24px` |
| `xl`           | `40px` |

## Example Usage

```scss
@use "motion-tokens" as *;

.button {
  animation-duration: motion-duration(fast);
  animation-delay: motion-delay(md);
  animation-timing-function: motion-easing(smooth);
  transform: translateY(motion-distance(sm));
}
```

Generated CSS:

```css
.button {
  animation-duration: 200ms;
  animation-delay: 150ms;
  animation-timing-function: ease-out;
  transform: translateY(8px);
}
```

## Why Motion Tokens?

Motion token functions replace hardcoded animation values with shared, named tokens. This keeps motion choices consistent across a project, makes timing and movement easier to update, and improves maintainability while staying SCSS-only with no JavaScript, HTML, generated CSS, React, external libraries, or additional files.
