# Glow-Border Metric Analytics Card

A pure CSS/HTML KPI card for dashboards, with an animated sparkline chart, a hover glow border, and per-bar tooltips. No charting library, no JavaScript.

## How it works

**Sparkline bars.** Each bar is a `<span>` with its target height set inline via `--ease-bar-height`. All bars share one `@keyframes growSparkline` rule that scales from `scaleY(0)` to `scaleY(1)`, so the height itself comes from the inline custom property while the keyframe stays identical for every bar. `nth-child` delays make the bars grow in left-to-right sequence on load rather than all at once.

**Data tooltips.** Each bar has a `data-value` attribute, and its `::after` pseudo-element reads that value with `content: attr(data-value)`, so the tooltip text comes straight from the markup with no duplication. It's hidden by default and fades in on `:hover`.

**Glow border.** The card has a `::before` pseudo-element slightly larger than itself, filled with a `radial-gradient`, sitting behind the card via `z-index: -1` and hidden with `opacity: 0`. On card hover, it fades in and the card itself lifts slightly with `translateY`.

## Files

- `demo.html` – two KPI cards (Active Users, Revenue) each with a trend badge and sparkline
- `style.css` – all styling, custom properties, sparkline growth, tooltip, and glow border
- `README.md` – this file

## Custom properties

Set on `:root` in `style.css`:

- `--ease-metric-duration` – 0.6s
- `--ease-metric-easing` – ease-out
- `--ease-metric-radius` – 14px
- `--ease-metric-bg` – card background
- `--ease-metric-border` – card border color
- `--ease-metric-text` – value text color
- `--ease-metric-muted-text` – label text color
- `--ease-metric-up` / `--ease-metric-down` – trend badge colors
- `--ease-metric-glow` – hover glow and bar accent color
- `--ease-metric-bar-color` – default sparkline bar color
- `--ease-metric-bar-bg` – (reserved for a track background if desired)

Per-bar, `--ease-bar-height` is set inline on each `.ease-sparkline-bar` to control its individual height.

Example override:

```css
:root {
  --ease-metric-glow: #22c55e;
  --ease-metric-bar-color: #22c55e;
}
```

## Notes

- To change the number of bars, add/remove `.ease-sparkline-bar` elements and a matching `nth-child` delay rule
- Fully responsive; the two-card grid collapses to one column under 600px
- Respects `prefers-reduced-motion` — bars appear instantly at full height, and the hover glow/lift/tooltip transitions are disabled