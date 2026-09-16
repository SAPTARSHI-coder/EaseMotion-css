# CSS Scale-Hover Feature Grid

## What does this do?
This is a lightweight, pure CSS/HTML responsive feature grid that applies a sleek, modern scale-hover animation to individual cards, making it ideal for responsive dashboard layouts.

## How is it used?
Include the provided `style.css` in your project and copy the HTML structure from `demo.html`.

```html
<div class="ease-dashboard-container-ag">
  <div class="ease-feature-grid-ag">
    <!-- Feature Card -->
    <div class="ease-feature-card-ag">
      <div class="ease-card-icon-ag">📊</div>
      <h3 class="ease-card-title-ag">Analytics</h3>
      <p class="ease-card-desc-ag">Track your real-time performance and user engagement metrics.</p>
    </div>
  </div>
</div>
```

## Why is it useful?
It provides a polished, interactive dashboard component that relies entirely on CSS transitions without the overhead of JavaScript. It conforms to modern accessibility standards by fully disabling animations when the user has `prefers-reduced-motion` enabled.
