# _micro-interaction-button-ripple-effect-mixins-tw.scss

A pure-CSS, zero-JavaScript "material-style" ripple micro-interaction for EaseMotion CSS.

## What it does

Adds a centered ripple that expands and fades out of a button (or any clickable element) on `:active`. Since there's no JavaScript tracking the actual click coordinates, the ripple originates from the element's center — a deliberate tradeoff that keeps this a pure-CSS utility with no event listeners required.

Two mixins work together:

- **`ease-ripple-container`** — sets up `position: relative`, `overflow: hidden`, and `isolation: isolate` on the host element so the ripple is positioned and clipped correctly.
- **`ease-ripple($size, $color)`** — generates the `::after` ripple pseudo-element and its `:active` expand animation.

Respects `prefers-reduced-motion` by hiding the ripple pseudo-element entirely for users who've requested reduced motion.

## Parameters

### `ease-ripple-container`
No parameters.

### `ease-ripple($size, $color)`

| Parameter | Type          | Default                | Description                                                                 |
| --------- | ------------- | ------------------------ | ------------------------------------------------------------------------------ |
| `$size`   | Length/%      | `100%`                    | Starting diameter of the ripple, relative to the element. Increase for a ripple that starts larger before expanding. |
| `$color`  | RGB triplet   | `$ease-ripple-color`      | Color of the ripple, as an unquoted `r, g, b` triplet (not a hex/named color). |

### Configuration variables

| Variable                     | Default             | Description                                    |
| ------------------------------ | -------------------- | ------------------------------------------------- |
| `$ease-ripple-color`           | `255, 255, 255`      | Default ripple color (white, for colored buttons). |
| `$ease-ripple-duration`        | `550ms`               | Duration of the expand-and-fade animation.         |
| `$ease-ripple-timing`          | `cubic-bezier(0.4, 0, 0.2, 1)` | Easing curve for the ripple animation.  |
| `$ease-ripple-opacity-start`   | `0.35`                | Starting opacity of the ripple at the moment of press. |
| `$ease-ripple-scale-end`       | `2.5`                 | Final scale multiplier the ripple grows to before fading out. |

## Usage

```scss
@use "micro-interaction-button-ripple-effect-mixins-tw" as *;

// Basic button ripple
.btn {
  @include ease-ripple-container;
  @include ease-ripple;
}

// Dark ripple for a light/outline button
.btn--outline {
  @include ease-ripple-container;
  @include ease-ripple($color: 15, 17, 23);
}

// Larger starting ripple, custom duration via the global variable
$ease-ripple-duration: 700ms;

.btn--large {
  @include ease-ripple-container;
  @include ease-ripple($size: 140%);
}
```

## CSS compilation results

`@include ease-ripple;` with all defaults compiles to approximately:

```css
.btn::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.35) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  pointer-events: none;
}

.btn:active::after {
  animation: ease-ripple-expand 550ms cubic-bezier(0.4, 0, 0.2, 1);
}

@media (prefers-reduced-motion: reduce) {
  .btn::after {
    display: none;
  }
}

@keyframes ease-ripple-expand {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0.35;
  }
  100% {
    transform: translate(-50%, -50%) scale(2.5);
    opacity: 0;
  }
}
```

## Why this fits EaseMotion CSS

Ripple feedback is one of the most requested micro-interactions for buttons, but most implementations require JavaScript click-coordinate tracking. This module gives EaseMotion a zero-dependency, CSS-only approximation that's good enough for most UI feedback needs, keeps the library's "no runtime" philosophy intact, and composes cleanly with EaseMotion's other hover/press utilities (e.g. `ease-hover-scale`) on the same element.
