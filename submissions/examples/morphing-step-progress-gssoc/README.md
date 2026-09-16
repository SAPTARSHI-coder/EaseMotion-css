# Morphing Step Progress Stepper

An interactive multi-step checkout and onboarding progress indicator featuring fluid cubic-bezier connection line fills, active node morphing, and animated step panels.

## 1. What does this do?
This component renders an interactive step progress bar that animates active steps with scale morphing physics, updates the connecting progress line fill using smooth CSS transitions, and displays contextual step panel views as users progress forward or backward through a flow.

## 2. How is it used?
Link `style.css` in your HTML and incorporate the `<div class="stepper-card">` layout with step nodes and progress bar track markup:

```html
<div class="stepper-card">
  <div class="stepper-nav">
    <div class="progress-line-track">
      <div class="progress-line-fill" id="progressLine"></div>
    </div>
    <button class="step-node active" data-step="1">
      <span class="node-icon">1</span>
      <span class="node-label">Account Setup</span>
    </button>
  </div>
</div>
```

Bind the stepper navigation script from `demo.html` to handle step transitions and update progress percentages dynamically.

## 3. Why is it useful?
- **Enhanced Conversion Flow:** Guides users through multi-stage forms, checkout flows, or setup wizards with clear visual progress feedback.
- **Fluid Morphing Animations:** Uses CSS cubic-bezier spring curves for node scaling and glow effects.
- **Accessible & Responsive:** Adapts seamlessly to mobile layouts and supports keyboard tab navigation out of the box.
