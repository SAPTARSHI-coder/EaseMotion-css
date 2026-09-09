# Advanced Component 118 - 3D Cube Carousel

**What does this do?**  
This is a purely CSS-driven 3D animated cube carousel. It uses CSS `perspective`, `transform-style: preserve-3d`, and `@keyframes` to create an infinite rotating 3D gallery that pauses and highlights on hover.

**How is it used?**  

```html
<div class="ease-cube-container">
    <div class="ease-cube-face face-front">Front</div>
    <div class="ease-cube-face face-back">Back</div>
    <div class="ease-cube-face face-right">Right</div>
    <div class="ease-cube-face face-left">Left</div>
    <div class="ease-cube-face face-top">Top</div>
    <div class="ease-cube-face face-bottom">Bottom</div>
</div>
```

**Why is it useful?**  
It provides a visually stunning, highly engaging interactive element for showcasing portfolios, features, or images without requiring a single line of JavaScript. It heavily leverages EaseMotion's animation-first capabilities, utilizing hardware-accelerated CSS transforms.
