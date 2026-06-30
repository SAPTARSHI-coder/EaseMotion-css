# Animated Number Counter

### 1. What does this do?

This utility animates number counters smoothly from zero up to a target integer value when the elements scroll into view.

### 2. How is it used?

Add the `.counter-animate` class to an HTML element, set the target value in the `data-target` attribute, and use a script to set up the scroll-triggered observation:

```html
<!-- HTML Structure -->
<div class="stat-card">
  <span class="counter-animate" data-target="500">500</span>
</div>

<!-- JS Trigger -->
<script>
  // Simple check for native CSS @property support
  const isPropertySupported = window.CSS && CSS.registerProperty;

  // Add support indicators
  document.documentElement.classList.add(
    isPropertySupported ? "css-property-supported" : "css-property-unsupported"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute("data-target") || "0", 10);

        if (isPropertySupported) {
          // CSS Path: trigger transitions
          counter.style.setProperty("--target-num", target);
          counter.classList.add("animate-start");
        } else {
          // JS Fallback Path
          animateFallback(counter, 0, target, 2000);
        }
        observer.unobserve(counter);
      }
    });
  });

  document
    .querySelectorAll(".counter-animate")
    .forEach((el) => observer.observe(el));
</script>
```

### 3. Why is it useful?

Metric counters are vital components on SaaS dashboards, landing pages, and portfolio sections to display achievements and metrics interactively. By utilizing native CSS `@property` transitions to drive the numerical count-up, we gain GPU-accelerated performance and smooth integration with CSS easing functions.

The accompanying JS-based fallback guarantees that browsers lacking `@property` support (e.g., Firefox/older versions) still render a beautiful cubic-decelerated counter animation instead of a static display, making it a robust, performance-first addition to EaseMotion CSS.
