# Wobble Stepper Mixin

## What does this do?
An SCSS mixin, `ease-wobble-stepper-mixin-mixin($duration, $angle)`, that plays a short
side-to-side wobble on a stepper button (e.g. a quantity `+`/`-` control) when it becomes
disabled — signaling to the user that they've hit a limit (min/max reached) rather than
just quietly greying out.

## How is it used?
```scss
@use 'ease-motion' as *;

.stepper-btn {
  @include ease-wobble-stepper-mixin-mixin(0.5s);
}
```

```html
<div class="stepper">
  <button class="stepper-btn" disabled aria-disabled="true" aria-label="Decrease quantity">−</button>
  <span aria-live="polite">1</span>
  <button class="stepper-btn" aria-label="Increase quantity">+</button>
</div>
```

The mixin triggers the wobble automatically whenever the element has the native `disabled`
attribute or `aria-disabled="true"` — no extra JS class toggling required beyond however
you already disable the button.

Parameters:
- `$duration` (default `0.5s`) — total wobble length
- `$angle` (default `4deg`) — maximum rotation angle at the wobble's peak

## Why is it useful?
Disabled stepper buttons are often silently ignored by users who keep clicking, unsure why
nothing happens. A single brief wobble on disable gives clear, low-friction feedback
("you've reached the limit") without needing a tooltip or error message, and it's skipped
entirely under `prefers-reduced-motion: reduce`.
