# Button — Warning Color Variant

## What does this do?

Adds `.ease-btn-warning` to the button component, filling the gap
in the color-variant set (primary, success, danger, info were
present; warning was missing).

## How is it used?

Apply the variant alongside `.ease-btn`:

    <button class="ease-btn ease-btn-warning">Warning</button>

## Why is it useful?

The framework exposes the warning color via the design tokens
but the button component did not include a `.ease-btn-warning`
variant. This submission closes the gap and matches the existing
color naming pattern.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` to see the new button variant.

## Contribution Notes

- Pure CSS addition
- Mirrors the pattern of `.ease-btn-success` and `.ease-btn-danger`
