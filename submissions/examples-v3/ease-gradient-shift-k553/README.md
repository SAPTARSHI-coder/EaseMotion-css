# Ease Gradient Shift

## What does this do?
Animates a rotating **conic-gradient** background (via CSS `@property`-style
custom property animation on the gradient's start angle), instead of the more
common `background-position` linear shift. Includes a hover interaction that
smoothly speeds up the rotation.

## How is it different from a typical gradient-shift utility?
- Uses `conic-gradient` + animated angle, not `background-size` + `background-position`.
- Adds a built-in hover speed-boost as an interactive affordance, not just a
  static looping animation.
- Includes a graceful `@supports` fallback to a static linear gradient for
  browsers with limited conic-gradient animation support.

## How is it used?
\`\`\`html
<section class="ease-gradient-shift">
  Animated gradient content
</section>

<button class="ease-gradient-shift ease-gradient-shift--btn">
  Call to Action
</button>

<div class="ease-gradient-shift ease-gradient-shift--card">
  Card content
</div>
\`\`\`

## Customization
Override these CSS custom properties per-element:
- `--egs-duration`: base rotation speed (default `8s`)
- `--egs-color-1`, `--egs-color-2`, `--egs-color-3`: gradient stops

## Why is this useful?
Gives contributors a visually distinct alternative to a plain position-shifted
gradient — good for hero sections, CTA buttons, and cards that want a more
dynamic, "living" background without extra JS.