# Card Modifier Coverage Demo

## What does this do?
Self-contained demo of the card modifier classes
(`.ease-card-hover`, `.ease-card-glow`, `.ease-card-glass`,
`.ease-card-neumorphic`, `.ease-card-flat`, `.ease-card-outlined`,
`.ease-card-image`) defined in `components/cards.css`. Created as
a side-effect of issue #5522 which proposed smoke-test coverage
for these classes.

## How is it used?
Apply a modifier class alongside `.ease-card` to get the desired
visual treatment:

    <div class="ease-card ease-card-hover">Hover me</div>
    <div class="ease-card ease-card-glow">Glow on hover</div>
    <div class="ease-card ease-card-glass">Glassmorphism</div>
    <div class="ease-card ease-card-flat">No border</div>

## Why is this useful?
The card component exposes seven modifier classes but the smoke
test in `tests/smoke.test.js` only asserted the base `.ease-card`
selector. Without coverage, a future refactor could silently remove
a modifier and there would be no failing test to catch it.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` directly in your browser to see each card
modifier in a side-by-side grid.

## Contribution Notes
- Linked to upstream issue #5522
- The proposed smoke test additions in #5522 modify
  `tests/smoke.test.js`, which is currently frozen for
  contributor PRs (per maintainer feedback on PR #5560)
- Maintainers are encouraged to add the corresponding
  `expect(css).toContain(...)` assertions in
  `tests/smoke.test.js` directly
- This submission does not modify any core framework file
