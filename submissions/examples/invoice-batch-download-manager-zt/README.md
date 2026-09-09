# Invoice Batch Download Manager — EaseMotion CSS Example

Purpose
- Showcase a CSS-only invoice list with batch-selection and download affordances for admin dashboards.

Files
- `demo.html` — static HTML demo (no JavaScript).
- `style.css` — styles and responsive behaviours.

Design notes
- Uses CSS variables and progressive enhancement (visual-only interactions).
- Provides keyboard-focusable controls and visible focus outlines for accessibility.
- Demonstrates a bulk action panel that would be wired to JS in a real app; here it is static and responsive.

Accessibility
- Table uses proper `role` and `aria` attributes for clarity.
- `prefers-reduced-motion` respected for animations.
- Inputs and buttons are keyboard-focusable.

Customization
- Change colors via `:root` variables in `style.css`.
- Replace invoice rows in `demo.html` to show different states (paid, pending, overdue).

Why this fits EaseMotion CSS
- Reusable pattern for billing dashboards and admin consoles.
- Visual language aligns with EaseMotion's tokens and component approach.

Limitations
- This demo is intentionally JS-free; features like "select all" behavior and real downloads require scripting.

License
- MIT (match repository)
