# Card — Elevated on Hover

## What does this do?
Adds `.ease-card-elevated-on-hover` — a card that has no shadow
at rest but lifts to a strong shadow on hover.

## How is it used?
Apply the modifier alongside `.ease-card`:

    <div class="ease-card ease-card-elevated-on-hover">
      Hover me for elevation
    </div>

## Why is it useful?
The existing `.ease-card-hover` lifts on hover but starts with a
subtle resting state. Some content (especially in dense feeds)
should look completely flat at rest and only elevate on
interaction. This fills that gap.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` in your browser and hover the demo cards.

## Contribution Notes
- Pure CSS addition
- Respects `prefers-reduced-motion`
