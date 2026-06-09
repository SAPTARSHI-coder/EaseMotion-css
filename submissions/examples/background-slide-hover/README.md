# Background Slide Hover Animation

**What does this do?**  
Slides in a background color or gradient on hover from various directions (left, right, top, bottom, diagonal, or center-out shutter) with smooth text color adaptation.

**How is it used?**

```html
<!-- Slide in from left -->
<button class="slide-btn slide-left">Slide Right</button>

<!-- Slide in from bottom -->
<button class="slide-btn slide-up">Slide Up</button>

<!-- Diagonal slide-in -->
<button class="slide-btn slide-diagonal">Slide Diagonal</button>

<!-- Shutter center-out vertically -->
<button class="slide-btn slide-shutter-y">Shutter Y</button>
```

**Why is it useful?**  
It provides a highly interactive and dynamic background filling effect on hover. By using hardware-accelerated CSS `transform` transitions instead of animating box layout dimensions, it runs with peak performance (60 FPS) and is completely responsive.

---

Submitted by: @Antigravity  
Date: 2026-05-31  
Status: **Pending review**
