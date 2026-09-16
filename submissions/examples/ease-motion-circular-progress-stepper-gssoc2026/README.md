# Circular Progress Stepper - EaseMotion CSS

An interactive multi-step checkout wizard progress stepper component featuring elastic active state focus and filled connecting line keyframe fills.

## 1. What does this do?
This component renders step indicators connected by progress tracks that animate keyframe fills as users advance through multi-page form workflows.

## 2. How is it used?
Link `style.css` and use the stepper structure in your markup:

```html
<link rel="stylesheet" href="style.css">

<div class="stepper-container">
  <div class="stepper-item completed">...</div>
  <div class="stepper-line completed"></div>
  <div class="stepper-item active">...</div>
</div>
```

## 3. Why is it useful?
- **Clear Progress Feedback:** Gives instant visual clarity on multi-step wizard state.
- **Elastic Scale Effects:** Active step node scales smoothly using cubic-bezier curve timing.
- **WAI-ARIA Attributes:** Incorporates `role="progressbar"` for screen readers.
