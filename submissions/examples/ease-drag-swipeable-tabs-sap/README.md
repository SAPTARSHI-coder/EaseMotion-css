# Drag Swipeable Tabs

Tabs whose panel content can be navigated by clicking a tab, using Arrow
keys, or dragging/swiping the panel area horizontally — with a sliding
active-tab indicator synced to whichever method was used.

**Level:** Advanced

## Usage

`goTo(index)` is the single source of truth for tab state, called from
click handlers, ArrowLeft/Right keyboard handlers, and the drag-release
threshold check (60px). It updates `aria-selected`, slides the panel track,
and repositions the indicator.

## Accessibility

- Implements the standard WAI-ARIA tabs pattern (`role="tablist"`/`"tab"`/
  `"tabpanel"`) with `aria-selected` kept in sync and ArrowLeft/ArrowRight
  roving focus between tabs, independent of the drag/swipe path.
- Dragging is an additional, optional way to change tabs — it's never the
  *only* way, since it's layered on top of fully-functional click and
  keyboard navigation.
- `:focus-visible` outline shown on tabs.
- `prefers-reduced-motion` removes both the indicator's slide transition
  and the panel track's slide transition; the drag-based panel-follow
  during an active pointer drag is direct 1:1 finger/cursor tracking (not
  an easing animation) so it isn't separately gated — only the settling
  snap-to-position afterward is affected.

## Notes

- All three interaction paths (click, keyboard, drag) converge on the same
  `goTo()` function, so the indicator, `aria-selected` state, and panel
  position can never drift out of sync regardless of which input method
  was used.
- `touch-action: pan-y` on the viewport allows vertical page scrolling to
  pass through normally while still capturing horizontal drag gestures for
  the tab swipe.