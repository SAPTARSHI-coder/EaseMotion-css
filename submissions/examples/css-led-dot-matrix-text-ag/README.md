# CSS LED Dot Matrix Text

## What does this do?
Displays text as a glowing, scrolling LED dot matrix board using pure CSS masks and gradients.

## How is it used?
Apply the `ease-led-board` and `ease-led-display` classes to wrap your content, and use `ease-led-text` on the typography element. You can add `ease-led-scroll` to enable the marquee scrolling effect.

```html
<div class="ease-led-board" role="region" aria-label="LED Display">
  <div class="ease-led-display">
    <h1 class="ease-led-text ease-led-scroll">YOUR TEXT HERE</h1>
  </div>
</div>
```

## Why is it useful?
This component provides a highly realistic, retro LED display aesthetic without requiring Javascript or Canvas, maintaining high performance and accessibility while expanding EaseMotion's collection of unique typography animations.
