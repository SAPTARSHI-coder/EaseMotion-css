# Mood Emoji Select — Issue #14026

## What does this do?

An animated mood/emotion emoji selector component with a bounce animation on selection. Selected emoji scales to 1.3x with a spring bounce, unselected emojis dim to 50% opacity.

## How is it used?

```html
<div class="mood-option selected" data-mood="Happy" data-emoji="&#128522;">
  &#128522;
</div>
<div class="mood-option" data-mood="Sad" data-emoji="&#128542;">&#128542;</div>
```

Add `.mood-option` divs with `data-mood` and `data-emoji` attributes. Toggle the `.selected` class to trigger the bounce animation and highlight. Unselected items automatically dim. Uses `role="radio"` and `aria-checked` for accessibility.

## Why is it useful for EaseMotion CSS?

Mood/emotion selectors are a common pattern in wellness, journaling, and feedback apps. The bounce animation provides satisfying tactile feedback on selection, aligning with EaseMotion's animation-first philosophy while remaining accessible with `prefers-reduced-motion` support and proper ARIA attributes.
