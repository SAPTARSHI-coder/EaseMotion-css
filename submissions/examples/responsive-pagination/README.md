# CSS-Only Responsive Pagination

A responsive pagination component that gracefully collapses page numbers into an ellipsis (`...`) on smaller viewports using pure CSS.

## What it does
This component uses advanced CSS `nth-child` logic to hide specific middle pagination items when the viewport is smaller than 600px. It then uses the `::after` pseudo-element to dynamically inject an ellipsis without requiring any JavaScript window resize listeners or array splicing.

## How to use it
Wrap your pagination links inside a semantic `<nav>` and `<ul>`. 

```html
<nav class="ease-pagination" aria-label="Pagination Navigation">
    <ul class="pagination-list">
        <li class="pagination-item"><a href="#" class="pagination-link nav-btn">Prev</a></li>
        <li class="pagination-item"><a href="#" class="pagination-link">1</a></li>
        <li class="pagination-item"><a href="#" class="pagination-link">2</a></li>
        <li class="pagination-item"><a href="#" class="pagination-link active">3</a></li>
        <li class="pagination-item"><a href="#" class="pagination-link">4</a></li>
        <!-- More items -->
        <li class="pagination-item"><a href="#" class="pagination-link nav-btn">Next</a></li>
    </ul>
</nav>
```

## Why it fits EaseMotion CSS
Pagination components often break on mobile devices and developers typically resort to JavaScript to fix it. This solution adheres to the CSS-first philosophy, utilizing native Flexbox and advanced CSS selectors to provide a rock-solid, animated, and responsive layout.
