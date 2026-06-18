# View Transition API Demo — Animated List Reorder

Demonstrates the View Transition API for same-document DOM reordering: filtering and sorting a list animates each item smoothly to its new position instead of an instant jump.

## How this differs from existing View Transition submissions

The existing submissions (`ease-view-transitions`, `view-transition-morph-sk`, `view-transitions-api-v1-v1`, `view-transitions-im`, `view-transitions-nav`) all cover page navigation (cross-document or same-document tab switching) or card-to-detail morphing. None demonstrate dynamic list REORDERING — sorting/filtering a collection of items and having the browser animate each one to its new position. That's a distinct, commonly-cited View Transitions use case this demo fills.

## How it works

```js
function update() {
  if (document.startViewTransition) {
    document.startViewTransition(() => render());
  } else {
    render();
  }
}
```

Each list item gets a unique `view-transition-name` (`--vt-name: vt-person-{id}`) so the browser can track and animate that specific element across the DOM re-render, rather than crossfading the whole list.

## Why is this useful?

Sortable/filterable tables, kanban boards, leaderboards, and reorderable lists all benefit from this — users can visually track where an item moved instead of losing their place in an instant re-render.

## Tech Stack

- HTML
- Plain CSS (View Transitions API pseudo-elements)
- Vanilla JS (`script.js`, ~50 lines, no dependencies)

## Accessibility

Includes `@media (prefers-reduced-motion: reduce)` to disable all view-transition group/old/new animations for users who prefer reduced motion — items still reorder, just without the animated motion.

## Browser support

| Browser | Behavior |
|---------|----------|
| Chrome / Edge 111+ | Smooth animated reorder |
| Firefox, Safari | Falls back to instant re-render via the `if (document.startViewTransition)` guard — no errors |

## Files

- `demo.html` — filter/sort toolbar + list
- `style.css` — list styling and view-transition pseudo-element rules
- `script.js` — filter/sort state and `startViewTransition()` wiring

## Why it fits EaseMotion CSS

Uses the framework's existing design tokens (`--ease-color-*`, `--ease-space-*`, `--ease-radius-*`) for all visual styling, keeping the View Transition logic itself framework-agnostic and reusable.

Closes #11314
