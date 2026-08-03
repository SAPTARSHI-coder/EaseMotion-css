# Smartwatch

### What does this do?

It shows a smartwatch with a strap, a rounded case, and a digital watch face. The screen shows the date, a large time, an activity ring that fills to a percentage, and heart rate and step complications, with a side crown button.

### How is it used?

```html
<div class="screen" style="--ring: 74;">
  <span class="ring"></span>
  <div class="face"><span class="time">10:09</span></div>
</div>
```

The case sits between two tapered strap segments. Inside the screen, the activity `ring` is a `conic-gradient` masked into a ring that fills to `--ring` percent, and the face stacks the date, time, and complications on top.

### Why is it useful?

Wearable apps, fitness dashboards, and device mockups show a smartwatch. This builds one with a strap, a filling activity ring, and complications using pure CSS, no images.
