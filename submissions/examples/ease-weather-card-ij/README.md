# Weather Card

A compact weather widget with a living sky: spinning sun rays, drifting clouds, and staggered falling raindrops.

## How is it used?

Toggle the scene by switching the `is-raining` class on the card:

```html
<div class="weather-card is-raining">
  <div class="sky">
    <div class="sun"><span class="sun-core"></span></div>
    <div class="cloud c1"></div>
    <div class="rain"><span class="drop d1"></span></div>
  </div>
  <div class="weather-body">...</div>
</div>
```

The `.is-raining` state re-themes the sky and fades the `.rain` layer in while `.drop` spans fall with the `rainFall` keyframe.

## Why is it useful?

Weather widgets need to feel alive without becoming a performance problem. This component keeps every effect on the GPU-friendly `transform`/`opacity` axis, uses staggered delays for the drops, and demonstrates a single state class driving multiple coordinated animations — exactly the composable, class-driven style EaseMotion promotes.
