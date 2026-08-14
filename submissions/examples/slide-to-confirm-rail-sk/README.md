# Slide-to-Confirm Action Rail

## What does this do?

A slide-to-confirm control that fills a rail as the handle moves and locks into a confirmed state at the end of the track, with a keyboard fallback button.

## How is it used?

```html
<div class="slide-confirm" data-threshold="98">
  <label class="slide-confirm__rail">
    <span class="slide-confirm__fill" aria-hidden="true"></span>
    <span class="slide-confirm__hint">Slide to confirm payment</span>
    <input class="slide-confirm__input" type="range" min="0" max="100" value="0" />
    <span class="slide-confirm__chevron" aria-hidden="true">›</span>
    <span class="slide-confirm__check" aria-hidden="true">Confirmed</span>
  </label>
  <button type="button" class="slide-confirm__fallback">Confirm with keyboard</button>
</div>
```

Open `demo.html` in a browser. Drag the handle to the end, or use the keyboard button. Use Reset to try again.

## Why is it useful?

It is an animation-first confirmation microinteraction for payments and destructive actions. The states (idle, dragging, confirmed) are readable, composable, and fit EaseMotion CSS without changing core framework files.
