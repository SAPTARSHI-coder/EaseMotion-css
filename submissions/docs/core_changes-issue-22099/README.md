# Exit Animations: Slide-out, Zoom-out, Flip-out, Fade-out

## What does this do?

Adds a full suite of exit animation utilities (slide-out, zoom-out, flip-out, fade-out) that mirror the existing entrance animations. Each exit pairs naturally with its entrance counterpart — `ease-fade-in` gets `ease-fade-out`, `ease-slide-in-up` gets `ease-slide-out-down`, and so on.

## How is it used?

```html
<div class="ease-fade-out">Fades out</div>
<div class="ease-slide-out-up">Slides up and out</div>
<div class="ease-zoom-out">Zooms out</div>
<div class="ease-flip-out">Flips out (3D rotate)</div>
```

Exit classes are most useful when combined with JS for triggered dismissal (modals, toasts, notifications).

## Why is it useful?

Exit animations make UIs feel complete — what enters should also exit gracefully. Without these, the framework had only `ease-fade-out` and `ease-expand-border-exit`, leaving common needs like `slide-out-down` (for notifications) and `zoom-out` (for modals) unaddressed. These pair 1:1 with existing entrance animations for polished transitions.
