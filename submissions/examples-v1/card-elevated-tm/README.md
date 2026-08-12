# Elevated Card Variant

## What does this do?
Adds an `.ease-card-elevated` modifier class for cards that should
have a stronger resting shadow than the default `.ease-card` and
lift further on hover.

## How is it used?
Apply the modifier alongside `.ease-card`:

    <div class="ease-card ease-card-elevated">
      Important content
    </div>

## Why is it useful?
The default `.ease-card` uses `--ease-shadow-sm` and
`.ease-card-shadow` uses `--ease-shadow-lg`. There was no in-between
variant for content that needs visual emphasis without going all
the way to the lg shadow. `.ease-card-elevated` fills that gap with
a medium resting shadow and an extra-large hover shadow.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` directly in your browser to see the new
`.ease-card-elevated` class with its hover lift.

## Contribution Notes
- Pure CSS addition
- Respects `prefers-reduced-motion`
<!-- refreshed -->
