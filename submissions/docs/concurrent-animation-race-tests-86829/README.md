# Concurrent Animation Race Tests

## Related Issue

#86829

## Purpose

This submission provides a browser-based test suite for checking animation
behavior when multiple animation operations occur at nearly the same time.

The tests focus on potential race conditions during concurrent animation
execution.

## Test Scenarios

The demo covers:

- Two animations started simultaneously
- Animation completion while another animation starts
- Cancel and completion operations occurring close together
- Multiple animation callbacks triggered in the same cycle
- Rapid DOM updates while animations are running
- Resetting animation state after concurrent operations

## Expected Behavior

The animation system should:

- Remain stable during concurrent operations
- Avoid unexpected crashes
- Maintain a predictable final state
- Handle cancellation correctly
- Avoid incorrect callback behavior
- Continue functioning after rapid DOM updates
- Keep the layout intact

## How to Test

Open `demo.html` directly in a browser.

Use the available buttons to run each concurrency scenario:

1. **Start Simultaneously**
   - Starts two animations during the same event cycle.

2. **Complete + Start**
   - Starts another animation close to the expected completion of the
     first animation.

3. **Cancel + Complete**
   - Cancels and restarts animation operations during an active sequence.

4. **Multiple Callbacks**
   - Triggers several animation operations in the same event cycle.

5. **Rapid DOM Updates**
   - Performs repeated DOM updates while animations are running.

6. **Reset**
   - Clears the active animation state and test counters.

## Files

- `demo.html` — interactive concurrency test demo
- `style.css` — animation and layout styles
- `README.md` — test documentation

## Browser Testing

Tested manually in:

- Chrome
- Firefox
- Edge

## Related Issue

This submission addresses issue #86829.