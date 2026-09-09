# ease-hover-menu-underline-slide-sap

A single shared underline that slides beneath whichever nav link is currently hovered, appearing only while any link in the group is hovered.

## Usage
1. Include `style.css`.
2. Add markup: `<a>` links + one `.slide-underline` element inside `.underline-slide-sap`.
3. Attach the `mouseenter` position/width calculation from `demo.html`.

## Notes
- Single shared underline (vs a per-link `::after`) travels between links via `transform: translateX()` and `width`, giving a connected "sliding" feel rather than each link having its own independent underline animation.
- Group-level `:hover` on the wrapper controls the underline's overall visibility, so it disappears entirely once the cursor leaves the whole nav.
- Respects `prefers-reduced-motion`: position/width transition is removed, only opacity visibility remains animated.