# Grid Sizing with Proper Margin-bottom

## What does this do?
Demonstrates a responsive CSS grid with button sizing variants where the `margin-bottom` is correctly placed inside the inline `style` attribute.

## How is it used?
```html
<div class="ease-grid ease-gap-4"
     style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); margin-bottom: 32px;">
  <!-- grid items -->
</div>
```

## Why is it useful?
In the original framework demo, `margin-bottom: var(--ease-space-8);` was dangling outside the `style` attribute due to a missing closing quote (issue #32149). This caused the margin to never apply and created malformed HTML. This submission demonstrates the corrected pattern with the CSS property properly included inside the `style` attribute.
