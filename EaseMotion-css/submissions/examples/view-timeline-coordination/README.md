# CSS view-timeline-name Multi-Element Coordination

## What

This example demonstrates coordinating multiple visual effects across different elements using a shared `view-timeline-name`. A progress indicator, parallax background, sticky heading, and reveal animations all sync to the same scroll-driven timeline.

## How

A named view-timeline is defined with `view-timeline-name: --section-progress` on a wrapper element. Other elements reference this timeline via `animation-timeline: --section-progress`. This keeps all animations perfectly synchronized without needing JavaScript scroll listeners.

## Why

Using a shared named timeline ensures consistent timing across disparate elements, reduces code duplication, and enables complex multi-element scroll choreography that stays perfectly in sync. The `prefers-reduced-motion` query provides an accessibility fallback.
