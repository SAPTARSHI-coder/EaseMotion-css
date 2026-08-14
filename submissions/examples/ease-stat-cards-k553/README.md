# Ease Stat Cards

## What does this do?
Dashboard statistic cards with a **staggered cascading entrance** and a
**CSS/SVG stroke-draw sparkline** trend chart per card, in addition to an
animated count-up number — rather than just a number counter with a uniform
fade-in.

## How is it different from a typical stat-cards utility?
- Cards animate in sequence via a `--delay` custom property per card,
  cascading rather than appearing all at once.
- Each card includes a small SVG sparkline whose line "draws itself" in
  using `stroke-dasharray`/`stroke-dashoffset`, timed to finish just after
  the card's entrance.
- Trend indicators (up/down %) are color-coded and match the sparkline
  direction.
- Uses `IntersectionObserver` so animations trigger when scrolled into view,
  not just on page load.

## How is it used?
\`\`\`html
<div class="ease-stat-card" style="--delay: 120ms" data-target="48250" data-prefix="$">
  <div class="ease-stat-card__header">
    <span class="label">Revenue</span>
    <span class="trend trend--up">▲ 8%</span>
  </div>
  <div class="value">$0</div>
  <svg class="sparkline" viewBox="0 0 100 30">
    <polyline class="sparkline-path sparkline-path--up" points="..." />
  </svg>
</div>
\`\`\`

See `demo.html` for the JS driving the count-up and scroll-triggered reveal
(all animation styling itself lives in `style.css`).

## Why is this useful?
Admin dashboards commonly show KPI cards, and a cascading reveal plus a
lightweight trend visualization makes the data feel more alive and
scannable at a glance — a strong real-world showcase for EaseMotion CSS.