# Focus Outline Clipping Fix for ease-pagination

This submission addresses an accessibility bug where the focus outline for `.ease-pagination` (and its items) gets clipped when placed inside a container with `overflow: hidden` or `overflow: auto`.

## Issue
By default, the browser's focus outline is drawn outside the element's bounding box. When the component is near the edge of a container that clips its overflow, the focus ring becomes partially or fully invisible, degrading accessibility for keyboard users.

## Solution
We ensure the focus indicator remains visible by pulling it inward using CSS `outline-offset` with a negative value:

```css
.ease-pagination-item:focus-visible {
    outline: 2px solid #1d4ed8;
    outline-offset: -2px; /* Pulls the outline inward */
}
```

This ensures the focus ring is always drawn within the component's boundaries, preventing clipping by parent elements.
