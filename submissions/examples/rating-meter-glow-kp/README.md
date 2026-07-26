# Rating Meter Glow KP

## What does this do?

Rating Meter Glow KP adds a CSS-only five-star feedback selector with animated selection, a color-responsive progress meter, and contextual rating feedback.

## How is it used?

Place radio inputs and their labels inside the `rating-panel` and `rating-stars` classes, then add the meter and feedback elements.

```html
<fieldset class="rating-panel">
  <div class="rating-stars">
    <input type="radio" id="rating-1" name="rating" value="1" />
    <label for="rating-1" aria-label="1 star"><span>1</span></label>
  </div>

  <div class="rating-meter" aria-hidden="true">
    <span class="rating-meter__fill"></span>
  </div>
</fieldset>
```

## Why is it useful?

It gives EaseMotion CSS a practical feedback pattern with visible state changes, keyboard focus, responsive sizing, and reduced-motion support without JavaScript or external dependencies.
