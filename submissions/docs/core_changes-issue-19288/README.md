# Animated Progress Steps Wizard

Pure CSS multi-step progress wizard with radio-button navigation, animated transitions, connecting lines, and content panels.

## Features

- **5-step horizontal wizard** with numbered circle indicators
- **Three states per step**: pending (muted), active (indigo glow with pulse), completed (green with checkmark)
- **Radio button hack** — zero JavaScript, pure CSS navigation via hidden `<input type="radio">` and `<label>` elements
- **Connecting lines** that fill with gradient color as steps progress
- **Content panels** that slide in with staggered fade animation
- **Staggered entrance** animations on step indicators
- **Responsive** — horizontal row on desktop, vertical timeline on mobile
- **`prefers-reduced-motion`** support — disables all animations

## Files

| File        | Description                                                              |
| ----------- | ------------------------------------------------------------------------ |
| `demo.html` | Wizard layout with radio inputs, step labels, and content panels         |
| `style.css` | All styles, radio-button state logic, animations, responsive breakpoints |
| `README.md` | This documentation                                                       |

## How it Works

The wizard uses five hidden radio inputs of the same `name` attribute, ensuring only one can be selected at a time. Each `<label>` targets a radio via its `for` attribute, making the step circles clickable. CSS sibling selectors (`input:checked ~ .wizard .step[data-step="N"]`) apply visual states:

- Steps before the checked step → completed (green)
- The checked step → active (indigo pulse)
- Steps after → pending (muted)

## Usage

```html
<input type="radio" name="wizard" id="step-1" checked />
<input type="radio" name="wizard" id="step-2" />
<!-- ... -->

<div class="wizard">
  <div class="steps">
    <label class="step" for="step-2" data-step="1">
      <span class="step-circle">1</span>
      <span class="step-label">Cart</span>
    </label>
    <!-- ... -->
  </div>
</div>
```

## Development

Open `demo.html` in any modern browser. No build step required.

## Keyframe Reference

| Keyframe      | Purpose                                       |
| ------------- | --------------------------------------------- |
| `stepPulse`   | Glow pulse on the active step circle (indigo) |
| `fadeSlideIn` | Content panel entrance (fade + translateY)    |
| `staggerIn`   | Step indicator staggered entrance             |

Fixes #19288
