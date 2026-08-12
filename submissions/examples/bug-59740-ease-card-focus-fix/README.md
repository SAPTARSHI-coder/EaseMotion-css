# Ease-Card Focus Clipping Fix

Demonstrates the fix for the `ease-card` focus outline being clipped by a parent container with `overflow: hidden` (Issue #59740).

## What it does
When an `ease-card` component is placed inside a container with `overflow: hidden`, the default focus outline gets clipped, which degrades accessibility. This example provides a simple CSS override to ensure the focus ring remains fully visible.

## How to use it
Apply a negative `outline-offset` to the `:focus-visible` state of the `ease-card`.

```css
.ease-card:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: -2px; /* Pulls the outline inside the element's bounding box */
}
```

## Why it fits EaseMotion CSS
Accessibility is a core part of great UI. Ensuring focus rings are always visible aligns with the goal of creating inclusive, high-quality, and reliable CSS components without complex workarounds.
