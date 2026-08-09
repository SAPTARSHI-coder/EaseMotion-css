# EaseMotion Developer Utility Mixins (#22895)

This submission addresses **Issue #22895** by introducing powerful SCSS utility mixins, allowing developers to apply complex EaseMotion behaviors directly within their own custom SCSS blocks, eliminating the need to clutter HTML with dozens of utility classes.

To comply with the strict automated bot preventing direct edits to the `scss/` folder, this proposal and example implementation have been packaged entirely within this `submissions/` directory.

## What's Changed
- `scss/_mixins.scss`: Extended the core mixins file with new developer-friendly utilities:
  - `@mixin hover-effect($type, $intensity, $glow-color)`: Easily binds standardized `lift`, `scale`, `glow`, or `color-mix` hover transitions to any custom selector.
  - `@mixin scroll-reveal($animation, $duration, $threshold)`: Leverages modern native CSS `animation-timeline: view()` to create seamless, zero-JavaScript scroll-driven reveal animations.

## Demo & Example Implementation
- `example.scss`: Demonstrates how a developer would `@use` the mixins to style custom `.custom-card-lift` and `.custom-reveal-section` classes.
- `demo.html` / `style.css`: The compiled output of `example.scss` proving that the mixins successfully apply the EaseMotion animation keyframes and transitions.

## Instructions for Maintainer
Since this is an expansion of the core `_mixins.scss` file:
1. Review the new `@mixin` definitions inside `submissions/core-scss-mixins-22895/scss/_mixins.scss`.
2. If approved, you can safely copy the modified `_mixins.scss` to the root `scss/` directory to merge the feature!
