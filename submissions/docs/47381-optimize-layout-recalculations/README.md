# GPU-Friendly Animation Optimizations

### 1. What does this do?
This submission showcases how to optimize laggy CSS transitions by replacing layout-triggering properties (like `top`, `left`, `width`, and `height`) with GPU-accelerated ones (`transform` and `opacity`), preventing expensive browser reflows.

### 2. How is it used?
Instead of shifting positions and sizes directly:
```css
/* Avoid */
.card:hover {
  top: -10px;
  width: 110px;
}

/* Use */
.card:hover {
  transform: translateY(-10px) scale(1.1);
}