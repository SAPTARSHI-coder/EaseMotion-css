# Radio Pill Group

### What does this do?

It shows a single choice pill group where selecting one option highlights it with an accent fill and a small pop.

### How is it used?

```html
<div class="pill-group" role="radiogroup" aria-label="Time range">
  <label class="pill"><input type="radio" name="range" class="pill-input" checked /><span>Day</span></label>
  <label class="pill"><input type="radio" name="range" class="pill-input" /><span>Week</span></label>
</div>
```

The radios share one `name`, so only one pill can be active at a time.

### Why is it useful?

Single choice pills are common for time ranges, sizes, and view options. This styles the selected pill from the native `:checked` state, using only CSS. The group uses a `radiogroup` role, keeps keyboard selection with a focus ring, and the pop is disabled under `prefers-reduced-motion: reduce`.
