# CSS Loader Initialization Stress Tests

## Overview

This documentation covers stability scenarios for repeated CSS loader
initialization and reinitialization.

The goal is to identify unexpected behavior when loader initialization
occurs repeatedly, rapidly, or across multiple elements.

## Related Issue

Closes #76411

## Test Scenarios

### 1. Repeated Initialization

The same loader target is initialized multiple times.

Expected behavior:

- The loader remains stable.
- No unexpected duplicate visual effects appear.
- Existing state is not corrupted.

### 2. Rapid Initialization

Initialization requests occur within a short period.

Expected behavior:

- The loader remains responsive.
- No inconsistent intermediate state is produced.
- Animation behavior remains predictable.

### 3. Multiple Elements

Several loader elements are initialized independently.

Expected behavior:

- Each loader maintains its own state.
- One loader does not interfere with another.
- All instances render consistently.

### 4. Repeated Cleanup

Initialization and cleanup operations are repeated.

Expected behavior:

- Cleanup leaves no unexpected state behind.
- Reinitialization works correctly after cleanup.
- Duplicate effects are not accumulated.

### 5. State Consistency

The loader is subjected to multiple initialization cycles.

Expected behavior:

- The final state remains predictable.
- Initialization does not progressively alter the loader.
- Repeated cycles produce consistent results.

### 6. Unexpected Duplicate Effects

Repeated initialization is checked for duplicated animation layers,
styles, listeners, or other visual effects.

Expected behavior:

- Only the expected effect is visible.
- Reinitialization does not multiply the animation.
- No unexpected DOM artifacts are produced.

## Manual Verification

Open `demo.html` directly in a modern browser.

Verify:

1. Each loader renders correctly.
2. Multiple loaders animate independently.
3. No visual duplication appears after repeated lifecycle operations.
4. The animation remains stable during rapid interactions.
5. The layout remains usable on smaller screens.
6. `prefers-reduced-motion` disables the loader animations.

## Browser Coverage

The scenarios should be checked in:

- Chrome
- Firefox
- Edge
- Safari

## Expected Outcome

Repeated loader initialization and cleanup should remain stable without
duplicate effects, corrupted state, or unexpected visual artifacts.

## Accessibility

The demonstration includes support for:

```css
@media (prefers-reduced-motion: reduce)