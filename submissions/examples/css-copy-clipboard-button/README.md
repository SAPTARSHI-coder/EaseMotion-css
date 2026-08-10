# CSS Copy to Clipboard Button (#70824)

A pure CSS interactive button that morphs into a success state with an animated checkmark icon and confirmation label when triggered.

## Features
- **Pure CSS State Management:** Utilizes a native hidden checkbox (`:checked`) combined with sibling selectors (`+`) to toggle button styling, label text, and icon visibility with zero JavaScript.
- **Animated Checkmark Pop:** Features an elastic pop-in keyframe animation (`check-pop`) on the success checkmark.
- **Accessible Interaction:** Linked via `<label for="...">` associated with a focusable control element complete with `:focus-visible` outline indicators.
- **Motion Preference Compliant:** Automatically disables checkmark scaling animations when `@media (prefers-reduced-motion: reduce)` is enabled.

## File Hierarchy
- `style.css` - Button theme styling, checkbox state triggers, and checkmark keyframe pop animation.
- `demo.html` - Semantic component card featuring snippet copy simulation.
- `README.md` - Technical specification and architecture overview.
