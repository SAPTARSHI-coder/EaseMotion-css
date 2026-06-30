# Pure CSS Stepper/Wizard Component

A zero-JavaScript interactive layout wizard module using standard radio element checks paired alongside sibling combinator layouts to control states effortlessly.

## Functional Controls

- **Sibling State Selection:** Utilizing `:checked ~` selectors to swap component visibilities instantly without scripts.
- **Hardware Track Panes:** Multi-step views configured using `transform: translateX()` sliders to bypass runtime repaint penalties.
- **Contextual Label Steps:** Mapping navigation buttons using standard `<label for="...">` parameters to fire structural radio updates natively.

## Usage Layout Structure

```html
<div class="ease-wizard-viewport">
  <input type="radio" id="step1" checked />
  <div class="ease-stepper-header">...</div>
  <div class="ease-wizard-panes-track">
    <div class="ease-wizard-view-pane">...</div>
  </div>
</div>
```

Closes #12655
