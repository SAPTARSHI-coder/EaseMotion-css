# Mercury Skill Gauge

## 1. What does this do?

A thermometer-shaped progress/skill indicator — a "mercury" column rises from a reservoir bulb into a glass tube on hover or focus, slightly overshoots like real liquid settling under momentum, then keeps a subtle surface wobble while active.

## 2. How is it used?

Set the fill amount with a `--fill` custom property on the container, and give it `tabindex="0"` so keyboard users can trigger it via focus, not just mouse hover:

```html
<div class="mercury-gauge" tabindex="0" style="--fill: 92%;">
  <div class="mercury-tube">
    <div class="mercury-fill">
      <span class="mercury-glint"></span>
    </div>
  </div>
  <div class="mercury-bulb">
    <span class="mercury-bulb-core"></span>
  </div>
  <span class="mercury-label">CSS<br /><strong>92%</strong></span>
</div>
```

Swap `--fill` per instance to represent different values (skill levels, load percentages, ratings, etc.) — the tube, bulb, and wobble animation are shared, only the target height changes.

## 3. Why is it useful?

EaseMotion CSS is animation-first and human-readable — this fits both: the metaphor (mercury rising in a thermometer) is instantly understood without a legend or a number needing to load first, and the interaction is built from a couple of readable pieces (`mercury-tube`, `mercury-fill`, `mercury-bulb`) rather than one opaque effect. It's a genuinely different shape of progress indicator from the existing bar/ring/donut style utilities already in the framework, so it fills a visual gap rather than duplicating one. It's also accessible by default: it triggers on `:focus-visible`/`:focus-within` as well as `:hover`, and all motion is disabled under `prefers-reduced-motion: reduce` (the fill still ends at its final state, just without the transition or wobble).