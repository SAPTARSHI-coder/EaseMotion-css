# Zoom-In Carousel (Accessible Web)

A pure CSS animated carousel featuring a subtle Zoom-In transition, designed meticulously around Web Content Accessibility Guidelines (WCAG) 2.1 AAA standards.

## Features
- **Pure CSS State Engine**: Fully functional state management without JavaScript utilizing visually hidden radio inputs.
- **Accessibility First**:
  - **High Contrast**: All colors and borders meet or exceed WCAG AAA contrast ratios against their respective backgrounds.
  - **Legible Typography**: Utilizes `Atkinson Hyperlegible`, a font specifically designed for optimal readability by the Braille Institute.
  - **Screen Reader Friendly**: Inactive slides use `visibility: hidden;`. This is a critical feature that removes inactive slides completely from the accessibility tree, preventing confusing tab navigation into invisible content.
  - **Prominent Focus Management**: Uses a custom, high-contrast orange (`#d97706`) 3px offset focus ring when navigating via keyboard (`Tab`).
  - **Redundant Visual Cues**: Pagination dots do not rely on color alone to indicate an active state; they physically change shape by filling in with an inner circle.
- **Reduced Motion Respect**: Automatically detects `prefers-reduced-motion` OS settings via a CSS media query and strictly disables the zoom-in scale animations, falling back to a safe, instant crossfade to prevent triggering vestibular disorders.

## Customization
Adjust the transition timing or scale factors via the CSS variables in `:root`:

```css
:root {
    --crsl-duration: 0.6s;
    
    /* Scale logic */
    --crsl-scale-past: 1.15; /* Exiting forward */
    --crsl-scale-future: 0.85; /* Waiting in back */
}
```
