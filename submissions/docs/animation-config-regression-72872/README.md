# Animation Configuration Edge Cases

This submission provides a small regression-testing playground for
animation configuration edge cases in EaseMotion CSS.

## Purpose

The goal is to make unusual animation configuration values easy to inspect
and verify visually.

The demo covers:

- Default iteration behaviour
- A single iteration
- Multiple numeric iterations
- Fractional iteration values
- Infinite iterations
- Multiple animation declarations
- Responsive behaviour
- Reduced-motion behaviour

## Test Cases

### 1. Default configuration

The first example represents the normal single-run animation case.

Expected result:

- The animation starts normally.
- The element returns to its initial state.
- No unexpected repeated animation occurs.

### 2. Single iteration

The second example explicitly uses:

```css
animation-iteration-count: 1;