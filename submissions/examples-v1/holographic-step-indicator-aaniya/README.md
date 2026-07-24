# Holographic Step Indicator

Closes #41614

## What does this do?

A finance-dashboard-style progress stepper where the active step glows and shows a rotating holographic scanline, while completed steps and their connecting line turn a solid accent color — all with pure CSS, no JavaScript.

## How is it used?

```html
<div class="holo-stepper">
  <input type="radio" name="holo-step" id="holo-step-1" class="holo-stepper__radio" checked>
  <input type="radio" name="holo-step" id="holo-step-2" class="holo-stepper__radio">

  <ol class="holo-stepper__track">
    <li class="holo-stepper__item">
      <label for="holo-step-1" class="holo-stepper__node">
        <span class="holo-stepper__index">1</span>
      </label>
      <span class="holo-stepper__label">Account</span>
    </li>
    <li class="holo-stepper__item">
      <label for="holo-step-2" class="holo-stepper__node">
        <span class="holo-stepper__index">2</span>
      </label>
      <span class="holo-stepper__label">Verify Identity</span>
    </li>
  </ol>
</div>
```

Each step is a hidden radio input paired with a `<label>` circle. Clicking a label checks its radio, and CSS `:checked` + general sibling selectors light up the completed steps and glow the active one — no script required to track or move between steps.

## Why is it useful?

Step indicators are core to onboarding and checkout flows, and finance dashboards in particular lean on this kind of glowing, data-driven visual language. This variant:

- Needs **no JavaScript** for its state or animation (uses the native radio/`:checked` trick), matching the "pure CSS preferred" requirement.
- Is keyboard accessible: each step is a real, focusable `<label for="...">`/radio pair with a visible focus ring.
- Respects `prefers-reduced-motion` by disabling the scanline animation for users who've opted out of motion.
- Is responsive down to narrow viewports.
- Follows the requested `holographic-step-indicator-<suffix>` submission naming.

## Files

- `demo.html` — self-contained demo, opens directly in a browser
- `style.css` — raw CSS (uses `ease-` prefixed variable/keyframe names per the issue's explicit requirement; the maintainer standardizes the rest)
- `README.md` — this file