# Accessible Tabs (-as)

## What does this do?

A tabs component built to the WAI-ARIA Tabs pattern: full keyboard navigation with roving tabindex, an active-tab indicator that slides using only `transform` (so it stays on the compositor), and a `prefers-reduced-motion` fallback. No dependencies.

## How is it used?

```html
<link rel="stylesheet" href="style.css" />

<div class="ease-tabs">
  <div class="ease-tabs__list" role="tablist" aria-label="Account settings">
    <button
      class="ease-tabs__tab"
      role="tab"
      id="ease-tab-profile"
      aria-controls="ease-panel-profile"
      aria-selected="true"
      tabindex="0"
    >
      Profile
    </button>
    <button
      class="ease-tabs__tab"
      role="tab"
      id="ease-tab-billing"
      aria-controls="ease-panel-billing"
      aria-selected="false"
      tabindex="-1"
    >
      Billing
    </button>
    <span class="ease-tabs__indicator" aria-hidden="true"></span>
  </div>

  <div
    class="ease-tabs__panel"
    role="tabpanel"
    id="ease-panel-profile"
    aria-labelledby="ease-tab-profile"
    tabindex="0"
  >
    …
  </div>
  <div
    class="ease-tabs__panel"
    role="tabpanel"
    id="ease-panel-billing"
    aria-labelledby="ease-tab-billing"
    tabindex="0"
    hidden
  >
    …
  </div>
</div>
```

The small inline script wires up selection, the roving tabindex, and the indicator; see `demo.html`.

## Keyboard model

| Key              | Action                                                                 |
| ---------------- | ---------------------------------------------------------------------- |
| `Tab`            | Enter the tablist (lands on the selected tab only) / move to the panel |
| `Left` / `Right` | Previous / next tab (wraps), activates it                              |
| `Home` / `End`   | First / last tab                                                       |

## Accessibility notes

- Implements the [ARIA Tabs pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/): `role="tablist"` / `role="tab"` (`aria-selected`, `aria-controls`) / `role="tabpanel"` (`aria-labelledby`).
- **Roving tabindex:** only the selected tab is in the tab order (`tabindex="0"`); the rest are `-1`, so `Tab` reaches the tablist once and arrow keys move within it — the expected behaviour for a tab widget.
- Each panel is focusable (`tabindex="0"`) so keyboard users can move from the tab straight into its content.
- Visible `:focus-visible` styles on tabs and panels.

## Performance

The indicator is a 1px-wide bar stretched and positioned with `transform: translateX() scaleX()` and `transform-origin: left`, so both the move and the resize are GPU-friendly transforms rather than animating `left`/`width` (which trigger layout). It re-measures on resize, and the transition is removed under `prefers-reduced-motion`.

## Why is it useful?

Tabs are everywhere, but most implementations break the keyboard contract — every tab in the tab order, no arrow-key navigation, or a sliding indicator that animates `width` and janks. This is a correct, dependency-free reference that fits EaseMotion's animation-first, beginner-friendly, zero-dependency philosophy while getting the accessibility and the animation performance right.
