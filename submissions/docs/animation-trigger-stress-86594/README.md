# Rapid Animation Trigger Stress Test

## Overview

This regression test validates animation behavior when animations are
triggered repeatedly within very short time intervals.

The test focuses on rapid animation triggers, repeated class changes,
rapid hover-like interactions, concurrent animations, and deterministic
final states.

## Test Scenarios

The demo covers:

- Rapid animation triggering in milliseconds
- Repeated animation class addition and removal
- Rapid hover and unhover behavior
- Multiple animation triggers on the same element
- Concurrent animations across multiple elements
- Duplicate animation execution detection
- Deterministic final state validation

## Expected Behavior

During rapid animation triggering:

- Animations should not create duplicate active states.
- Repeated class changes should remain consistent.
- Rapid interactions should not leave stale animation classes.
- Multiple elements should animate independently.
- The final state should always be deterministic.
- The stress test should complete without unexpected animation states.

## How to Test

Open `demo.html` directly in a browser.

Use the available controls to:

1. Trigger a single animation.
2. Trigger rapid animation events.
3. Simulate rapid hover/unhover behavior.
4. Run multiple animations concurrently.
5. Run the complete stress test.
6. Check the validation results and final state.

## Validation

The demo reports:

- Total animation triggers
- Active animation states
- Duplicate animation executions
- Completed animation cycles
- Final deterministic state

## Related Issue

Closes #86594