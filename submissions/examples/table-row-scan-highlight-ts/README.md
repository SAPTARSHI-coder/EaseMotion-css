# Animated Table Row Scan Highlight

## What does this do?

This example adds a subtle scan-style highlight to table rows on hover and keyboard focus.

## How is it used?

Add the `scan-row` class to focusable table rows:

```html
<tr class="scan-row" tabindex="0">
  <td>#1042</td>
  <td><span class="status paid">Paid</span></td>
  <td>$240.00</td>
</tr>
```

## Why is it useful?

Dense admin tables can be hard to track visually. A scan highlight helps users follow wide rows without changing table layout or adding JavaScript.

## Features

- CSS-only row scan highlight
- Hover and keyboard focus support
- Responsive overflow wrapper
- Status pill examples
- `prefers-reduced-motion` support

## Tech Stack

- HTML
- CSS

## Preview

Open `demo.html` directly in a browser to view the example.

## Contribution Notes

- Proposed for issue #11120
- All files are scoped to this submission folder
- No framework source files are modified
