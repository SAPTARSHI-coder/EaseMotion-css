# CSS Drawer with Handle (#70927)

A bottom-aligned UI drawer component that utilizes a stylized handle and CSS state-based transformations for expansion and snapping.

## Features
- **CSS-Powered State Snap:** Uses `:focus-within` and `:hover` selectors to handle drawer expansion mechanics without external JavaScript.
- **Accessible Dialog Role:** Implemented with `role="dialog"`, `aria-labelledby`, and `tabindex="0"` for robust screen reader support and keyboard interaction.
- **Responsive Geometry:** Scales height relative to the viewport using VH units.
- **Reduced Motion Support:** Complies with system-level motion preferences by disabling CSS transitions.

## File Hierarchy
- `style.css` - Drawer positioning, handle styling, content scroll properties, and expansion animation.
- `demo.html` - Semantic markup configured for ARIA-compliant dialogue interaction.
- `README.md` - Technical specification and architecture overview.
