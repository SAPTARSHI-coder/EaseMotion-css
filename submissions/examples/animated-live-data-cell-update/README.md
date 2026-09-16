# Animated Live Data Cell Update

A lightweight CSS interaction for communicating live changes to data values.

## Overview

When dashboard metrics or table values change dynamically, users can easily miss the update if the value simply changes in place.

This example uses a short visual transition to draw attention to the updated value without disrupting the surrounding layout.

The updated value:

- Fades into view
- Moves slightly upward
- Briefly scales up
- Receives a subtle directional highlight
- Settles back into its normal state

## Usage

Apply the `is-updated` state to a value whenever its content changes.

```html
<span class="live-value is-updated is-up">
  24,842
</span>
```

For a decrease:

```html
<span class="live-value is-updated is-down">
  18,420
</span>
```

The animation itself does not require JavaScript.

JavaScript can be used by an application to update the value and toggle the state class.

## Example

```html
<div class="metric-card">
  <span class="metric-label">Revenue</span>

  <strong class="metric-value is-updated is-up">
    ₹84,240
  </strong>
</div>
```

## Animation Behavior

### Value increased

The updated value receives a subtle green highlight:

```text
opacity → scale → highlight → normal
```

### Value decreased

The same motion is used with a different visual indicator to distinguish the direction of change.

The animation is intentionally short so frequently changing data does not become distracting.

## CSS

The core animation is:

```css
.live-value.is-updated {
  animation:
    live-value-update
    550ms
    cubic-bezier(0.22, 1, 0.36, 1);
}
```

The animation uses only:

* `opacity`
* `transform`
* `background`

to keep the interaction lightweight.

## Accessibility

The example respects the user's system-level reduced-motion preference:

```css
@media (prefers-reduced-motion: reduce) {
  .live-value.is-updated {
    animation: none;
  }
}
```

When reduced motion is enabled, values update normally without the animation.

## Design Goals

This example follows the EaseMotion CSS philosophy:

* **Human-readable** — state classes such as `is-updated` and `is-up` clearly communicate intent.
* **Animation-first** — motion communicates a meaningful data change.
* **Composable** — the animation can be applied to dashboard metrics, tables, counters, prices, scores, and system metrics.
* **Lightweight** — no external dependencies are required.
* **Non-disruptive** — the animation does not change the layout of surrounding content.

## Demo

Open `demo.html` directly in a browser.

Click **Simulate update** to update the dashboard values and trigger the animation.

The JavaScript is only included to simulate live data changes for demonstration purposes. The visual effect itself is entirely CSS-based.

## Files

```text
animated-live-data-cell-update/
├── demo.html
├── style.css
└── README.md
```

## Reduced Motion

The demo supports:

```text
prefers-reduced-motion: reduce
```

Users who prefer reduced motion will see values update without the animation.

## Contribution

This is a proposed EaseMotion CSS example.

The final class naming, design tokens, and framework integration can be standardized by the EaseMotion CSS maintainer.
