# CSS Widget: Origami Paper Fold Variation (#75182)

## Overview

The **Origami Paper Fold Dashboard Widget** is a pure HTML and Vanilla CSS dashboard component inspired by geometric papercraft and modern UI design systems. Instead of relying on generic cards or static 2D shapes, this widget creates an authentic multi-plane 3D paper surface with chamfered geometry, folded corner flaps, creased edges, and dynamic parallax depth layering that responds dynamically to user hover and focus interactions.

## Features

- **Pure HTML & Vanilla CSS**: Zero JavaScript, zero external dependencies, zero external icons or fonts.
- **3D Paper Plane Stack**: Constructed using multi-plane CSS 3D transforms (`preserve-3d`, `rotate3d`, `translateZ`, `clip-path`) to form authentic paper geometry.
- **Hardware Accelerated**: Compositor-friendly animations operating strictly on `transform`, `opacity`, and shadow parameters for silky 60fps performance.
- **Modern Aesthetic Design**: Features rich warm matte paper textures in light mode and deep obsidian paper surfaces in dark mode with vibrant terracotta accent highlights.
- **Responsive Layout**: Adapts gracefully across desktop, tablet, and mobile breakpoints using dynamic layout math and fluid spacing.
- **Comprehensive Accessibility**: Built with HTML5 semantic elements (`article`, `header`, `section`, `footer`, `dl`, `dt`, `dd`), explicit ARIA tags (`aria-hidden="true"`, `role="progressbar"`), and high-contrast styling.
- **Dark Mode Compatible**: Automatic theme adaptation via `@media (prefers-color-scheme: dark)`.
- **Reduced Motion Support**: Accessible fallback via `@media (prefers-reduced-motion: reduce)` that disables motion while preserving the static origami paper design.

## Implementation

The 3D paper fold geometry is composed of several independent visual planes:
1. **Chamfered Base Plane (`.origami-plane--base`)**: Paper base clipped with geometric chamfers (`clip-path: polygon(...)`).
2. **Top Ribbon Flap (`.origami-plane--top-flap`)**: Anchored at the top edge and rotated along the X-axis (`rotateX(-18deg)`).
3. **Top-Right Folded Corner Flap (`.origami-plane--corner`)**: Diagonal 3D corner fold (`rotate3d(1, -1, 0, 20deg)`) revealing a shaded paper underlayer (`.origami-plane--corner-underlayer`).
4. **Dual Side Wing Folds (`.origami-plane--side-wing`, `.origami-plane--right-wing`)**: Side paper wings rotated along the Y-axis to form dimensional side bevels.
5. **Bottom Origami Tray (`.origami-plane--bottom-fold`)**: Bottom tray fold with crease line detail.
6. **Parallax Content Layer (`.origami-card__content`)**: Elevated on Z-axis (`translateZ(18px)`) to create depth between the paper backdrop and dashboard data metrics.

## Accessibility

- **Semantic Tags**: Enforces meaningful document outline structure.
- **Decorative Isolation**: All origami geometry elements reside inside `aria-hidden="true"` wrappers so screen readers focus purely on dashboard metric content.
- **Keyboard Navigation**: Interactive elements support focus ring indication (`:focus-visible`) and logical tab sequence.
- **Reduced Motion**: Disables 3D tilt and fold animations when `prefers-reduced-motion: reduce` is enabled.

## Browser Compatibility

- Supported in all modern evergreen browsers (Chrome, Firefox, Safari, Edge) supporting standard CSS 3D Transforms, `clip-path`, and CSS Custom Properties.
