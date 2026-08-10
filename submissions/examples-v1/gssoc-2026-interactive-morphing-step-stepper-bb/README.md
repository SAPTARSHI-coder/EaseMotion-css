# Interactive Morphing Multi-Step Form Stepper

An interactive, responsive multi-step form stepper component built for EaseMotion CSS showcasing smooth progress bar morphing, glowing active state indicators, and animated content panel transitions.

## 1. What does this do?
This component provides a complete multi-step wizard interface with smooth CSS transition effects. As users progress through steps, the connecting progress bar fluidly fills, active indicators scale with a pulsing glow, and content panels transition seamlessly with subtle offset shifts.

## 2. How is it used?
1. Include `style.css` in your HTML document.
2. Structure your markup using `.stepper-container`, `.stepper-progress-wrapper`, and `.step-content-card`.
3. Update `.step-item` classes (`.active`, `.completed`) and toggle corresponding `.content-panel` elements via DOM script or framework state.

## 3. Why is it useful?
- **Improved UX**: Reduces cognitive load during long multi-step workflows (onboarding, checkout, registration).
- **Accessibility**: Keyboard navigable step triggers with `aria-current="step"` indicators.
- **Zero-Dependency**: Lightweight vanilla CSS micro-animations without external UI frameworks.
