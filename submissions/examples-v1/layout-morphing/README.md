# Layout Morphing

## Overview

Layout Morphing introduces semantic EaseMotion utilities that animate layout changes with polished transitions. This submission helps dashboard, card, and responsive layouts feel more fluid as width, grid structure, flex spacing, and collapse states change.

## Utilities

- `.ease-layout-morph`
- `.ease-layout-morph-fast`
- `.ease-layout-morph-smooth`
- `.ease-layout-morph-cinematic`

## Basic Usage

Add one of the utilities to any container or component that changes layout:

```html
<div class="ease-layout-morph">
  <!-- responsive grid, sidebar, cards, etc. -->
</div>
```

## Feature Examples

### Grid → List Example

Use `.ease-layout-morph` on a grid container that toggles between multi-column and stacked list layouts. The transition animates `grid-template-columns`, `gap`, and content spacing for a smoother reflow.

### Sidebar Collapse Example

Apply the utility to a sidebar layout wrapper so the content responds gracefully when the sidebar width changes or collapses.

### Card Expansion Example

Wrap expanding cards with the utility to animate `width`, `height`, `padding`, and `border-radius` when cards grow or shrink.

### Responsive Layout Example

This utility is designed to work with breakpoint-driven layout changes. `grid-template-columns` and `grid-template-rows` transitions are included where browser support allows.

## Variant Comparison

- `.ease-layout-morph` — balanced 300ms transition for general layout changes
- `.ease-layout-morph-fast` — 200ms faster response, ideal for productivity UI
- `.ease-layout-morph-smooth` — 450ms refined easing for premium motion
- `.ease-layout-morph-cinematic` — 650ms slower storytelling animation

## Accessibility Notes

The feature respects `prefers-reduced-motion: reduce` by disabling transitions while preserving layout behavior. This keeps the layout functional without unnecessary motion.

## Performance Considerations

This utility transitions layout-safe properties and avoids forced animations on non-layout paint-heavy effects. Use it on containers and elements that change size, spacing, or grid structure without requiring JavaScript animation libraries.

## Demo

Open `demo.html` directly in your browser to see the Layout Morphing examples.
