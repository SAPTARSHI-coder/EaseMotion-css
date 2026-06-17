# Popover API Tooltip with `@starting-style`

## What does this do?
Demonstrates the native HTML Popover API with animated entry/exit using `@starting-style` — a CSS rule that defines the starting values for transitions so they play correctly when an element transitions from `display: none` to visible. Also includes a CSS-only hover tooltip variant.

## How is it used?

```html
<!-- Trigger -->
<button class="popover-trigger" popovertarget="my-pop" popovertargetaction="toggle">
  Open
</button>

<!-- Popover panel -->
<div id="my-pop" popover>
  <div class="popover-panel">
    <div class="popover-panel__arrow"></div>
    <p class="popover-panel__title">Title</p>
    <p class="popover-panel__body">Content here.</p>
  </div>
</div>

<!-- CSS-only hover tooltip -->
<div class="tooltip-wrap">
  <button class="popover-trigger">Hover me</button>
  <div class="tooltip" role="tooltip">Tooltip text</div>
</div>
```

## Why is it useful?
`@starting-style` solves the long-standing problem of animating elements entering from `display: none`. The Popover API provides accessible, native open/close with top-layer management. Together they enable polished entry/exit animations without JS. Respects `prefers-reduced-motion`.
