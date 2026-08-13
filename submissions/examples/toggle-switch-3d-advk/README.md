# 3D Toggle Switch

## What does this do?

A checkbox-driven toggle switch whose thumb both slides and rotates
(`rotateY(360deg)`) as it flips, giving the motion a physical, coin-flick
feel instead of a flat slide. State comes from a real checkbox, so it works
as a form control with no JavaScript.

## How is it used?

```html
<input type="checkbox" id="t3d-1" class="t3d-input" />
<label for="t3d-1" class="t3d-switch">
  <span class="t3d-thumb"></span>
  <span class="t3d-sr">Enable notifications</span>
</label>
```

The wrapper needs `perspective` set on an ancestor (here `.t3d-wrap`) for the
`rotateY` to read as 3D rather than a flat horizontal squash.

## Why is it useful?

Toggle switches are usually just a translate on the thumb, which is fine but
reads as flat motion no matter how the surrounding UI feels. Pairing the
translate with a full `rotateY(360deg)` on the same duration and easing
curve makes both finish together, so the thumb appears to spin exactly once
while crossing the track — a small detail that differentiates the switch
from a generic slider without adding any interaction complexity.

Because the checkbox itself remains an unstyled, accessible input (visually
hidden but not `display: none`), the switch keeps native keyboard toggling
via Space, form participation, and `:focus-visible` styling for free.
