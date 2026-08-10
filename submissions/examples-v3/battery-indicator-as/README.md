# Battery Indicator

### What does this do?

It shows a set of battery level indicators. Each battery has a body, a positive cap, and an inner fill whose width is driven by a `--level` custom property. The fill color changes with the charge state (green, amber, red), a low battery gently blinks, and a charging battery shows a bolt and a soft pulse.

### How is it used?

```html
<div class="batt full" style="--level: 100%;">
  <span class="batt-cap"></span>
  <span class="batt-body"><span class="batt-fill"></span></span>
  <span class="batt-pct">100%</span>
</div>
```

Set the charge with the `--level` inline variable and pick a state class: `full`, `mid`, `low`, or `charging`. The `charging` variant adds a `batt-bolt` overlay inside the body.

### Why is it useful?

Dashboards, device managers, and IoT panels show battery status constantly. This gives a self-contained battery meter with color-coded states and status animations, built with only CSS and one custom property, with no script or icon font.
