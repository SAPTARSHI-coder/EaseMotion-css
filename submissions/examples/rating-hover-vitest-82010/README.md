# Rating Component Mouse Hover Star Highlight Vitest Test Suite (#82010)

Automated Vitest unit-test coverage for the Rating Component's mouse-hover star-highlight behavior in EaseMotion CSS.

## Scenarios Covered
- **CSS-Driven Rating Component**:
  - Reverse flex-direction (`flex-direction: row-reverse`) DOM contract (reverse 5 to 1 order) for CSS `~` sibling selector cascade.
  - Sibling hover rules and highlight color variables (`label:hover`, `label:hover ~ label`).
  - Disabled component state contract (`.rating--disabled`).

- **JS-Interactive Rating Component**:
  - **Initial State**: Stars default to unselected (`rating = 0`, `aria-checked="false"`).
  - **Hover Highlight**: Hovering star position $N$ highlights stars 1 through $N$.
  - **First & Last Star Boundaries**: 1-star hover highlights 1 star; 5-star hover highlights all 5 stars.
  - **Pointer Reset**: `mouseleave` resets hover preview state.
  - **Hover Over Committed Selection**: Previews hover rating on `mouseenter` and cleanly restores committed rating on `mouseleave`.
  - **Disabled Node Handling**: Non-interactive star nodes ignore hover events.
  - **Unexpected/Invalid Inputs**: Missing/NaN `data-value` attributes handle gracefully without throwing errors.

## Running Tests
```bash
npx vitest run submissions/examples/rating-hover-vitest-82010/rating.test.js
```
