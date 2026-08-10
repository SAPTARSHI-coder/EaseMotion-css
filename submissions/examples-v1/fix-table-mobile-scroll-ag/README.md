# Fix ease-table Mobile Horizontal Scroll

## What does this do?
Wraps `.ease-table` in a `.ease-table-wrapper` div with `overflow-x: auto`
to enable horizontal scrolling on mobile without breaking the page layout.

## How is it used?
```html
<div class="ease-table-wrapper" role="region" aria-label="Data table" tabindex="0">
  <table class="ease-table">
    <!-- ... -->
  </table>
</div>
```

## Why is it useful?
Wide tables on mobile cause the entire page to scroll horizontally.
`overflow-x: auto` on a wrapper constrains the overflow to the table only.
`tabindex="0"` makes the scrollable region keyboard-focusable per WCAG.
Fixes: #35805
