# Animation Cleanup & Stale State Regression Tests

## Issue

Closes #73181

## Overview

This submission adds a self-contained regression demo for verifying that
animation state is properly cleaned up after completion, cancellation,
element removal, and repeated animation cycles.

The tests are designed to detect stale animation references and callbacks
that could incorrectly affect subsequent animations.

## Regression Scenarios

The demo covers:

- Completed animation cleanup
- Cancelled animation cleanup
- Restart after cancellation
- Element removal during animation
- Reusing an element for another animation
- Repeated start/cancel cycles
- Prevention of stale animation references
- Prevention of stale completion/cancellation callbacks

## How to Test

Open `demo.html` directly in a browser.

Use the available controls:

1. **Start** — starts a new animation.
2. **Cancel** — cancels the active animation.
3. **Restart** — cancels the previous animation and creates a fresh one.
4. **Remove Element** — removes the animation target and clears its state.
5. **Reattach Element** — creates a fresh target without the previous animation state.
6. **Rapid Start/Cancel** — performs repeated start/cancel cycles.
7. **Clear Log** — clears the event output.

## Expected Behavior

After an animation finishes or is cancelled:

- No stale animation reference should remain.
- A new animation should start cleanly.
- Removed elements should not retain active animation state.
- Repeated start/cancel operations should not produce unexpected behavior.
- Completion and cancellation callbacks should correspond only to the active animation.

## Files

- `demo.html` — interactive regression test
- `style.css` — demo styling
- `README.md` — test documentation

## Scope

This submission only adds regression-test documentation/demo files under
`submissions/` and does not modify `core/` or `components/`.