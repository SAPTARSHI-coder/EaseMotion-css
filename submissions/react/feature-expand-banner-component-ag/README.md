# Expand Banner Component (React)

## Description
A React component demonstrating a smooth "Expand" accordion-style animation. It uses modern CSS Grid techniques (`grid-template-rows: 0fr` to `1fr`) to smoothly animate height to `auto` without requiring JavaScript calculations or fixed heights.

## Files
- `ExpandBannerAG.jsx`: Manages the open/closed state and ARIA attributes.
- `style.css`: Uses CSS Grid for the height animation and applies a rotation transition to the chevron icon.

## Accessibility
- The header is a native `<button>` element.
- Uses `aria-expanded` to indicate state to screen readers.
- Content wrapper uses `aria-hidden` when closed.
- **Reduced Motion**: Disables the height, opacity, and chevron rotation transitions, making the open/close action instantaneous.
