# Animation Cleanup and Memory Leak Regression Test

## Overview

This regression test demonstrates safe animation cleanup during repeated
animation cycles and DOM element removal.

It checks that animations do not leave stale state, duplicate event handlers,
or active timers after cleanup.

## What Is Tested

- Repeated animation start and stop
- DOM element removal during animation
- Event listener cleanup
- Timer cleanup
- Re-initialization after cleanup
- Repeated animation cycles
- Final cleanup state

## Expected Behavior

After cleanup:

- The animation stops correctly.
- Removed elements no longer retain animation state.
- Event listeners are not duplicated.
- Timers are cleared.
- Re-initializing the animation does not create duplicate handlers.
- Repeated cycles remain stable.

## How to Test

Open `demo.html` directly in a browser.

Use the controls to:

1. Start the animation.
2. Stop the animation.
3. Remove the animated element.
4. Re-initialize the animation.
5. Run multiple animation cycles.
6. Verify that cleanup remains successful.

## Related Issue

Closes #86573