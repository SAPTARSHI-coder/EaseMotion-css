# CSS Animated Responsive Timeline

A highly responsive, purely CSS chronological timeline component. This project demonstrates how to build fluid, dynamic flexbox layouts that smoothly adapt from a complex alternating dual-axis grid on Desktop to a unified, left-aligned stack on Mobile devices without causing layout jank or relying on JavaScript calculations.

## 📋 Mandatory Questions

### 1. What does this do?

This component renders an interactive vertical timeline tracking chronological events. On Desktop, the timeline features a glowing central spine, with cards alternating gracefully on the left and right (`.left-side`, `.right-side`). As users hover over or tab into any specific timeline item, a connected `.timeline-node` dot physically expands and illuminates directly on the central spine, while the corresponding `.timeline-card` elevates natively off the page. When viewed on smaller tablet/mobile devices, the central spine slides seamlessly to the left edge, and all cards snap into a unified vertical stack.

### 2. How is it used?

The layout logic relies on standard CSS Flexbox constraints and clever absolute positioning. The wrapper `.timeline-item` uses `width: 50%` to lock the items into their respective halves of the screen.

**The Hover Interactivity Engine:**
Because the `.timeline-node` (the dot on the spine) and the `.timeline-card` (the text box) are sibling descendants of the `.timeline-item` wrapper, we can orchestrate simultaneous cross-element animations using a single CSS hover rule, without requiring JavaScript event listeners.

```css
/* When the wrapper is hovered... */
.timeline-item:hover .timeline-card {
  transform: translateY(-8px); /* ...elevate the card */
}

.timeline-item:hover .timeline-node {
  transform: scale(1.4); /* ...and expand the node simultaneously */
  background-color: var(--timeline-accent);
}
```

**Responsive Reflow:**
The `@media (max-width: 768px)` breakpoint overrides the `.left-side` and `.right-side` rules. It pushes the `.timeline-spine` to the far left (`left: 20px`), forces all `.timeline-item` wrappers to `width: 100%`, and realigns the absolute positioning of the nodes to anchor them to the newly shifted spine.

### 3. Why is it useful?

Building responsive alternating timelines typically requires complex DOM manipulation or heavy JS layout engines to calculate node coordinates and line heights on mobile resize events. By mapping structural alignment directly to native CSS rules, the browser handles the complex reflow math instantly on the main thread. This ensures zero Cumulative Layout Shift (CLS) during page rendering. Additionally, utilizing `transform: scale()` on the nodes and `translateY()` on the cards ensures that hover interactions never trigger layout repaints, delivering a buttery-smooth 60fps experience that preserves mobile battery life.
