# CSS Focus Spotlight Section (#70941)

A pure CSS focus spotlight section where hovering or keyboard-focusing an item spotlights it while smoothly dimming and blurring surrounding elements.

## Features
- **Pure CSS `:focus-within` & `:hover` Mechanics:** Combines parent state rules (`.spotlight-grid:hover`, `.spotlight-grid:focus-within`) with child selector specificity to spotlight the active item while dimming non-active siblings.
- **Full Keyboard Accessibility:** Native focus handling using semantic `<a>` link elements, complete with `:focus-visible` ring indicators.
- **Smooth Depth & Scale Transitions:** Applies subtle scaling (`scale(0.97)` vs `scale(1.02)`), grayscale filtering, and depth blur effects without relying on JavaScript event listeners.
- **Accessible Motion:** Fully supports `prefers-reduced-motion: reduce` by disabling transform and blur transitions for motion-sensitive users.

## File Hierarchy
- `style.css` - Grid layout, focus-within selector rules, and spotlight motion parameters.
- `demo.html` - Interactive card grid demonstration accessible via mouse hover and keyboard navigation.
- `README.md` - Technical specification and feature breakdown.
