# Ease Stepper

## What does this do?

A multi-step progress navigation component for displaying the current stage of a process.

## How is it used?

Open `demo.html` directly in any modern browser.

Example:

```html
<div class="step current">
    <div class="step-indicator">2</div>

    <div class="step-content">
        <span class="step-number">Step 2</span>
        <strong>Details</strong>
    </div>
</div>
```

### Step states

Completed:

```html
<div class="step completed">
    <div class="step-indicator">✓</div>
</div>
```

Current:

```html
<div class="step current">
    <div class="step-indicator">2</div>
</div>
```

Default:

```html
<div class="step">
    <div class="step-indicator">3</div>
</div>
```

### Features

- Multiple steps
- Completed state
- Current step state
- Step indicators
- Connecting lines
- Hover animation
- Responsive layout
- Pure CSS
- No JavaScript required

## Why is it useful?

Steppers are commonly used for checkout flows, onboarding, registration processes, setup wizards, and multi-step forms.

This component provides a clean visual representation of process progress while following the animation-first philosophy of EaseMotion CSS.