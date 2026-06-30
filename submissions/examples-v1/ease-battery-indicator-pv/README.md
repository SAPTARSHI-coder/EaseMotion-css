# Animated Battery Indicator

## 1. What does this do?

A pure CSS animated battery indicator that visually represents charge levels (full, high, medium, low, critical) and a charging state. Low and critical levels pulse to draw attention. The charging state animates a fill sweep with a lightning bolt icon — all without JavaScript.

## 2. How is it used?

Add the `battery` base class plus a level modifier class:

```html
<!-- Full -->
<div class="battery battery-full">
  <div class="battery-body">
    <div class="battery-fill"></div>
  </div>
</div>

<!-- Low (pulsing) -->
<div class="battery battery-low">
  <div class="battery-body">
    <div class="battery-fill"></div>
  </div>
</div>

<!-- Charging -->
<div class="battery battery-charging">
  <div class="battery-body">
    <div class="battery-fill"></div>
  </div>
</div>
```

### Level modifiers

| Class              | Level | Behavior               |
| ------------------ | ----- | ---------------------- |
| `battery-full`     | 100%  | Green, static          |
| `battery-high`     | 75%   | Light green, static    |
| `battery-medium`   | 50%   | Yellow, static         |
| `battery-low`      | 25%   | Orange, slow pulse     |
| `battery-critical` | 10%   | Red, fast pulse        |
| `battery-charging` | —     | Purple sweep + ⚡ icon |

### Size modifiers

| Class        | Size   |
| ------------ | ------ |
| `battery-sm` | Small  |
| _(default)_  | Medium |
| `battery-lg` | Large  |

## 3. Why is it useful?

- Pure CSS — zero JavaScript, zero dependencies
- Works standalone or inside dashboards, device UIs, and status bars
- Color-coded levels follow universal UX conventions (green → red)
- Charging animation is smooth and attention-grabbing
- Fits EaseMotion's animation-first, human-readable philosophy perfectly
