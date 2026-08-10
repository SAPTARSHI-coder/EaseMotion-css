# Animated Stat Counter Row

### What does this do?

It shows a row of metric tiles whose numbers count up from zero on load, using only CSS, with a staggered entrance and an optional suffix per stat.

### How is it used?

```html
<div class="stats-row">
  <div class="stat">
    <div class="stat-figure">
      <span class="stat-value" style="--target: 1280;"></span>
      <span class="stat-suffix">+</span>
    </div>
    <div class="stat-label">Active Users</div>
  </div>
</div>
```

Set `--target` on each `.stat-value` to the number it should count to. The count-up uses a registered `@property` custom property with `counter`, so it needs no JavaScript.

### Why is it useful?

Stat rows are common on dashboards and landing pages. This animates a registered custom property so the displayed number counts up, which is an advanced but readable CSS pattern. The resting value equals the target, so if a browser does not support `@property` or the user prefers reduced motion, the final number is shown without animating.
