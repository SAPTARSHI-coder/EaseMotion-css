# Speedometer

### What does this do?

It shows a speedometer gauge with a needle. A 240 degree dial has numbered ticks from 0 to 160, a colored arc that fills to the current value, a rotating needle, a center hub, and a large digital readout. A single `--frac` custom property (0 to 1) drives both the fill and the needle.

### How is it used?

```html
<div class="speedo" style="--frac: 0.45;">
  <svg viewBox="0 0 220 210">
    <path class="sp-fill" d="M27.3 176 A94 94 0 1 1 192.7 176" pathLength="100" />
  </svg>
  <span class="sp-needle"></span>
  <div class="sp-read"><b>72</b><span>mph</span></div>
</div>
```

Set `--frac` on the gauge. The arc uses `pathLength="100"` so `stroke-dasharray: calc(var(--frac) * 100) 100` fills it proportionally, and the needle rotates by `-120 + var(--frac) * 240` degrees to match.

### Why is it useful?

Vehicle dashboards, network monitors, and performance meters show a value on a speedometer. This builds one with an SVG arc and a CSS needle from a single custom property, with no gauge library.
