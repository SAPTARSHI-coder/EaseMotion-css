# Interactive Timeline Example

## What does this do?
This example provides a reusable pattern for creating both vertical and horizontal interactive timelines. It features animated connectors that "grow" as the user scrolls, along with staggered entrance animations for timeline items.

## How is it used?
1. **Vertical Timeline**: Use the `.timeline-v` container with `.timeline-v-item` children. Include the `.timeline-v-connector` for the animated line effect.
2. **Horizontal Timeline**: Use the `.timeline-h` container within a scrollable `.timeline-h-container`. Include the `.timeline-h-connector` for the animated line effect.

Integration with `ease-reveal` and `ease-delay-*` allows for smooth, scroll-triggered animations.

## Why is it useful?
Timelines are a common UI pattern for displaying roadmaps, process flows, and user journeys. This example provides a polished, animated starting point that leverages EaseMotion's core animation system, saving developers from building complex layouts and animations from scratch.

## Tech Stack
- HTML
- CSS (Native CSS Animations, no JS required for layout/animation)
- EaseMotion CSS (Core Variables, Animations, Utilities)
- `reveal.js` (Core EaseMotion script for scroll-triggered activation)

## Preview
Open `demo.html` directly in your browser to see the timelines in action.

## Contribution Notes
- Responsive design: Vertical timeline collapses gracefully on mobile; horizontal timeline is scrollable.
- Accessibility: Includes `prefers-reduced-motion` support to disable animations.
- Integration: Specifically designed to work with `ease-reveal` and staggered delays.
