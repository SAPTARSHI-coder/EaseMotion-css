# Scroll-Triggered Reveal Animation

### 1. What does this do?
This component animates elements into view (fading, sliding, scaling, or 3D flipping) when they enter the viewport during page scrolling.

### 2. How is it used?
Apply the `.reveal-element` class to any element, and trigger visibility by adding the `.is-visible` class via an IntersectionObserver:

```html
<div class="reveal-element">
  <h3>Reveal Me</h3>
  <p>Content fades up as you scroll past.</p>
</div>
```

**Variants:**
- **Entry Styles**:
  - `.reveal-left`: Slide in from left side.
  - `.reveal-right`: Slide in from right side.
  - `.reveal-scale`: Magnifies up from 85% scale.
  - `.reveal-flip`: 3D rotation flip entrance from 35-degree perspective.
- **Delays**:
  - `.reveal-delay-1` through `.reveal-delay-5`: Staggered entrance delays (150ms increments).

**Required Intersection Observer JavaScript (Vanilla):**
Apply the observer to toggle the visibility class:

```javascript
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      // Optional: unobserve after reveal to run animation once
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal-element').forEach(el => observer.observe(el));
```

### 3. Why is it useful?
It provides a high-fidelity scroll reveal system that drives all animation, translation, and timing delay properties natively inside CSS. By offloading calculations to the browser transitions, a single lightweight observer is used only to manage visibility classes, avoiding heavy scroll event bottlenecks or complex JS animation engines.
