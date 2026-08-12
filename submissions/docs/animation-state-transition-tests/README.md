# Animation State Transition Tests

## Overview

This submission documents regression scenarios for animation state
transitions in EaseMotion CSS.

## Covered Scenarios

- Idle to active transition
- Active to completed transition
- Repeated activation
- Rapid consecutive interactions
- Interrupted animations
- Animation re-triggering
- State reset after completion

## Expected Behavior

Animation utilities should transition between states without leaving
stale state behind.

After an animation completes or is interrupted, a subsequent interaction
should begin from the expected initial state.

Repeated runs should produce deterministic results.

## Testing Checklist

- Verify idle state before interaction.
- Trigger the animation and verify the active state.
- Allow the animation to complete and verify the final state.
- Trigger the animation repeatedly.
- Test rapid consecutive interactions.
- Interrupt an active animation.
- Re-trigger the animation.
- Verify that the state resets correctly.

## Demo

Open `demo.html` directly in a browser to view the related interaction
states.

## Related Issue

Closes #72283