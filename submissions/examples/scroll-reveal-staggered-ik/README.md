# Staggered Scroll Reveal Component

## 1. What does this component do?

Provides a smooth, staggered scroll-reveal mechanism using lightweight CSS transitions and an `IntersectionObserver`. Elements enter the viewport with progressive delay utilities (`.stagger-1`, `.stagger-2`, etc.) and transform variants (slide-up, scale-in, slide-left, slide-right).

## 2. How is it used?

```html
<!-- HTML Structure -->
<div class="card-grid">
  <div class="card reveal-item stagger-1">Card 1</div>
  <div class="card reveal-item stagger-2">Card 2</div>
  <div class="card reveal-item stagger-3">Card 3</div>
</div>

<!-- JS Activation -->
<script>
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));
</script>
```

## 3. Why does it fit EaseMotion CSS?

Enhances UX with modular, hardware-accelerated entrance animations on scroll, completing EaseMotion's reveal pattern showcase.

## 4. Demo Instructions

Open `demo.html` in any modern web browser and scroll down to observe progressive staggered entrance animations.
