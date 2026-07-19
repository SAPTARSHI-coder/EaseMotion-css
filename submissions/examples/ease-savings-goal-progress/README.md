# ease-savings-goal-progress

An animated "savings jar" progress component for tracking progress toward a financial goal — current amount, target amount, and percentage complete, with a liquid-fill animation and milestone markers.

## Preview

- A jar-shaped container fills upward from 0% to the current savings percentage, animated with an eased transition.
- Milestone tick marks at 25%, 50%, and 75%.
- A small coin icon "drops" into the jar on load for a playful touch.
- The percentage number counts up from 0 to its target value.
- A `--complete` state (reached 100%) swaps the fill to a green gradient and shows a "Goal reached! 🎉" badge.
- Fully supports light and dark themes via `[data-theme]`.
- Respects `prefers-reduced-motion` by disabling animations/transitions.

## Usage

```html
<div class="ease-savings-goal-progress" data-current="3200" data-target="8000" data-currency="$" data-label="New Laptop Fund">
  <div class="ease-savings-goal-progress__jar">
    <div class="ease-savings-goal-progress__milestones">
      <span class="ease-savings-goal-progress__tick" style="--tick-pos: 25%"></span>
      <span class="ease-savings-goal-progress__tick" style="--tick-pos: 50%"></span>
      <span class="ease-savings-goal-progress__tick" style="--tick-pos: 75%"></span>
    </div>
    <div class="ease-savings-goal-progress__fill">
      <div class="ease-savings-goal-progress__wave"></div>
    </div>
    <span class="ease-savings-goal-progress__coin" aria-hidden="true">🪙</span>
  </div>
  <div class="ease-savings-goal-progress__info">
    <p class="ease-savings-goal-progress__label">New Laptop Fund</p>
    <p class="ease-savings-goal-progress__amounts">
      <span class="ease-savings-goal-progress__current">$3,200</span>
      <span class="ease-savings-goal-progress__of">of</span>
      <span class="ease-savings-goal-progress__target">$8,000</span>
    </p>
    <p class="ease-savings-goal-progress__percent" data-percent="40">0%</p>
  </div>
</div>
```

Add the `ease-savings-goal-progress--complete` modifier class once the goal is reached to trigger the success color scheme.

The fill height is driven at runtime by setting the `--fill-percent` CSS custom property on `.ease-savings-goal-progress__fill` (see `demo.html` for the small script that reads `data-percent` and animates both the fill and the counting percentage text).

## Files

- `demo.html` — three example cards (in progress, nearly complete, goal reached) plus a light/dark theme toggle.
- `style.css` — component styles, using CSS custom properties for full light/dark theme support.
- `README.md` — this file.

## Accessibility

- The coin icon and wave decoration are marked `aria-hidden="true"` since they are purely decorative.
- All animations and transitions are disabled under `prefers-reduced-motion: reduce`.
