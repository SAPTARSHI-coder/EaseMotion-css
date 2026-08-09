# Zoom-In Dashboard Analytics Popover

## What does this do?
A pure CSS zoom-in animated popover styled for dashboard/analytics stat cards, revealing a metric breakdown from an info icon.

## How is it used?
```html
<div class="stat-card">
  <div class="stat-header">
    <span class="stat-label">Monthly Revenue</span>
    <button class="stat-popover-trigger" id="statBtn" aria-expanded="false" aria-describedby="statBox">
      ⓘ
    </button>
  </div>
  <div class="stat-value">$48,290</div>
  <div class="stat-change">▲ 12.4% vs last month</div>

  <div class="stat-popover-box" id="statBox" role="tooltip">
    <h3>Revenue Breakdown</h3>
    <ul class="stat-meta">
      <li><span>Subscriptions</span><strong>$31,200</strong></li>
      <li><span>One-time sales</span><strong>$17,090</strong></li>
    </ul>
    <p>Additional context text.</p>
  </div>
</div>
```
Toggle `is-open` on `.stat-popover-box` to trigger a zoom-in reveal anchored to the top-right corner of the card. Customize via `--stat-scale-from`, `--stat-duration`, `--stat-easing`.

## Why is it useful?
It provides a compact, unobtrusive way to surface extra metric context in analytics dashboards without cluttering the card itself — CSS-driven animation, minimal JS for state, keyboard accessible, and respects `prefers-reduced-motion`, matching EaseMotion's lightweight animation-first philosophy.