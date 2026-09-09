# CSS Binary Rain Loader

A pure CSS loading indicator: columns of binary digits (0s and
1s) fall continuously inside a bordered panel, evoking a
Matrix-style "data stream" while content loads.

## What it does

Ten vertical text columns of binary characters animate downward
on a staggered loop, fading in as they enter and out as they
exit, giving the impression of falling binary rain. A gradient
overlay at the top and bottom of the panel softens the entry and
exit points. Below the panel, a "Loading" label cycles through
animated dots.

## How to use it

```html
<div class="binary-rain-loader" role="status" aria-live="polite" aria-label="Content is loading">
  <div class="rain-columns">
    <span class="rain-col" style="--i:0">1010110101</span>
    <span class="rain-col" style="--i:1">0110101011</span>
    <!-- ...repeat, incrementing --i for each column -->
  </div>
  <p class="rain-loading-label">Loading<span class="rain-dots" aria-hidden="true"></span></p>
</div>
```

Each `.rain-col` needs an inline `--i` custom property (0, 1, 2,
...) to stagger its animation delay so columns don't all fall in
sync. The text content of each span can be any string of 0s and
1s — vary the pattern per column for a more organic look.

## Why it fits EaseMotion CSS

- **Pure CSS, zero dependencies** — the falling animation and
  dot cycling are both done with `@keyframes`, no JavaScript.
- **Accessible** — the loader is announced to assistive tech via
  `role="status"` and `aria-live="polite"`, and the decorative
  dots are hidden from screen readers with `aria-hidden="true"`.
- **Respects motion preferences** — a `prefers-reduced-motion`
  media query stops the falling animation and dot cycling,
  showing a static, low-opacity state instead.
- **Readable, semantic class names** — `rain-col`,
  `rain-columns`, `rain-loading-label`, etc.

## Notes

The animated loading dots use `@keyframes` on the CSS `content`
property, which has limited cross-browser support (works
reliably in Chromium-based browsers; Firefox and Safari may show
static or inconsistent dot states). This does not affect the
core rain animation, which uses standard `transform`/`opacity`
keyframes supported everywhere.

Column count is currently 10. To change it, add or remove
`.rain-col` spans and update the `--i` values accordingly.
