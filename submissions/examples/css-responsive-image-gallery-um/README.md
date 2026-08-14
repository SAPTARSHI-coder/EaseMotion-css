# CSS Responsive Image Gallery

## 1. What does this do?
This component renders an interactive, responsive grid of image cards that collapses into a single-column layout on mobile viewports, featuring a pure CSS modal lightbox expansion powered by the `:target` selector.

## 2. How is it used?
Configure the gallery grid elements linked to target lightbox containers:
```html
<main class="gallery-grid">
  <!-- Link targeting lightbox ID -->
  <a href="#img-1" class="gallery-item">
    <div class="gallery-thumb"></div>
    <div class="gallery-body">
      <h2 class="gallery-title">Neon Horizon</h2>
    </div>
  </a>
</main>

<!-- Lightbox Modal target -->
<div id="img-1" class="lightbox-overlay" role="dialog" aria-modal="true">
  <div class="lightbox-content">
    <div class="lightbox-img-mock"></div>
    <a href="#" class="close-btn">&times;</a>
  </div>
</div>
```

## 3. Why is it useful?
It demonstrates clean responsive media rules and native modal overlay mechanisms using CSS transitions and the `:target` selector, replacing bulky third-party modal libraries.
