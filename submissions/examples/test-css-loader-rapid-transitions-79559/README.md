# Test: CSS loader behavior under rapid state transitions

Tests that CSS loader animations behave consistently under rapid start/stop/restart/reset operations, leaving no stale animation classes, duplicate states, or incorrect final loader state.

## What it does
- Asserts the compiled CSS bundle is present and the loader keyframes are defined exactly once (no duplicate states).
- Asserts `prefers-reduced-motion` disables loader animation.
- Asserts loaders do not freeze in an intermediate (stale) end-state on rapid restart.
- Asserts rapid-restart safety: the keyframe name is stable (no per-instance suffix that could leak references).

## Files
- `loader-state-transitions.test.js` — Jest tests parsing the published `easemotion.min.css` (real CSS, no mocks)
- `demo.html` — a rapid-toggle harness demonstrating the transitions under test
- `style.css` — demo harness styles
- `harness.js` — minimal vanilla JS to exercise rapid toggling
- `README.md` — this guide

## Running the tests
The repo uses Jest (see `tests/`). Add this file alongside the existing test suite and run:
```bash
npm test
```
The tests read the real compiled `easemotion.min.css` from the repo root, so they exercise actual published behaviour rather than mocked expectations.

## Why this matters
Repeated start/stop/restart/reset operations can leave stale animation classes, duplicate states, or an incorrect final loader state if the CSS is structured poorly (e.g. per-instance keyframe names or missing fill-mode handling). These tests guard against regressions.

Closes #79559
