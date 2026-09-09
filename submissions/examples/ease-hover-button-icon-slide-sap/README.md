# ease-hover-button-icon-slide-sap

A button whose arrow icon slides in and fades in from the left on hover, rather than being always visible — draws the eye toward the CTA direction.

## Usage
1. Copy `style.css` into your project.
2. Copy the `.btn-icon-slide-sap` markup from `demo.html`, replacing the icon glyph as needed.

## Customization
- Swap the `&#8594;` glyph for an SVG/icon-font icon.
- Adjust `max-width: 24px` in the hover state to fit a wider icon.
- Change the `0.3s cubic-bezier(...)` transition for a snappier/softer slide.

## Accessibility
Icon is decorative; add `aria-hidden="true"` to the icon span if it doesn't convey unique meaning beyond the label text.

## Browser support
All modern browsers.