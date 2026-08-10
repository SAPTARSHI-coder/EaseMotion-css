# Ease Drawer Focus Bug Fix (#59757)

## What it does
This submission provides a fix for Issue #59757, where the `ease-drawer` component's focus outline gets clipped if it is placed inside a container with `overflow: hidden` or `overflow: auto`.

## How to use it
To fix the clipping issue, apply a negative `outline-offset` to the `:focus` and `:focus-visible` states of the drawer. 

```css
.ease-drawer:focus,
.ease-drawer:focus-visible {
    outline: 4px solid var(--primary);
    outline-offset: -4px; /* Prevents clipping by drawing the outline inside the element's bounding box */
}
```

## Why it fits EaseMotion CSS
Accessibility should never compromise visual aesthetics. By using a negative outline offset, we retain the highly visible native focus ring ensuring great accessibility, while preventing unwanted visual clipping from parent containers. This provides a clean, polished experience that aligns perfectly with EaseMotion's standards.
