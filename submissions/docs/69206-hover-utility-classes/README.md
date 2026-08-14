# Hover Utility Classes Test

## Overview

This submission provides a visual demonstration for commonly used EaseMotion hover utility classes.

The demo covers:

* `ease-hover-grow`
* `ease-hover-lift`
* `ease-hover-glow`
* `ease-hover-shimmer`

## Purpose

The goal is to make the expected hover behavior easy to verify and to help identify unexpected changes in hover-related styles.

## Utilities Covered

| Utility              | Expected Behavior                      |
| -------------------- | -------------------------------------- |
| `ease-hover-grow`    | Applies a grow/scale effect on hover   |
| `ease-hover-lift`    | Moves the element upward on hover      |
| `ease-hover-glow`    | Applies a glow effect on hover         |
| `ease-hover-shimmer` | Displays a shimmer transition on hover |

## Usage

Apply the desired utility class to an element:

```html
<div class="ease-hover-grow">
  Hover me
</div>
```

Other supported utilities can be used in the same way:

```html
<div class="ease-hover-lift">Hover me</div>
<div class="ease-hover-glow">Hover me</div>
<div class="ease-hover-shimmer">Hover me</div>
```

## Expected Result

Each hover utility should apply its intended hover-related behavior without unexpectedly changing unrelated properties.

## Testing

Open `demo.html` directly in a browser and hover over each card.

Verify that:

1. Grow scales the element.
2. Lift moves the element upward.
3. Glow produces the expected glow effect.
4. Shimmer produces the expected shimmer transition.
5. The utilities do not interfere with one another.

## Related Issue

Closes #69206
