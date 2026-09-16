# Animation — Fade Up and Fade Down

## What does this do?
Adds two animation utilities that combine a vertical translation
with the existing fade:
- `.ease-fade-up` — fades in while moving up
- `.ease-fade-down` — fades in while moving down

## How is it used?
Apply the class to an element:

    <div class="ease-fade-up">Slides up into view</div>
    <div class="ease-fade-down">Slides down into view</div>

## Why is it useful?
The framework has `.ease-fade-in` (just opacity), `.ease-slide-up`
and `.ease-slide-down` (translation only with no scale), but no
combined fade-and-translate. This is one of the most common
entrance animations in modern UIs.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` in your browser and reload to replay the
animations.

## Contribution Notes
- Pure CSS addition
- Respects `prefers-reduced-motion`
