# Ease SaaS Revenue Zd

## What does this do?
A comprehensive SaaS Revenue & Subscription Analytics Dashboard component built with pure HTML and CSS, featuring animated KPI metric cards, a conic-gradient donut chart for revenue plan breakdown, an animated bar chart for monthly revenue trends, a live activity feed, revenue goal progress tracking, and plan overview cards — all with staggered entrance animations, hover effects, and `prefers-reduced-motion` support.

## How is it used?
```html
<!-- KPI Metric Card (with animated entrance) -->
<div class="kpi-card">
  <div class="kpi-label">
    <span>Monthly Recurring Revenue</span>
    <div class="kpi-icon kpi-icon-purple">📈</div>
  </div>
  <div class="kpi-value"><span class="currency">$</span>128,450</div>
  <div class="kpi-footer">
    <span class="trend-up">↑</span>
    <span class="trend-badge trend-up-badge">+12.3%</span>
    <span style="color:#5a647b;">vs last month</span>
  </div>
</div>

<!-- Animated Bar Chart -->
<div class="chart-bars">
  <div class="chart-bar" style="height:75%;" data-label="$128K"></div>
</div>

<!-- Conic Gradient Donut (Revenue by Plan) -->
<div class="donut-ring" style="background: conic-gradient(
  #6c5ce7 0% 55%,
  #a29bfe 55% 78%,
  #54a0ff 78% 93%,
  #5a647b 93% 100%
);"></div>

<!-- Goal Progress Bar -->
<div class="goal-track">
  <div class="goal-fill" style="width:51.4%;"></div>
</div>

<!-- Activity Feed Items -->
<div class="feed-item">
  <div class="feed-icon feed-icon-green">📊</div>
  <div class="feed-content">
    <div class="feed-title">Enterprise plan upgrade</div>
    <div class="feed-meta">Acme Corp · 2 min ago</div>
  </div>
  <div class="feed-amount green">+$2,400</div>
</div>
```

## Why is it useful?
SaaS revenue analytics dashboards are essential for product managers, founders, growth teams, and investors to monitor business health at a glance. This component provides a ready-to-use, visually polished dashboard pattern that demonstrates complex layout composition (grids, donut charts, bar charts, feed lists) using only HTML and CSS. It fits EaseMotion CSS's philosophy of providing production-ready UI components with zero JavaScript dependencies, smooth animations, and accessible reduced-motion support — making it ideal for SaaS platforms, admin dashboards, and business intelligence interfaces.
