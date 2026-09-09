# Search Result Card Animation (ease-search-result-card-ij)

## 1. What does this do?

This component provides a premium Glassmorphism-style search result card layout featuring spring-like entrance stagger effects on load and subtle 3D lift/glow interactions on hover.

## 2. How is it used?

Apply the `.search-result-card` class to your link or card element, and configure a staggered entry delay by setting the `--delay` custom CSS property inline:

```html
<div class="results-list">
  <!-- Card with delay coefficient for staggered load -->
  <a href="/docs/intro" class="search-result-card" style="--delay: 1">
    <div class="card-header">
      <span class="card-category">Guide</span>
      <div class="match-relevance">
        <span class="match-dot"></span>
        <span>98% Match</span>
      </div>
    </div>
    <div class="card-content">
      <h2 class="card-title">Getting Started</h2>
      <p class="card-snippet">
        Learn how to easily integrate animation classes into your HTML files.
      </p>
    </div>
  </a>
</div>
```

## 3. Why is it useful?

It aligns with EaseMotion's philosophy of lightweight, premium, micro-animation-first UI. Instead of relying on heavy JavaScript framer-motion setups, it choreographs complex staggered entrances and interactive hover lifts purely using high-performance CSS transforms, opacity transitions, CSS variables, and the custom cubic-bezier timing function.
