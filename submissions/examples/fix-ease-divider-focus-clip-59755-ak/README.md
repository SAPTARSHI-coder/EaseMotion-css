# Fix: ease-divider Focus Outline Clipped by Parent Overflow

## Description
Fixes #59755 — the `.ease-divider` component's focus ring (outline/box-shadow) was
partially or fully clipped when the component was placed inside a wrapper with
`overflow: hidden` or `overflow: auto`, since the default outline is drawn *outside*
the element's border box.

## Fix
- Replaced the external outline with a **negative `outline-offset`** so the outline
  renders *inside* the element's bounding box.
- Layered an **inset `box-shadow`** on top for stronger visibility and as a fallback
  for environments where `outline` rendering is suppressed or overridden.
- Verified against both light and dark color schemes.

## Usage
Include `style.css` and add `tabindex="0"` to make the divider keyboard-focusable
(see `demo.html`). No JavaScript required.

## Accessibility Compliance
Ensures the focus indicator remains fully visible per WCAG 2.1 Success Criterion
2.4.7 (Focus Visible), even when the component is nested inside a container that
clips overflowing content.

## Testing
Open `demo.html` in a browser, press `Tab` to focus the divider inside the
`overflow: hidden` wrapper, and confirm the focus ring is fully visible and not cut off.