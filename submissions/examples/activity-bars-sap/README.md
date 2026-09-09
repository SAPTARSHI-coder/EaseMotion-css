# Activity Bars

A compact responsive visualization made from animated vertical bars with variable heights and multiple size variants.

## Usage

Create an activity visualization with the `activity-bars` container and individual `activity-bar` elements:

```html
<div class="activity-bars activity-bars--medium">
  <span class="activity-bar" style="--bar-height: 40%"></span>
  <span class="activity-bar" style="--bar-height: 75%"></span>
  <span class="activity-bar" style="--bar-height: 55%"></span>
  <span class="activity-bar" style="--bar-height: 90%"></span>
</div>
```

Available size modifiers:

```html
<div class="activity-bars activity-bars--small">...</div>
<div class="activity-bars activity-bars--medium">...</div>
<div class="activity-bars activity-bars--large">...</div>
```

Set `--bar-height` on each bar to control its relative height.

## Why it is useful

Activity bars provide a lightweight way to communicate changing activity levels without requiring a full charting library. They work well in analytics cards, monitoring dashboards, status widgets, and compact data visualizations.

The component uses only HTML and CSS, includes responsive behavior, animates the bars as they appear, and respects `prefers-reduced-motion` for users who request less animation.