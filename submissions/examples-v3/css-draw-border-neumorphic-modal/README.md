# CSS Draw-Border Line Modal (Neumorphic Soft Layouts)

A pure CSS, hardware-accelerated animated modal tailored for modern Neumorphic (soft-shadow) user interfaces. It features a sleek border-drawing path animation on load/trigger with full keyboard accessibility and zero JavaScript overhead.

## Features
- **Neumorphic Soft Aesthetic:** Uses complementary inset and outset soft box-shadows to give the classic "extruded" liquid-plastic look.
- **Pure CSS Draw-Border Interaction:** Utilizes absolute pseudo-elements with `scale` or `stroke-dashoffset` style transitions to elegantly trace the borders of the modal body when active.
- **Zero-JS Accessibility:** Fully operational via native HTML checkboxes (`:checked`) or `:focus` targets allowing seamless keyboard navigation.

## Custom Properties
Modify these variables in `style.css` to fine-tune your configuration:
- `--modal-duration`: Speed of the main modal fade/scale expansion (default: `0.4s`).
- `--border-draw-duration`: Timing window for the border trace line animation (default: `0.6s`).
- `--border-draw-color`: Color of the illuminated tracer border line (default: `#00d4ff`).
- `--neumorphic-bg`: Soft base backdrop color for the component (default: #e0e8f6).