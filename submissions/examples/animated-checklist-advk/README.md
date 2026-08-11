# Animated Checklist

## What does this do?

A checklist where checking an item draws an SVG checkmark stroke and strikes
through the label. State comes entirely from `:checked` plus the general
sibling combinator, so it degrades to a plain, working checkbox list with
CSS disabled.

## How is it used?

```html
<li class="ack-item">
  <input type="checkbox" id="ack-1" class="ack-input" />
  <label for="ack-1" class="ack-label">
    <svg class="ack-check" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 12.5 9.5 18 20 6" />
    </svg>
    <span>Draft the proposal</span>
  </label>
</li>
```

The checkbox must come before the label in source order — `~` only selects
later siblings, which is also why the checkbox itself is visually hidden
rather than `display: none` (removing it from the accessibility tree would
break keyboard and screen-reader use).

## Why is it useful?

The draw-on animation depends on `stroke-dasharray`/`stroke-dashoffset`
matching the exact path length, which is normally computed in JavaScript via
`getTotalLength()` so it works for arbitrary paths. This checkmark uses one
fixed, hand-measured path, so the same trick works with a static
`dasharray` value and no script at all — appropriate here because the icon
never changes shape, only state.

Driving both the stroke animation and the strikethrough from `:checked`
means there is a single source of truth for "done": no risk of the visual
state and the underlying form value drifting apart, which is a common bug
in checkbox lists reimplemented with a JS-managed `done` class.
