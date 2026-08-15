# ease-scroll-fade-in-list-sap

A simple list where each row fades and slides up individually as it enters the viewport, with a light stagger between items.

## Usage
1. Include `style.css`.
2. Add markup: `.fade-item` rows inside `.fade-list-sap`.
3. Attach the `IntersectionObserver` from `demo.html`, which observes each item individually (not just the list container) and applies a per-item stagger delay.

## Notes
- Each item is observed independently rather than the whole list as one unit, so items reveal progressively as the user scrolls through a long list, not all at once when the list first touches the viewport.
- Respects `prefers-reduced-motion`: slide transform is removed, leaving a simple opacity fade.