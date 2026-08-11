# Scale-Hover Dashboard Popover

### 1. What does this do?
A pure CSS popover revealed on hovering or focusing a KPI tile, with a smooth scale-up transition, styled for analytics dashboard layouts. Hovering a metric tile reveals a quick trend breakdown without leaving the dashboard.

### 2. How is it used?
\`\`\`html
<div class="kpi-tile-wrap">
  <div class="kpi-tile" tabindex="0">
    <span class="kpi-label">Active Users</span>
    <span class="kpi-value">12,480</span>
  </div>
  <div class="kpipop">
    <p class="kpipop-row"><span>vs. last week</span><span class="kpipop-up">+8.2%</span></p>
    <p class="kpipop-row"><span>vs. last month</span><span class="kpipop-up">+21.5%</span></p>
  </div>
</div>
\`\`\`
- Wrap a `.kpi-tile` (with `tabindex="0"` for keyboard access) and a sibling `.kpipop` in a `.kpi-tile-wrap`. The popover reveals on tile hover or focus.
- Use `.kpipop-up` / `.kpipop-down` on trend values for green/red styling.
- Customize the motion with CSS custom properties on `.kpipop`:
  - `--kpipop-timing` — transition duration (default `0.3s`)
  - `--kpipop-easing` — transition easing function (default a slight overshoot cubic-bezier)
  - `--kpipop-scale` — final scale factor on reveal (default `1`)

### 3. Why is it useful?
Analytics dashboards pack many metrics into a small space; hover-revealed detail breakdowns let users drill into a trend without navigating to a separate view. The scale-up transition gives that reveal a tactile, purposeful feel rather than a flat fade, matching EaseMotion's animation-first philosophy — fully CSS-driven, keyboard accessible via `:focus-visible`, and zero JS.
