# SCSS Animation Mixins Regression Coverage

## Overview

This submission adds a standalone regression-test demo for the SCSS
animation integration layer described in issue #69166.

The demo focuses on animation behavior that should remain stable when
SCSS mixins and animation tokens are changed.

## Covered Behavior

The demo provides coverage for:

- Default animation duration values
- Default easing behavior
- Animation delay values
- Fade-in animation
- Fade-out animation
- Slide-up animation
- Slide-down animation
- Zoom-in animation
- Zoom-out animation
- Custom duration values
- Custom delay values
- Custom easing values

## How to Test

1. Open `demo.html` directly in a browser.
2. Confirm that the animation element renders correctly.
3. Verify that the animation uses the configured duration.
4. Verify that the configured delay is applied.
5. Verify that the easing behavior is applied.
6. Test the animation patterns listed above by changing the animation
   class on the `.test-box` element.

For example:

```html
<div class="test-box slide-up"></div>