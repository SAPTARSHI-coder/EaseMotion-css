# CSS ARIA Live Region

An accessible ARIA live region component demonstrating how CSS can be
used to style status messages while maintaining accessible HTML semantics.

## Features

- Accessible live region
- Pure CSS styling and animation
- No JavaScript required for the static demonstration
- Responsive layout
- Polite announcement behavior
- Reduced-motion support
- Clear visual status indicator

## Files

- `demo.html` - Demonstration page
- `style.css` - Component styling and animations

## Accessibility

The component uses:

- `role="status"` for status information
- `aria-live="polite"` so updates do not unnecessarily interrupt users
- `aria-atomic="true"` so the complete message can be announced
- `aria-hidden="true"` for decorative visual indicators

## Usage

```html
<div
  class="live-region"
  role="status"
  aria-live="polite"
  aria-atomic="true"
>
  <span class="live-indicator" aria-hidden="true"></span>
  <p>Your changes have been saved successfully.</p>
</div>