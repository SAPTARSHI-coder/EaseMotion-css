# Safari 17 Card Hover Jump Fix (`#56091`)

## What does this do?
Resolves a jarring visual layout jump on Safari 17 when `ease-card-hover` is combined with `ease-card-shadow` by forcing hardware-accelerated layer compositing.

## How is it used?
Apply both utility classes directly to card elements without worrying about WebKit rendering jitter:
```html
<div class="ease-card-hover ease-card-shadow">
  <h3>Zero-Jump Smooth Card</h3>
</div>
```

## Why is it useful?
Solves issue #56091 by incorporating explicit `-webkit-transform: translate3d(0, 0, 0)`, `backface-visibility: hidden`, and `will-change` directives to stabilize Apple browser render engines.