# Rotate-Fade SaaS Tabs

## What does this do?

This pure HTML and CSS component switches between SaaS dashboard panels with a perspective rotate-fade entrance and native radio-button state management.

## How is it used?

Place radio controls before the tab labels and panels so the checked-state selectors can reveal the matching panel.

```html
<input
  class="tab-control"
  type="radio"
  name="workspace-tabs"
  id="tab-overview"
  checked
/>
<input
  class="tab-control"
  type="radio"
  name="workspace-tabs"
  id="tab-automation"
/>

<div class="tab-list" role="group" aria-label="Choose workspace section">
  <label for="tab-overview">Overview</label>
  <label for="tab-automation">Automation</label>
</div>

<div class="panels">
  <section class="tab-panel panel-overview">...</section>
  <section class="tab-panel panel-automation">...</section>
</div>
```

The component uses these main custom properties:

| Property         | Purpose                            | Default                                |
| ---------------- | ---------------------------------- | -------------------------------------- |
| `--panel-motion` | Panel entrance duration and easing | `540ms cubic-bezier(0.2, 0.8, 0.2, 1)` |
| `--surface`      | Panel and active-tab background    | `#ffffff`                              |
| `--line`         | Component border color             | `#d7dee8`                              |
| `--radius`       | Shell and data-card corner radius  | `8px`                                  |

## Why is it useful?

The pattern creates a functional, zero-JavaScript SaaS workspace with native keyboard radio navigation. It fits EaseMotion CSS through readable state selectors, transform-and-opacity motion, responsive layouts, visible focus treatment, forced-color support, and a `prefers-reduced-motion` fallback.
