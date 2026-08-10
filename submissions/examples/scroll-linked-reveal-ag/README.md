# Scroll-Linked Reveal Animations

### 1. What does this do?
Adds lightweight, pure CSS scroll-linked utilities (`.reveal-fade`, `.reveal-up`, `.reveal-left`, and `.reveal-scale`) that reveal elements dynamically using modern scroll-driven animations (`animation-timeline: view()`) as they enter the viewport.

### 2. How is it used?
Simply apply any of the utility classes directly to your HTML elements. You do not need any JavaScript or external libraries:

```html
<!-- Fades in as it enters the viewport -->
<div class="reveal-fade">Fade In Content</div>

<!-- Slides up and fades in -->
<div class="reveal-up">Slide Up Content</div>

<!-- Slides in from the left and fades in -->
<div class="reveal-left">Slide Left Content</div>

<!-- Scales up from 90% and fades in -->
<div class="reveal-scale">Scale Zoom Content</div>
```

### 3. Why is it useful?
It provides premium, scroll-interactive motion with zero JavaScript, zero runtime overhead, and a tiny CSS footprint, aligning perfectly with EaseMotion's focus on high-performance motion. It also includes robust progressive enhancement (elements remain instantly visible in unsupported browsers) and accessibility support (`prefers-reduced-motion` bypass).
