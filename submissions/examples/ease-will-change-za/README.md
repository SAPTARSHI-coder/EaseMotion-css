## What does this do?

Provides `ease-will-change` utility classes to hint the browser about upcoming changes, enabling GPU-accelerated compositing for smoother animations.

## How is it used?

```html
<div class="ease-will-change-transform-za">Animated element</div>
<div class="ease-will-change-opacity-za">Fading element</div>
```

## Why is it useful?

EaseMotion core has no will-change utilities. Adding `will-change` to elements that will be animated helps the browser optimize rendering by promoting them to their own compositor layer, reducing jank.
