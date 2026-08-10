# CSS Scale-Hover Stepper for Creative Portfolio

A visually stunning, pure CSS stepper designed for Creative Portfolio layouts. It features a scale-on-hover interaction, glowing progress indicators, and glassmorphic content panels, all driven seamlessly without JavaScript.

## Features

- **Scale-Hover Interaction**: Nodes smoothly scale and elevate when hovered, providing satisfying tactile feedback.
- **Pure CSS State Management**: Powered by the modern `:has()` selector to track states and drive content panel visibility and progress bar width/height.
- **Creative Portfolio Aesthetics**: Dark mode default, neon gradients, and frosted glass (glassmorphism) panel design.
- **Responsive Design**: Automatically transitions from a horizontal progress layout on desktop to a vertical timeline on mobile viewports.
- **Accessibility Ready**: Implements `.sr-only` visually hidden inputs, preserves native keyboard tabbing, and provides explicit `:focus-visible` outlines. Includes a `@media (prefers-reduced-motion: reduce)` block to disable scaling and keyframe animations for users who prefer less motion.

## Customization (CSS Variables)

You can tune the core visual and animation properties through CSS Custom Properties found in `.ease-scale-hover-stepper`:

```css
.ease-scale-hover-stepper {
    --stepper-primary: #00f2fe;    /* Gradient Color 1 */
    --stepper-secondary: #4facfe;  /* Gradient Color 2 */
    --stepper-inactive: #2d3748;   /* Default borders / lines */
    --stepper-bg: #111;            /* Background for markers */
    
    --hover-scale: 1.15;           /* How much it enlarges on hover */
    --hover-lift: -8px;            /* Upward translate on hover */
    --anim-duration: 0.4s;         /* Speed of the transition */
    --anim-curve: cubic-bezier(0.34, 1.56, 0.64, 1); /* Bounce curve */
}
```

## Structure
- `demo.html` - Contains the HTML markup for the Stepper structure, including the hidden radio inputs and glassmorphic panels.
- `style.css` - Contains the logic for state handling, keyframe animations, responsive reflow, and accessibility.
