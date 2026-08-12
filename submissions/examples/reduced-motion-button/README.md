# Reduced Motion Button Support

### What does this do?
Adds a `prefers-reduced-motion: reduce` media query that disables all button transitions, animations, and transforms for users who have enabled the reduced motion accessibility setting in their operating system.

### How is it used?
No extra classes are needed. The override activates automatically via a CSS media query:

```css
@media (prefers-reduced-motion: reduce) {
  .ease-btn,
  .ease-btn:hover,
  .ease-btn:active {
    transition: none !important;
    animation: none !important;
    transform: none !important;
  }
}
```

Open `demo.html` directly in a browser to see the effect. Toggle "Reduce Motion" in your OS accessibility settings.

### Why is it useful?
EaseMotion CSS is an animation-first framework, but not all users can comfortably view motion. The `prefers-reduced-motion` media query is the W3C-recommended way to respect this preference. This submission gives the maintainer a ready-to-integrate snippet that can be promoted to the core `components/buttons.css` file, ensuring the framework is accessible out of the box.
