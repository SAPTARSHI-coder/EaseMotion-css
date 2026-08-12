# Pill Segmented Control

A smooth animated segment switcher with active indicator. Click a segment to switch — the active state transitions with a pill-shaped background that matches the container's rounded style.

## Usage

```html
<div class="segmented-control" role="group" aria-label="View options">
  <button class="segment active" data-value="day">Day</button>
  <button class="segment" data-value="week">Week</button>
  <button class="segment" data-value="month">Month</button>
  <button class="segment" data-value="year">Year</button>
</div>
```

Add `class="active"` to the currently selected segment. JavaScript toggles the active class on click.

## Why it fits EaseMotion CSS

Demonstrates smooth state transitions, pill-shaped interactive controls, and dark-theme design tokens consistent with the EaseMotion CSS framework.
