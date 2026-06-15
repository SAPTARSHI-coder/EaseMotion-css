# view-timeline-inset

## What
Comparison of `view-timeline-inset` values showing how offset adjustments affect when scroll-driven animations trigger. Three card groups demonstrate `0px`, `100px`, and `-50px` inset values.

## How
Each group contains cards with `view-timeline` animations. The `view-timeline-inset` property shifts the activation window: `0px` starts at the viewport edge, `100px` delays activation until the element is 100px inside, and `-50px` triggers it before the element enters the viewport. Cards flash a color change when their animation range activates.

## Why
`view-timeline-inset` provides fine-grained control over scroll-trigger timing, enabling effects like "peek" animations (negative inset) or delayed reveals (positive inset). This is essential for polished scroll-driven interactions without JavaScript intersection observers.
