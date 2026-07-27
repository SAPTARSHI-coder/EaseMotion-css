# Shimmer-Sweep Accessible Tooltip (`#54298`)

## What does this do?
Provides an enterprise accessible WAI-ARIA contextual tooltip across whose high-contrast guidance card a continuous metallic light beam refracts diagonally.

## How is it used?
Organize ARIA guidance tooltips inside an `ease-tooltip-shimmer-sweep` enterprise container equipped with a luminous sheen element:
```html
<div class="ease-tooltip-shimmer-sweep">
  <div class="sheen-tip open-s" id="tip-sheen" role="tooltip"><div class="beam-light"></div>...</div>
</div>
```

## Why is it useful?
Solves issue #54298 by enriching accessible WAI-ARIA tooltip guidance cards with upscale metallic light reflection dynamics.