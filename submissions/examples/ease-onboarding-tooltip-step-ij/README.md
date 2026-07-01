# Onboarding Tooltip Step

This submission implements a step-through onboarding tooltip with fade-and-slide transitions, position-aware arrow pseudo-elements, and dot-style step indicators.

## Features

- **Fade + Slide Animation**: Tooltips enter with a combined opacity and transform transition using a bounce easing curve for a polished feel.
- **Position Variants**: Tooltips render above or below the target element depending on the step configuration.
- **Step Indicators**: Dot indicators at the bottom reflect the current step, with an active glow on the selected dot.
- **Prev / Next Navigation**: Cyclic navigation loops through steps infinitely.
- **Reduced Motion Respect**: The `prefers-reduced-motion` media query disables transitions and locks transforms.

## Verification Steps

1. Open `demo.html` in a browser.
2. Click **Next** to advance through the three steps (Welcome, Customise, Notifications).
3. Observe the tooltip fade and slide in from a slightly offset, scaled-down state.
4. Click **Prev** to cycle backward.
5. Verify the arrow points correctly for each position (bottom vs top).
6. Enable `prefers-reduced-motion: reduce` in your browser DevTools and confirm animations are disabled.
