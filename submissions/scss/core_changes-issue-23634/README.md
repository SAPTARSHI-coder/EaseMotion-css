# SCSS Bounce Animation Mixins

1. What does this do?
Introduces reusable SCSS mixins (`bounce`, `bounce-in`, `bounce-button-exit`) for the core bounce animation keyframes, allowing developers to apply bounce effects directly inside their custom style rules without polluting HTML with utility classes.

2. How is it used?

Import the EaseMotion entry point in your SCSS file and apply the mixins:

```scss
@use 'scss' as ease;

// 1. Continuous vertical bounce
.custom-box {
  @include ease.bounce();
}

// 2. Scale entry bounce
.dialog-box {
  @include ease.bounce-in();
}

// 3. Exit animation
.dismiss-button.exiting {
  @include ease.bounce-button-exit();
}
```

3. Why is it useful?
SCSS mixins provide cleaner separation of concerns by keeping layout structures in HTML and styling/behavior definitions in stylesheets. This makes it easier to write maintainable code, integrate animations with custom class selectors, and override animation duration, timing functions, or iterations seamlessly using standard SCSS parameters.
