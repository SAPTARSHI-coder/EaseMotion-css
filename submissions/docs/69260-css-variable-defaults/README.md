# CSS Variable Defaults Regression Tests

## Overview

This submission covers regression testing for EaseMotion CSS default custom properties.

The goal is to ensure that documented CSS variables remain available and
continue to provide their expected default values.

## Test Coverage

The regression coverage focuses on important default tokens including:

- Animation duration values
- Easing values
- Border radius values
- Primary color variables
- Shadow variables
- Animation iteration settings

## Expected Behavior

Each documented CSS custom property should:

1. Remain available.
2. Keep its expected default value.
3. Continue working when consumed by EaseMotion styles.
4. Avoid unexpected changes to unrelated properties.

## Demo

Open `demo.html` directly in a browser.

The demo shows how CSS custom properties can control:

- Transition duration
- Easing
- Border radius
- Primary color
- Box shadow

## Scope

This submission focuses on regression testing and demonstration of existing
CSS variable defaults.

No changes are made to the existing framework implementation.

## Related Issue

Closes #69260