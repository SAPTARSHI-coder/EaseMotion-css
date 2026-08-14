# Motion Profile

## Overview

`motion-profile` is a reusable SCSS mixin for applying complete animation timing profiles from SCSS maps. Define duration, easing, and optional animation behavior once, then include the profile wherever a component needs the same motion language.

## Profile Keys

| Key               | Required | CSS property                |
| ----------------- | -------- | --------------------------- |
| `duration`        | Yes      | `animation-duration`        |
| `easing`          | Yes      | `animation-timing-function` |
| `delay`           | No       | `animation-delay`           |
| `fill-mode`       | No       | `animation-fill-mode`       |
| `direction`       | No       | `animation-direction`       |
| `iteration-count` | No       | `animation-iteration-count` |
| `play-state`      | No       | `animation-play-state`      |

## Example Usage

```scss
@use "motion-profile" as *;

$comfortable: (
  duration: 450ms,
  easing: ease-out,
  delay: 80ms,
  fill-mode: both,
);

$expressive: (
  duration: 700ms,
  easing: cubic-bezier(0.22, 1, 0.36, 1),
  delay: 120ms,
  fill-mode: both,
  iteration-count: 1,
);

.card {
  @include motion-profile($comfortable);
}

.banner {
  @include motion-profile($expressive);
}
```

## Generated Output

```css
.card {
  animation-duration: 450ms;
  animation-timing-function: ease-out;
  animation-delay: 80ms;
  animation-fill-mode: both;
}

.banner {
  animation-duration: 700ms;
  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
  animation-delay: 120ms;
  animation-fill-mode: both;
  animation-iteration-count: 1;
}
```

## Why Motion Profile?

Reusable motion profiles keep animation timing consistent across components without adding JavaScript, custom build logic, or repeated declarations. Teams can tune a profile in one place and reuse the same duration, easing, and animation behavior throughout a project.
