# Pure CSS Animated Multi-Step Wizard

This submission adds a highly requested feature to EaseMotion: an interactive, animated Multi-Step Form Wizard that requires absolutely zero JavaScript.

## Features

- **Zero JavaScript:** By using a hidden `input type="radio"` state machine, the CSS natively tracks which step the user is on.
- **Animated Progress Bar:** The top progress tracker features a horizontal bar that animates its `width` to fill the connecting lines between steps, and completed steps automatically update their content to display a checkmark `✓`.
- **Sliding Panels:** As the user navigates between steps, the inactive panels dynamically slide off to the left or right (depending on their position relative to the active step) and cross-fade, exactly mimicking complex React/Vue animation libraries.
- **Form Controls:** Navigation is handled by simply styling native `<label>` elements to look like buttons and pointing their `for` attributes to the corresponding step's radio ID.

## Usage

Wrap your wizard inside `.ease-wizard`. Add a radio button for each step.

```html
<div class="ease-wizard">
  <input
    type="radio"
    id="step1"
    name="wizard"
    class="ease-wizard-trigger ease-sr-only"
    checked
  />
  <input
    type="radio"
    id="step2"
    name="wizard"
    class="ease-wizard-trigger ease-sr-only"
  />

  <div class="ease-wizard-progress">
    <div class="ease-wizard-progress-bar"></div>
    <div class="ease-wizard-step step1"><span>Step 1</span></div>
    <div class="ease-wizard-step step2"><span>Step 2</span></div>
  </div>

  <div class="ease-wizard-panels">
    <div class="ease-wizard-panel panel1">
      <label for="step2" class="ease-btn">Next Step</label>
    </div>
    <div class="ease-wizard-panel panel2">
      <label for="step1" class="ease-btn">Go Back</label>
    </div>
  </div>
</div>
```
