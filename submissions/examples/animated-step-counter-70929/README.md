# CSS Animated Step Counter

Multi-step form wizard with an animated sliding step counter, active pulse rings, line fill transitions, and zero-JS radio triggers.

## 1. What does this do?
Displays a multi-step progress stepper with a counter indicator that smoothly slides number values (`1` &rarr; `2` &rarr; `3` &rarr; `4`), updates progress line fill, and transitions content panels using pure CSS.

## 2. How is it used?
Link radio buttons with `<label for="step-N">` elements and use sibling CSS selectors (`~`) to drive counter slider transforms:

```html
<input type="radio" name="stepper" id="step-1" class="step-radio" checked>
<input type="radio" name="stepper" id="step-2" class="step-radio">

<nav class="stepper-nav">
  <label for="step-1" class="step-node">Step 1</label>
  <label for="step-2" class="step-node">Step 2</label>
</nav>

<div class="counter-display">
  <div class="counter-number-slider">
    <span>1</span>
    <span>2</span>
  </div>
</div>
```

## 3. Why is it useful?
Form wizards and checkout flows need responsive step counters. This pure CSS pattern provides zero-JS sliding counter transitions, focus-visible keyboard navigation, and full accessibility support for smooth user onboarding workflows.
