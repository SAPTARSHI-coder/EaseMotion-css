# Multi-Step Stepper Indicator — `ease-stepper`

Animated step progress indicator. Pure CSS — no JavaScript required.
Uses radio inputs + `:checked` + sibling selectors for state management.

## Usage

```html
<input type="radio" name="stepper" id="s1" checked />
<input type="radio" name="stepper" id="s2" />
<input type="radio" name="stepper" id="s3" />

<div class="ease-stepper">
  <div class="ease-stepper__step" data-step="1">
    <label for="s1">
      <div class="ease-stepper__circle">1</div>
      <span class="ease-stepper__label">Account</span>
    </label>
  </div>
  <div class="ease-stepper__step" data-step="2">
    <label for="s2">
      <div class="ease-stepper__circle">2</div>
      <span class="ease-stepper__label">Details</span>
    </label>
  </div>
  <div class="ease-stepper__step" data-step="3">
    <label for="s3">
      <div class="ease-stepper__circle">3</div>
      <span class="ease-stepper__label">Confirm</span>
    </label>
  </div>
</div>
```

## Acceptance Criteria

- ✅ Active step highlighted with scale + glow ring animation
- ✅ Completed steps show ✓ checkmark
- ✅ Connector line fills between completed steps
- ✅ CSS only — radio input + `:checked` + sibling selectors
- ✅ 3, 4, and 5 step variants included in demo

## How It Works

Radio inputs placed **before** `.ease-stepper` in the DOM allow
`:checked ~ .ease-stepper [data-step]` selectors to target
the correct step circle and connector line with zero JavaScript.

## Preview

Open `demo.html` in any browser to interact with all three variants.

## Author

[@shresthbhargava](https://github.com/shresthbhargava)
