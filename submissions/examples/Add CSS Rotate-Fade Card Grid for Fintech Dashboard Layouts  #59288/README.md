# CSS Rotate-Fade Card Grid

A highly interactive, fintech-focused metric card grid featuring a smooth "Rotate-Fade" interaction. Designed with pure HTML/CSS, this component brings life to data dashboards through subtle 2D/3D rotations, glow fades, and cascading entrance animations.

## Features

- **Pure CSS:** Entirely CSS-driven; absolutely no JavaScript required.
- **Rotate-Fade Interaction:** On hover, cards smoothly rotate (`transform: rotate()`) and levitate, while a background radial glow fades in (`opacity`) alongside a sliding footer detail link.
- **Cascading Entrance:** Cards utilize keyframe animations with `animation-delay` mapped to custom CSS properties to stagger their entrance on page load.
- **Responsive Layout:** CSS Grid adapts seamlessly from mobile layouts to ultra-wide desktop monitors.
- **Fintech Aesthetics:** A premium dark theme with soft, low-opacity accent backgrounds for icons, strict typography (Inter), and clear trend indicators.
- **Accessibility & UX:** Includes `@media (prefers-reduced-motion: reduce)` to disable layout-shifting animations, and guarantees touch-device compatibility by displaying hover-states statically on smaller screens.

## File Structure

- `demo.html` - The showcase page demonstrating the card grid structure and custom animation sequencing.
- `style.css` - The stylesheet containing layout definitions, color palettes, and transition/keyframe logic.

## Usage

1. Copy the `.dashboard-container` structure from `demo.html` into your project.
2. Include the CSS from `style.css`.
3. To adjust the entrance order of new cards, simply update the inline custom property: `style="--animation-order: 5;"`.

## CSS Custom Properties

The component is highly customizable through a centralized set of variables:

```css
:root {
    /* Color Palette - Dark Fintech Theme */
    --bg-main: #0b0f19;
    --card-bg: #151a2a;
    --card-border: #232b42;
    --text-primary: #f8fafc;
    --text-secondary: #94a3b8;
    
    /* Animation Tokens */
    --transition-speed: 0.4s;
    --transition-timing: cubic-bezier(0.2, 0.8, 0.2, 1);
    --rotate-degree: 2deg;
    --fade-opacity: 0.1;
}
```

## Customization

- To intensify the rotation effect, increase `--rotate-degree`.
- The hover glow brightness can be managed via `--fade-opacity`.
- The easing curve (`--transition-timing`) provides a smooth, slightly decoupled feel, but can be swapped to `ease-out` for snappier feedback.
