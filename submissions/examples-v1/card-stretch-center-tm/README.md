# Card — Stretch and Center Alignment

## What does this do?

Adds two card content alignment utilities:

- `.ease-card-stretch` — the body fills all available vertical
  space (useful for grid cards with varying body lengths)
- `.ease-card-center` — the body content is centered both
  horizontally and vertically

## How is it used?

Apply the modifier to a `.ease-card`:

    <div class="ease-card ease-card-stretch">
      <h2>Stretched body</h2>
      <p>Body fills available height.</p>
    </div>

    <div class="ease-card ease-card-center">
      <h2>Centered</h2>
      <p>Body is centered.</p>
    </div>

## Why is it useful?

In CSS grid layouts, sibling cards often have different content
heights. `.ease-card-stretch` makes all body sections equal
height. `.ease-card-center` is useful for compact card designs
where the content is a single short element.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` to see both alignment modes.

## Contribution Notes

- Pure CSS addition
- Requires the parent to be a flex or grid container for stretch
  to work as expected
