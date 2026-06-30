# Floating Call-To-Action (ease-floating-cta)

### 1. What does this do?

This is a scroll-triggered, fixed bottom-right floating call-to-action button that fades and slides in after scrolling past the hero fold, with a hover-lift effect and a close-dismiss toggle.

### 2. How is it used?

Wrap the button and close-label in the `.floating-cta-container` class and hook it to a checkbox controller:

```html
<input type="checkbox" id="cta-dismiss" class="cta-dismiss-checkbox" />

<div class="floating-cta-container">
  <a href="#" class="floating-cta-button"> Get Started </a>
  <label for="cta-dismiss" class="cta-close-btn">&times;</label>
</div>
```

### 3. Why is it useful?

It aligns with the animation-first philosophy by implementing a high-performance scroll-driven entrance and exit animation using native CSS `animation-timeline: scroll()`, avoiding any performance-heavy JavaScript scroll listeners.
