# Hover Badge: Neumorphism

A highly tactile, pure CSS UI component featuring Soft UI (Neumorphism) styling. The component demonstrates interactive buttons that reveal notification badges with a bouncy animation upon hover or focus.

## Features
- Pure CSS and HTML implementation. No JavaScript is required for the hover states or animations.
- **Component Architecture & Styling Mechanics**: 
  - **Neumorphic Base Effect**: The core aesthetic of Neumorphism (Soft UI) is achieved by matching the element's background color exactly to the page's background color (`#e0e5ec`). Depth is then created using a complex, dual-layered `box-shadow`: a dark shadow (`rgba(163, 177, 198, 0.6)`) applied to the bottom-right, and a light shadow (`rgba(255, 255, 255, 0.5)`) applied to the top-left.
  - **Interactive States**: To make the component feel tactile and physical:
    - On `:hover` / `:focus`, the outer shadows are slightly reduced, making the button appear to depress slightly.
    - On `:active` (click), the shadows instantly switch to `inset`, creating a realistic pushed-button effect.
  - **Bouncy Hover Badge**: The badge element is hidden by default using `opacity: 0` and `transform: scale(0) translateY(10px)`. When the parent element is hovered or focused, the badge reveals itself using a snappy `cubic-bezier(0.175, 0.885, 0.32, 1.275)` timing function, causing it to overshoot its final scale and bounce into place.
- **Theming**: Configured via CSS Custom Properties. The variables `--bg-color`, `--shadow-light`, and `--shadow-dark` are critical to maintaining the Neumorphic illusion. Accent colors for the icons and badges are also easily configurable.
- Fully accessible semantic structure. Uses `<button>` for interactive elements and `tabindex="0"` for non-native interactive elements. Includes `aria-label` for screen reader context. Honors the `prefers-reduced-motion` accessibility standard by disabling the bouncy animations and relying on instant display toggling if requested by the OS.

## Usage
Open `demo.html` in your browser. You will see a notification bell and a user avatar, both styled as physical, extruded surfaces from the background. Hover over (or keyboard tab to) either element to watch the badges pop out with a playful animation. Click the elements to see the neumorphic inset shadow "pressed" state.

## Files
- `demo.html`: The HTML structure defining the wrappers, SVGs, and the nested `.hover-badge` elements.
- `style.css`: The styling, the critical `box-shadow` configurations for Neumorphism, and the `cubic-bezier` animation logic for the badge reveal.
