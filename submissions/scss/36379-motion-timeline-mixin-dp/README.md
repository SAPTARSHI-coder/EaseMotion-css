# Motion Timeline

## Overview

Motion Timeline is a lightweight SCSS mixin for generating sequential `animation-delay` values across repeated elements. It helps build staggered motion patterns without writing repetitive delay declarations by hand.

The mixin is fully CSS-first: it compiles to plain CSS, requires no JavaScript, and adds no runtime logic.

## Parameters

| Parameter | Default | Description |
| --- | --- | --- |
| `$count` | `5` | Number of sequential `:nth-child()` rules to generate. |
| `$delay` | `120ms` | Delay increment added between each generated element. |
| `$start` | `0ms` | Starting delay for the first generated element. |
| `$selector` | `"&"` | Target selector for the generated timeline. Supports explicit selectors like `".card"` and nested selectors using `"&"`. |

## Example Usage

```scss
@use "motion-timeline" as *;

@include motion-timeline(
  $count: 6,
  $delay: 100ms,
  $start: 50ms,
  $selector: ".card"
);
```

Nested usage with the default selector:

```scss
.list-item {
  @include motion-timeline;
}
```

## Generated Output

```css
.card:nth-child(1) {
  animation-delay: 50ms;
}

.card:nth-child(2) {
  animation-delay: 150ms;
}

.card:nth-child(3) {
  animation-delay: 250ms;
}

.card:nth-child(4) {
  animation-delay: 350ms;
}

.card:nth-child(5) {
  animation-delay: 450ms;
}

.card:nth-child(6) {
  animation-delay: 550ms;
}
```

## Why Motion Timeline?

Staggered motion often requires many repeated `animation-delay` declarations that differ only by a small increment. Motion Timeline centralizes that pattern in a reusable mixin, reducing copy-paste code while keeping the final CSS clean and predictable.

This aligns with EaseMotion CSS by making expressive motion easier to author without adding JavaScript, external dependencies, or runtime complexity. Designers and developers can configure the item count, timing interval, starting delay, and selector while preserving a lightweight CSS-first workflow.
