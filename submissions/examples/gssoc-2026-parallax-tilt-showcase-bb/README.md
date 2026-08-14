# Pure CSS 3D Parallax Tilt Showcase

A lightweight, zero-JavaScript spatial 3D card tilt animation system built with modern CSS 3D perspective transformations and glassmorphism styling.

## 1. What does this do?
This component provides GPU-accelerated spatial depth motion and interactive perspective rotation on hover. It uses pure CSS 3D properties (`perspective`, `transform-style: preserve-3d`, and `translateZ`) to create multi-layered visual depth without external libraries or JS execution overhead.

## 2. How is it used?
Wrap any element inside a container with `perspective` defined, and apply `.tilt-card` class structure. Custom spatial depth can be adjusted by altering the `translateZ` values on inner child elements:

```html
<div class="tilt-card-wrapper">
  <div class="tilt-card">
    <div class="card-content">
      <!-- High depth layer -->
    </div>
  </div>
</div>
```

## 3. Why is it useful?
- **Zero JS Latency**: Eliminates event listener memory leaks and main thread scrolling blocks.
- **Hardware Accelerated**: Offloads render pipeline work strictly to GPU composition layers for consistent 60 FPS performance.
- **Accessibility Included**: Automatically gracefully degrades to simple linear elevation for users with `prefers-reduced-motion: reduce`.
