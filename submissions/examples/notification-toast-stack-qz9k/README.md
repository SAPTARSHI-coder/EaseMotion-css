# Toast Stack

## What does this do?

A stacking toast notification system: new toasts prepend to the top of the
stack, auto-dismiss after 5 seconds, and each animates out independently
via its own `animationend` event rather than being removed from the DOM on
a fixed timer.

## How is it used?

```js
ntsPush('Changes saved', 'success');
ntsPush('Could not connect', 'error');
```

```html
<div class="nts-stack" id="nts-stack" aria-live="polite"></div>
```

`ntsPush` builds a toast element, prepends it to `#nts-stack`, and schedules
`ntsRemove` after 5 seconds. `ntsRemove` adds the `.nts-toast--leaving`
class (which triggers the exit keyframe) and only calls `.remove()` once
`animationend` fires — not on a JS timer guessing the animation's duration.

## Why is it useful?

Removing a toast from the DOM on a fixed `setTimeout` matching the CSS exit
animation's duration works until the animation duration changes — the two
values live in different files (JS and CSS) with no structural connection,
so a designer adjusting `animation-duration` in the stylesheet doesn't
know there's a matching magic number in the script that also needs
updating. Waiting for the real `animationend` event removes that
duplication entirely: whatever duration the CSS declares is exactly how
long the element stays in the DOM before removal, because removal is keyed
to the animation actually finishing, not to a guess about how long it takes.

`aria-live="polite"` on the stack container means each new toast is
announced to screen readers as it's added, without interrupting whatever
the user is currently doing (unlike `assertive`, which would cut off
in-progress speech). The reduced-motion branch swaps the exit animation for
a near-instant one rather than removing it outright, since `animationend`
still needs to fire for the removal logic to run — an animation with
`animation: none` never fires that event at all.
