# Motion Blueprint Mixin

## Overview

`motion-blueprint` is a reusable SCSS mixin that turns a single animation configuration map into CSS animation declarations. It validates the required animation fields, outputs only keys that are present, and keeps animation setup readable across components.

## Blueprint Keys

Required keys:

- `animation` -> `animation-name`
- `duration` -> `animation-duration`

Optional keys:

- `delay` -> `animation-delay`
- `timing-function` -> `animation-timing-function`
- `fill-mode` -> `animation-fill-mode`
- `direction` -> `animation-direction`
- `iteration-count` -> `animation-iteration-count`
- `play-state` -> `animation-play-state`

## Example Usage

```scss
@use "motion-blueprint" as *;

$hero: (
  animation: fade-up,
  duration: 600ms,
  delay: 150ms,
  timing-function: ease-out,
  fill-mode: both,
);

.hero {
  @include motion-blueprint($hero);
}
```

## Generated Output

```css
.hero {
  animation-name: fade-up;
  animation-duration: 600ms;
  animation-delay: 150ms;
  animation-timing-function: ease-out;
  animation-fill-mode: both;
}
```

## Why Motion Blueprint?

Animation declarations often repeat the same group of properties with small variations. A map-based blueprint keeps those values together, makes required animation settings explicit, and avoids generating unused or empty CSS. This helps teams define motion patterns once and apply them consistently wherever animation behavior is needed.
