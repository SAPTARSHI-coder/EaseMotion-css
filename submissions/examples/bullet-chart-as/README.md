# Bullet Chart

### What does this do?

It shows a set of bullet graphs, the compact KPI charts popularized by Stephen Few. Each row has a label, a track with three shaded qualitative ranges, a measure bar showing the current value, and a target marker to compare against. The measure width and target position come from `--m` and `--t` custom properties.

### How is it used?

```html
<span class="bl-track" style="--m: 78%; --t: 90%;">
  <span class="bl-measure"></span>
  <span class="bl-target"></span>
</span>
```

The track background is a three stop gradient for the poor, ok, and good bands. The `bl-measure` bar takes `width: var(--m)`, and the `bl-target` tick sits at `left: var(--t)`, so one line encodes a full KPI.

### Why is it useful?

Bullet charts pack a value, its ranges, and a goal into one compact row, ideal for dashboards with many metrics. This builds them with pure CSS from two custom properties, with no charting script.
