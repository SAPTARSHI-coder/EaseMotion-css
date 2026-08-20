# Scroll-Driven Reveal & Parallax

### 1. What does this do?
Native, GPU-accelerated scroll animations that trigger reveals and parallax motions as elements enter the viewport, entirely without JavaScript.

### 2. How is it used?
Apply the `.scroll-reveal` or `.scroll-parallax` classes to your elements:

```html
<!-- Reveal an element on scroll -->
<div class="scroll-reveal">
  Smoothly scales and fades in.
</div>

<!-- Create a parallax motion effect -->
<div class="scroll-parallax">
  Moves at a different speed than the scroll.
</div>
```

### 3. Why is it useful?
It aligns with EaseMotion CSS's philosophy of providing expressive, high-performance animations with zero dependencies. By utilizing the modern CSS Scroll-Driven Animations API, it replaces bulky JavaScript libraries with browser-native logic that runs on the compositor thread for maximum smoothness.
