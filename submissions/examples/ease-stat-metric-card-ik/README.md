# EaseMotion CSS — Dashboard Metric Stat Card (`ease-stat-metric-card-ik`)

Analytics KPI stat cards (`ease-stat-card`) featuring trend pill badges (`trend-up`, `trend-down`), spring hover elevation, and glowing border highlights.

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

Provides a dashboard KPI metric card component (`ease-stat-card`) that displays numerical data with percentage trend indicators and spring elevation dynamics on hover (`translateY(-4px)`).

---

## 2. How is it used?

Include the stat card markup structure in your dashboard layout:

```html
<article class="ease-stat-card">
  <div class="stat-top">
    <span class="stat-title">Total Revenue</span>
    <span class="trend-badge trend-up">▲ +14.2%</span>
  </div>
  <div class="stat-value">$128,450</div>
</article>
```

---

## 3. Why does it fit EaseMotion CSS?

EaseMotion CSS focuses on responsive dashboard analytics. The Stat Metric Card component delivers 60fps GPU compositor lift micro-interactions while respecting `prefers-reduced-motion` settings.
