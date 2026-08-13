# Modal Content Clipping Fix — Small Screens

## What does this do?
Fixes `.modal` content getting clipped on small screens/short viewports by adding internal scrolling, as reported in issue #55348.

## How is it used?
```html
<div class="modal">
  <div class="modal-content">
    <h2>Terms &amp; Conditions</h2>
    <p>Long content here...</p>
    <button>Accept</button>
  </div>
</div>
```

## Why is it useful?
Modals with large content previously overflowed the viewport with no way to scroll, hiding the lower content and action buttons entirely (issue #55348). This fix caps `.modal-content` at `max-height: 90vh` with `overflow-y: auto`, so content that exceeds the available height becomes scrollable instead of clipped — matching the issue's expected behavior. `demo.html` includes a before/after comparison so the maintainer can visually verify the fix before integrating it into `core/`.

## Notes
- This submission only demonstrates the fix (per contribution freeze rules, `core/` is not modified directly).
- Tested by reducing browser height and on mobile viewport widths.
