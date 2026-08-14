# Interactive Bento Grid Dashboard

An asymmetric, hardware-accelerated bento grid dashboard component with dynamic spotlight hover glow and reactive metric cards.

## 1. What does this do?
This component renders a responsive 4-column bento grid layout featuring large primary KPI metric blocks, mini trend bar graphs, status badges, and subtle spotlight glow effects.

## 2. How is it used?
Link `style.css` and arrange your metric cards within the `.bento-grid` layout:

```html
<link rel="stylesheet" href="style.css">

<div class="bento-grid">
  <article class="bento-card card-large" tabindex="0">
    <div class="card-glow"></div>
    <h2 class="metric-value">99.98%</h2>
  </article>
</div>
```

## 3. Why is it useful?
It offers SaaS platforms, cloud analytics dashboards, and monitoring tools a modern visual hierarchy with CSS grid responsiveness and zero JavaScript dependencies.
