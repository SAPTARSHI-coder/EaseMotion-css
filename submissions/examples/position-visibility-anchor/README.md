# Position-Visibility Anchor

## Summary
Demonstrates `position-visibility` with CSS anchor positioning, using `position-try-fallbacks` for adaptive placement.

## Key Concepts
- **`anchor-name`** assigns a name to an element so it can act as an anchor for positioned elements.
- **`position-anchor`** attaches a positioned element to an anchor by name.
- **`position-visibility: anchors-visible`** hides the positioned element when the anchor is fully out of view or obscured.
- **`position-visibility: no-overflow`** hides the element when it would overflow the viewport.
- **`position-try-fallbacks`** provides fallback positions (flip-block, flip-inline) when the primary position causes overflow.

## Usage
Set `anchor-name: --my-anchor` on the anchor element. On the target, use `position-anchor: --my-anchor`, `position-area`, `position-visibility`, and `position-try-fallbacks` to control placement and visibility behavior during scroll.
