# Hover Reveal Focus Card

## 1. What does this do?

This is a highly interactive card component that uses a smooth CSS `clip-path` animation to retract a top gradient cover layer on hover, revealing beautifully staggered content beneath it.

## 2. How is it used?

Apply the core class to the parent container, and separate your content into a hidden layer and a cover layer.

```html
<article class="ease-reveal-card" tabindex="0">
  <div class="ease-reveal-content">
    <h3 class="ease-reveal-title">Hidden Title</h3>
    <p class="ease-reveal-text">Hidden description text.</p>
  </div>
  <div class="ease-reveal-cover">
    <h2 class="ease-cover-title">Hover Me</h2>
  </div>
</article>
```

## 3. Why is it useful?

It fits EaseMotion's animation-first philosophy by delivering a complex, staggered interaction purely through native CSS variables and cubic-bezier transitions. It relies on zero external dependencies (no images or scripts) and handles keyboard focus seamlessly for full accessibility.
