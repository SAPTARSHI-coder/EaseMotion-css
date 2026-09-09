# Rapid Animation State Stress Tests

## Related Issue

#86728

## Purpose

This submission provides a browser-based stress test for rapid animation
state changes.

## Test Scenarios

The demo covers:

- 100+ rapid start/stop operations
- Rapid animation restart
- Rapid direction changes
- Multiple animation state transitions
- Cancel → restart → cancel sequences
- Deterministic final animation state

## Expected Behavior

- No crashes should occur.
- Rapid state changes should remain stable.
- The animation should remain functional after repeated operations.
- The final animation state should be deterministic.
- The page layout should remain intact.

## How to Test

Open `demo.html` directly in a browser.

Use the available controls to trigger different animation state changes.

The **100x Rapid Test** button performs 100 rapid animation state
transitions.

## Files

- `demo.html` — interactive stress-test demo
- `style.css` — animation and layout styles
- `README.md` — test documentation

## Related Issue

This work addresses issue #86728.