# Ease Three-State Toggle

A sliding segmented toggle with 3 selectable states, instead of the typical binary on/off.

## What does this do?
A three-option segmented control (e.g. Low / Medium / High) with an animated sliding thumb that smoothly moves to the selected option.

## How is it used?
Open `demo.html` and click any of the three options — the highlighted thumb slides smoothly to that position, and the current selection updates below.

```html
<div class="ease-3state-toggle" role="radiogroup" aria-label="Notification level">
  <button class="ease-3state-option ease-3state-active" data-value="low" role="radio" aria-checked="true">Low</button>
  <button class="ease-3state-option" data-value="medium" role="radio" aria-checked="false">Medium</button>
  <button class="ease-3state-option" data-value="high" role="radio" aria-checked="false">High</button>
  <div class="ease-3state-thumb"></div>
</div>
```

## Why is it useful?
Common pattern for settings with more than 2 options (e.g. notification level, theme mode, quality settings), with a smooth animated thumb and accessible `role="radiogroup"` markup — fits EaseMotion's animation-first, accessible-by-default philosophy.
