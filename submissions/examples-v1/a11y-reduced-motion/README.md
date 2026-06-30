# Accessibility: Reduced Motion Ecosystem

### What does this do?
This adds a comprehensive `@media (prefers-reduced-motion: reduce)` block that intercepts intense animations (like bounces, flips, shakes) and replaces them with a gentle opacity fade to prevent vestibular discomfort.

### How is it used?
Users do not need to add any new classes. They simply use the existing high-motion framework classes normally:
```html
<div class="ease-bounce ease-duration-slow">
  High motion by default, gentle fade when reduced-motion is requested!
</div>
```
The media query (provided in `style.css`) runs automatically in the background and neutralizes the movement if the OS preference is set to reduce motion.

### Why is it useful?
EaseMotion CSS's philosophy is about human-readable, accessible, production-ready styling. Currently, the framework forces intense animations regardless of user preference, which can trigger nausea or vertigo in users with vestibular disorders. By integrating this ecosystem layer into the core, EaseMotion CSS achieves WCAG-compliant accessibility out-of-the-box, ensuring users with accessibility needs can safely navigate interfaces built with the framework.
