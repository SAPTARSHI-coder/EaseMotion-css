# ease-temperature-gauge-fill

## What does this do?
A thermometer-shaped gauge that fills with color based on a `--ease-temp-value` CSS custom property (0–100). The fill uses `clip-path: inset()` to reveal a fixed cold-blue → hot-red gradient from the bottom up, so the visible color shifts naturally as the temperature rises. The bulb color uses `color-mix()` to match the fill. Includes an interactive slider demo and a static preset grid.

## How to use it

```html
<!-- Set --ease-temp-value to 0–100 -->
<div class="ease-temperature-gauge" style="--ease-temp-value: 72">
  <div class="tgf-tube">
    <div class="tgf-fill"></div>
  </div>
  <div class="tgf-bulb"></div>
</div>

<!-- Update via JS -->
<script>
  gauge.style.setProperty('--ease-temp-value', newTemp);
</script>
```

## Technique
- **Fill** — `clip-path: inset(calc((100 - var(--ease-temp-value)) * 1%) 0 0 0)` on `.tgf-fill`. The fill element spans the full tube with a fixed gradient; as the clip moves up, more gradient is revealed from the bottom.
- **Color** — a 7-stop `linear-gradient(to top)` spanning `#3b82f6` (cold blue, 0%) → `#06b6d4` → `#22c55e` → `#eab308` → `#f97316` → `#ef4444` → `#dc2626` (extreme red, 100%).
- **Bulb** — `color-mix(in oklch, #ef4444 calc(var(--ease-temp-value) * 1%), #3b82f6 calc((100 - var(--ease-temp-value)) * 1%))` for a smooth bulb color that matches the fill.
- **Transition** — `clip-path 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)` for a bouncy animated fill on value change.

## Why it fits EaseMotion CSS
Weather widgets, IoT dashboards, and data visualizations commonly need a thermometer gauge — it's the most recognizable temperature UI component. The `--ease-temp-value` custom property makes it trivially data-driven from any JS source (weather API, sensor feed, etc.), directly implementing all 3 acceptance criteria.
