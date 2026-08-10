# CSS Parallax Stars Hero

A pure CSS multi-layer parallax hero section with depth-based scrolling stars.

## What does this do?

It creates a realistic 3D parallax scrolling effect for a starry background using CSS `perspective` and `translateZ` without relying on JavaScript.

## How is it used?

```html
<div class="ease-parallax-container">
  <div class="ease-parallax-group">
    <!-- Farthest layer (slowest) -->
    <div class="ease-parallax-layer ease-layer-stars-1" aria-hidden="true"></div>
    
    <!-- Mid layer -->
    <div class="ease-parallax-layer ease-layer-stars-2" aria-hidden="true"></div>
    
    <!-- Closest layer (fastest) -->
    <div class="ease-parallax-layer ease-layer-stars-3" aria-hidden="true"></div>
    
    <!-- Content layer (normal scroll speed) -->
    <div class="ease-parallax-layer ease-layer-content">
       <h1 class="ease-hero-title">Cosmic Parallax</h1>
       <p class="ease-hero-subtitle">Multi-layer parallax scrolling without any JavaScript.</p>
    </div>
  </div>
</div>
```

## Why is it useful?

This component provides a robust, JavaScript-free solution for multi-layered parallax scrolling. It utilizes CSS 3D transforms (`translateZ` and `scale`) to create realistic depth and motion. It serves as an excellent UI pattern for high-impact hero sections, improving performance by offloading parallax calculations to the browser's compositor.
