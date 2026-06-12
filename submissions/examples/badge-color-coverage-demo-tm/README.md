# Badge Color Variant Coverage Demo

## What does this do?

Self-contained demo of the existing badge color variants
(`.ease-badge`, `.ease-badge-danger`, `.ease-badge-success`)
defined in `components/badges.css`. Linked to issue #5508
which proposed smoke-test coverage for the badge component.

## How is it used?

The badge is a small inline-flex element. Apply a color
variant to switch the background:

    <span class="ease-badge">12</span>
    <span class="ease-badge ease-badge-danger">3</span>
    <span class="ease-badge ease-badge-success">5</span>

## Why is this useful?

The badge component is part of the framework's UI kit and
its color variants should be covered by the smoke test. This
submission shows the existing variants in a real layout and
documents the proposal so that maintainers can add the
corresponding `expect(css).toContain(...)` assertions
themselves.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser to see the three
existing badge variants in a notification-style layout.

## Contribution Notes

- Linked to upstream issue #5508
- The proposed smoke test additions in #5508 are out of scope
  for this submission since `tests/` is a framework file that
  contributors cannot modify through PR
- See also #5515 which proposes adding info, warning, and
  neutral badge color variants as a self-contained submission
