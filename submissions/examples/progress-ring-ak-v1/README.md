# progress-ring-ak

Pure CSS animated SVG circular progress ring and spinner — no JavaScript required.

## How to use

Set `--target-offset` inline to control the fill percentage of the progress ring.

- Circumference = 283
- Offset formula: `283 - (283 * percentage / 100)`
- Example: 75% -> `283 - 212 = 71` offset.

```html
<div class="ease-progress-ring" style="--target-offset: 70;">
  <svg viewBox="0 0 100 100">
    <circle class="ease-progress-ring__bg" cx="50" cy="50" r="45" />
    <circle class="ease-progress-ring__meter" cx="50" cy="50" r="45" />
  </svg>
  <span class="ease-progress-ring__value">75%</span>
</div>

<!-- Infinite Spinner Variant -->
<div class="ease-progress-ring ease-progress-ring--spinner">
  <svg viewBox="0 0 100 100">
    <circle class="ease-progress-ring__bg" cx="50" cy="50" r="45" />
    <circle class="ease-progress-ring__meter" cx="50" cy="50" r="45" />
  </svg>
</div>