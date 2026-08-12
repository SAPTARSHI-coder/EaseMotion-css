# Staggered Grid Entrance (stagger-grid-koko)

## What does this do?
Animates grid items to fade in and slide upward sequentially with a staggered delay, instead of appearing all at once — giving a premium, polished loading feel.

## How is it used?
Wrap your grid items inside `.ease-stagger-container`, and add `.ease-stagger-item` with a `--delay-index` CSS variable to each item to control its entrance order:

\`\`\`html
<div class="ease-stagger-container">
  <div class="ease-stagger-item" style="--delay-index: 1;">Item 1</div>
  <div class="ease-stagger-item" style="--delay-index: 2;">Item 2</div>
  <div class="ease-stagger-item" style="--delay-index: 3;">Item 3</div>
</div>
\`\`\`

## Why is it useful?
Commonly used in photo galleries, product listings, and dashboards to make grid loading feel smooth and premium rather than abrupt — aligns with EaseMotion CSS's animation-first philosophy.