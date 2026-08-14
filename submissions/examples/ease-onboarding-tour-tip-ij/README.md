# Onboarding Tour Tip

This submission implements an interactive onboarding tour tip with arrow-anchored tooltips, step progression, and skip capability.

## Features

- **Scale + Fade Animation**: The tip enters with a combined opacity and transform transition using a bounce easing curve for a polished reveal.
- **Arrow Pointer**: A rotated square pseudo-element acts as an arrow that points toward the target UI element, positioned dynamically based on the step's configured direction.
- **Multi-Step Progression**: Three steps walk through simulated UI targets with Prev / Next navigation and a Done state on the final step.
- **Progress Dots**: Dot indicators at the bottom of the tip reflect the current step with an active glow and scale highlight.
- **Skip Tour**: A skip button dismisses the tour entirely.
- **Boundary Awareness**: The tip position clamps within the stage bounds to avoid overflow.
- **Reduced Motion Respect**: The `prefers-reduced-motion` media query disables all component transitions.

## Verification Steps

1. Open `demo.html` in a browser.
2. Click **Next** to advance through the three steps (Dashboard, Search, Settings).
3. Observe the tooltip scale up and fade in with each step change.
4. Click **Prev** to navigate backward; note the Prev button disables on the first step.
5. Verify the arrow points toward the appropriate target (bottom or top direction).
6. Click **Skip Tour** to dismiss the tip.
7. Enable `prefers-reduced-motion: reduce` in your browser DevTools and confirm animations are disabled.
