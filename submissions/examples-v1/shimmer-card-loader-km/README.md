# Shimmer Skeleton Card Loader

### 1. What does this do?
This component provides a highly customisable, hardware-accelerated shimmer skeleton loader that visually hints at content structure (such as cards, profile items, and content blocks) before it finishes loading.

### 2. How is it used?
Apply the `.shimmer-element` utility class to any layout block container or text line placeholder in your HTML structure:

```html
<div class="card">
  <!-- Avatar placeholder -->
  <div class="avatar shimmer-element"></div>
  
  <div class="content">
    <!-- Title and text placeholders -->
    <div class="line title shimmer-element"></div>
    <div class="line text-short shimmer-element"></div>
    <div class="line text-long shimmer-element"></div>
  </div>
</div>
```

### 3. Why is it useful?
It aligns with EaseMotion CSS's philosophy of providing smooth, organic visual state transitions. Rather than showing static gray blocks or spinner indicators which can cause perceived latency, the moving shimmer effect offers visual feedback that makes load times feel significantly faster and more fluid.
