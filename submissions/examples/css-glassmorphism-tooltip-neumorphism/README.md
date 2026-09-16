# Glassmorphism Tooltip with Neumorphism styling (#78877)

A hybrid UI component combining soft extruding Neumorphic surface controls with frosted Glassmorphic floating tooltips featuring accessibility linkages and CSS transitions built using pure CSS.

## Features
- **Accessible Tooltip Architecture:** Built with `role="tooltip"` linked to buttons via `aria-describedby` and full `:focus-visible` support.
- **Hybrid Visual Aesthetic:** Blends dual Neumorphic drop shadows (`#ffffff` and `#a3b1c6`) with translucent `backdrop-filter: blur(12px)` glass popovers.
- **Fluid Micro-Interactions:** Smooth opacity and translateY slide animations triggered via hover or keyboard focus.

## File Hierarchy
- `style.css` - CSS shadow variables, glass backdrop blur rules, caret pointing details, and hover state transitions.
- `demo.html` - Accessible HTML structure showcasing the interactive tooltip.
- `README.md` - Technical specification and architecture overview.
