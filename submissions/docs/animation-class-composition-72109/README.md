# Animation Class Composition Regression Test

## Purpose

This submission provides a small regression test demo for combining animation-related utility classes.

It covers the combinations described in issue #72109:

- Animation + delay
- Animation + duration
- Animation + hover effect
- Animation + layout utility
- Animation + iteration configuration

## Expected Behavior

Each utility should retain its own responsibility when multiple classes are applied to the same element.

For example:

- The delay utility should only affect animation delay.
- The duration utility should only affect animation duration.
- The hover utility should preserve the animation behavior.
- The layout utility should not interfere with animation properties.
- The iteration configuration should remain independent of other utilities.

## Running the Test

Open `demo.html` directly in a browser.

No development server is required.

## Issue

Closes #72109