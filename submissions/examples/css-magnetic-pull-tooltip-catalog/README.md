# CSS Magnetic Pull Tooltip — Product Catalog Layouts

A tactile, pure CSS responsive tooltip module utilizing elastic counter-movement equations to establish premium magnetic engagement responses.

## Specifications
- **Mechanical Physics**: Employs an elastic easing sequence (`cubic-bezier(0.25, 1.25, 0.5, 1)`) to pull the dialog panel down while the trigger button drops slightly, simulating real tactile tension.
- **Declarative Operations**: Exposes configuration states (magnetic speeds, spacing vertical limits, theme colors) via standard CSS custom properties.
- **Hardware Layering**: Offloads interactive counter-movements cleanly to GPU composite layers (`transform: translateY() scale()`) to prevent painting reflow delays.