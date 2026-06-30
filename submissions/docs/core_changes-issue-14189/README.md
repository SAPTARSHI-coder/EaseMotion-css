# Click Ripple Animation for Buttons — Issue #14189

## What does this do?

Adds a Material Design-style click ripple effect to buttons via the `.ease-btn-ripple` modifier class. On click, a circle element scales from 0 to 4x with opacity fade using the `easeRipple` keyframe.

## How is it used?

```html
<button class="ease-btn ease-btn-primary ease-btn-ripple">Click Me</button>
```

Add `.ease-btn-ripple` to any `.ease-btn` element. A JS click handler injects a `<span class="ease-ripple">` at the click position, animates it with `@keyframes easeRipple` (scale 0→4, opacity 0.5→0, 0.6s ease-out), and removes it on `animationend`. Works with primary, secondary, ghost variants and all size modifiers.

## Why is it useful for EaseMotion CSS?

The ripple effect is a widely recognized Material Design interaction pattern that provides tactile click feedback. Adding it as a opt-in modifier enhances the button component library while respecting reduced motion preferences.
