# Interactive Bento Metrics Dashboard

A responsive CSS Grid bento layout with glowing stat cards, dynamic chart column animations, and hardware-accelerated spotlight highlights.

## 1. What does this do?
This component provides a sleek modern bento box analytics layout featuring asymmetrical grid spans, progress indicators, bar chart hover states, and smooth focus/hover elevate animations.

## 2. How is it used?
Link `style.css` in your document head and construct your dashboard using `.bento-grid` and `.bento-card` structures.

```html
<link rel="stylesheet" href="style.css">

<div class="bento-grid">
  <article class="bento-card bento-hero">
    <div class="spotlight"></div>
    <div class="bento-val">$128,450.00</div>
  </article>
</div>
```

## 3. Why is it useful?
It allows web developers and SaaS maintainers to build stunning analytics and command dashboards without heavy JS libraries, ensuring mobile responsiveness and high accessibility.
