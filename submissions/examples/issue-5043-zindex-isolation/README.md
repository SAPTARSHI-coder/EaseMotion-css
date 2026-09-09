# Fix: z-index conflict in overlapping stacked animated components

**Fixes issue:** #5043

## Problem
When two or more animated components (cards, modals, tooltips) are
stacked or overlapping and animate simultaneously, their z-index
layering can break during the animation - causing the wrong element
to render on top, regardless of DOM order or intended z-index.

## Root Cause
Without an explicit stacking context, overlapping animated elements
can have their paint/composite order affected during animation,
since they share the same parent stacking context and compete for
layering based on transform/animation state.

## Fix
Added `isolation: isolate` to animated container components:
`.ease-card`, `.ease-modal`, `.ease-tooltip`, `.ease-dropdown`.

`isolation: isolate` creates a new, independent stacking context for
each component. This scopes each component's internal layering to
itself and prevents animation-driven compositing changes in one
component from affecting the stacking order of sibling components.

## Files
- `style.css` - the fix
- `demo.html` - two overlapping animated cards, demonstrating
  correct stacking order is maintained throughout the animation

## Testing
1. Open demo.html
2. Observe two overlapping animated cards (Card A purple, Card B red)
3. Confirm Card A consistently stays on top of Card B throughout
   the animation, with no flickering or z-index swaps
4. Tested in Chrome and Firefox

## Acceptance Criteria Met
- [x] isolation: isolate added to animated container components
- [x] Stacking order remains correct during simultaneous animations
- [x] No visual regression for non-overlapping components

## Proposed integration
Add `isolation: isolate` to `.ease-card`, `.ease-modal`,
`.ease-tooltip`, and `.ease-dropdown` base rules in their respective
component files (`components/card.css`, `components/modal.css`,
`components/tooltip.css`, `components/dropdown.css`).
