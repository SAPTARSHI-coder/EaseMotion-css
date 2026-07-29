# Mobile Horizontal Overflow Test

Demonstrates how certain CSS animations (sliding panels, scale transforms, position offsets) can cause unexpected horizontal scrollbars at mobile viewport widths (320px–768px).

## What this covers
- Three animation classes that trigger overflow on narrow viewports
- Interactive CSS `:checked` toggle to apply/remove `overflow-x: hidden`
- Test results table across common breakpoints
- Best practices for containing animation overflow

## How to use
Open `demo.html` and resize the browser to mobile widths (use DevTools device emulation). Toggle the checkbox to see the effect of `overflow-x: hidden`. The fix should be applied to the parent container, not `body`, to avoid clipping tooltips/modals.
