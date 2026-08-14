```markdown
# Concurrent CSS Loaders

## Issue

#74931

## Purpose

This demo validates the behavior of multiple CSS loaders running at the
same time while maintaining independent animation states.

## Covered Cases

- Multiple loaders on the same page
- Multiple loaders on the same component
- Independent loader states
- One loader stopping while another continues
- Concurrent animation cleanup
- Shared CSS class conflicts

## How to Test

Open `demo.html` directly in a browser.

Use the individual loader buttons to start and stop loaders independently.

Use the global controls to:

- Start all loaders
- Stop all loaders
- Restart all loaders

## Expected Behavior

Each loader should maintain its own animation state.

Stopping one loader must not stop or affect the other loaders.

Restarting one loader should restart only that loader.

Running multiple loaders concurrently should not create animation conflicts
or unexpected visual behavior.

## Files

- `demo.html` — Interactive concurrent loader test.
- `style.css` — Loader styling and animation rules.
- `README.md` — Test coverage and expected behavior.

## Browser Compatibility

The demo works by opening `demo.html` directly in a modern browser.
```
