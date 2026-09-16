# Sliding Tab Indicator

A reusable tab navigation pattern with a smooth sliding indicator that follows
the active tab.

## What does it do?

The component provides:

- Multiple selectable tabs.
- A sliding active-state indicator.
- Dynamic indicator width based on the selected tab.
- Animated content-panel switching.
- Keyboard navigation with left and right arrow keys.
- Responsive horizontal tab scrolling.
- Reduced-motion support.
- No external libraries or assets.

## How do I use it?

Create a tab navigation:

```html
<nav class="tabs" aria-label="Content sections">
  <button
    class="tabs__trigger is-active"
    type="button"
    aria-selected="true"
    data-panel="panel-overview"
  >
    Overview
  </button>

  <button
    class="tabs__trigger"
    type="button"
    aria-selected="false"
    data-panel="panel-activity"
  >
    Activity
  </button>

  <span class="tabs__indicator" aria-hidden="true"></span>
</nav>
```

