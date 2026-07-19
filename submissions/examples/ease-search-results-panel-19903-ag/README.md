# Animated Search Results Panel

This submission implements the `ease-search-results-panel` component — a dropdown panel below a search input featuring a `scaleY` entrance animation, staggered result rows, highlighted matched text, category grouping, and a no-results empty state.

---

## Techniques Used

### ScaleY Panel Entrance
The panel uses `transform-origin: top center` and transitions from `scaleY(0.92)` + `opacity: 0` to fully visible when the `.is-open` class is toggled:

```css
.ease-search-panel {
  transform-origin: top center;
  transform: scaleY(0.92) translateY(-8px);
  opacity: 0;
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.ease-search-panel.is-open {
  transform: scaleY(1) translateY(0);
  opacity: 1;
}
```

### Staggered Row Entrance
Each `.result-item` slides in from the left with increasing `animation-delay`.

### Matched Text Highlight
The `<mark>` element is styled with a semi-transparent cyan background to draw attention to the matched portion of text.

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Click the search field — verify the panel scales in smoothly from the top.
3. Observe result rows sliding in one by one.
4. Verify `<mark>` highlights the matched portion of result titles.
5. Type something unrecognised (e.g. `zzz`) — verify the no-results state appears.
6. Enable `prefers-reduced-motion` — verify the panel appears instantly without animation.
