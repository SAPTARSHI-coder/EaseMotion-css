# Float Radio Mixin

## What does this do?
An SCSS mixin, `ease-float-radio-mixin-mixin($duration, $distance)`, that applies a gentle
floating/bobbing "attention seeker" animation to a radio button's custom indicator when it
becomes checked — drawing the user's eye to the newly selected option.

## How is it used?
```scss
@use 'ease-motion' as *;

.radio-label {
  @include ease-float-radio-mixin-mixin(0.5s);
}
```

```html
<label class="radio-label">
  <input type="radio" name="plan" />
  <span class="radio-indicator"></span>
  Basic Plan
</label>
```

The mixin targets the sibling element immediately after a `input[type="radio"]:checked`,
so apply it to the visual indicator/label element that follows the radio input in your markup.

Parameters:
- `$duration` (default `0.5s`) — how long one float cycle takes
- `$distance` (default `6px`) — how far the element floats up before returning

## Why is it useful?
Radio buttons are easy to miss in dense forms. A brief, repeating float animation on the
selected option gives lightweight visual feedback without being as jarring as a full bounce
or color flash, and it stops entirely under `prefers-reduced-motion: reduce`.
