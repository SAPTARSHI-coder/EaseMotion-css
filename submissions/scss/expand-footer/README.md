# Expand Footer Mixin

A reusable SCSS mixin that collapses a footer to a fixed preview height and
smoothly expands to full height on hover or keyboard focus (`:focus-within`).

## Usage

```scss
@use "expand-footer" as *;

.site-footer {
  @include ease-expand-footer(0.4s);
}
```

## Parameters

| Parameter          | Default     | Description                              |
|---------------------|-------------|-------------------------------------------|
| `$duration`          | `0.4s`      | Transition duration                       |
| `$collapsed-height`  | `60px`      | Height of the footer in its collapsed state |
| `$easing`            | `ease-in-out` | Transition timing function              |

## Why it fits EaseMotion CSS

A small, single-purpose, readable mixin with sensible defaults, matching the
project's animation-first, human-readable philosophy. Fully respects
`prefers-reduced-motion` by disabling the transition for users who prefer
reduced motion.

## Demo

Open `demo.html` in a browser and hover over (or Tab-focus into) the footer
to see the expand effect.
