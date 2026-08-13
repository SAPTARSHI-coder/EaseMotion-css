```markdown
# CSS Loader Timing Edge Cases

## Issue

#74856

## Purpose

This demo provides regression coverage for CSS loader animation timing
configurations and verifies that the loader remains predictable when timing
values change.

## Covered Cases

- 0ms duration
- Very small duration
- Large duration
- Missing duration
- Invalid duration
- Delay + duration combinations
- Repeated timing changes

## How to Test

Open `demo.html` directly in a browser.

Use each timing button and observe the loader and status message.

The **Repeated Timing Changes** button rapidly changes the animation timing
configuration to verify that repeated updates do not leave the loader in an
unexpected state.

## Expected Behavior

- 0ms timing should not break the page.
- Very small durations should remain responsive.
- Large durations should continue running normally.
- Missing timing values should fall back to browser/CSS defaults.
- Invalid duration values should not break the animation.
- Delay and duration should work together.
- Repeated timing changes should not leave the loader stuck.

## Files

- `demo.html` — Interactive timing test page.
- `style.css` — Loader animation and styling.
- `README.md` — Test coverage and expected behavior.

## Browser Compatibility

The demo is designed to run directly in modern browsers without a server.
```
