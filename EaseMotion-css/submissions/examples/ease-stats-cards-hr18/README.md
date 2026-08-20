# Responsive Statistics Cards

## 1. What does this do?

This is a self-contained component submission (resolves [#55318](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/55318)) that adds a reusable statistics card component — an icon, a large number, and a short label, with a subtle lift-on-hover effect. It's the pattern used across SaaS landing pages, dashboards, and portfolio sites to surface key metrics like users, revenue, or uptime.

It includes:

- The **base `.stats-container` / `.stat-card` pair**, matching the structure proposed in the issue.
- An optional **`.stat-icon`** slot for a leading icon.
- An optional **`.stat-trend--up` / `.stat-trend--down`** badge for dashboard-style metrics that need a change indicator.
- A **`.stats-container--fill`** modifier that stretches cards edge-to-edge instead of wrapping around a fixed card width, for rows that need to fill a dashboard column.

## 2. How is it used?

Open `demo.html` in a browser — no build step, no dependencies.

The base pattern, matching the issue's proposed snippet:

```html
<div class="stats-container">
  <div class="stat-card">
    <h2>1.2K</h2>
    <p>Users</p>
  </div>
</div>
```

```css
.stats-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.stat-card {
  width: 220px;
  padding: 25px;
  text-align: center;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-8px);
}
```

Add an icon and a trend badge as needed — neither is required for the card to lay out correctly:

```html
<div class="stat-card">
  <span class="stat-icon"><!-- svg icon --></span>
  <h2>$48.2K</h2>
  <p>Revenue</p>
  <span class="stat-trend stat-trend--up">▲ 12.4%</span>
</div>
```

## 3. Why is it useful?

The issue's snippet already covers the core card — this submission keeps that exact structure and CSS, then adds the two pieces a real dashboard or landing page would need next: an icon slot for visual scanning, and a trend badge for metrics that change over time. Both are additive and optional, so a developer who only needs the plain number-and-label card from the issue gets it unchanged, while one building a fuller dashboard row can drop in the extra markup without switching components. It stays framework-appropriate — flexbox layout, one transition, zero JavaScript — and responsive by default, since `.stat-card` has a fixed width but the container wraps instead of forcing cards to overflow or compress on narrow screens.
