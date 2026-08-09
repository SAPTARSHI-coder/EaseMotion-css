# Interactive Morphing Stepper Process Bar

A responsive progress stepper UI featuring liquid fill line indicators, active node pulse animations, and keyboard navigation support.

## 1. What does this do?
This component renders a multi-step progress wizard control with CSS keyframe pulsing indicators, completed step checkmarks, and smooth track width transitions.

## 2. How is it used?
Link `style.css` in your document head and implement the stepper structure:

```html
<link rel="stylesheet" href="style.css">

<div class="stepper-container">
  <div class="stepper-track"><div class="stepper-fill" style="width: 50%;"></div></div>
  <div class="stepper-steps">
    <div class="step completed"><div class="step-node">✓</div></div>
  </div>
</div>
```

## 3. Why is it useful?
It provides e-commerce checkouts, onboarding workflows, and form wizard interfaces with clear progress feedback and responsive design without heavy framework overhead.
