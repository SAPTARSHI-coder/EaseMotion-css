# Animated Hero Section

### What does this do?

It shows a landing hero with a soft glow background, an eyebrow tag, a large heading, a subheading, and two call to action buttons, where the elements fade and rise in with a staggered delay.

### How is it used?

```html
<section class="hero">
  <span class="hero-eyebrow">New in v1.2</span>
  <h1 class="hero-title">Build interfaces that move</h1>
  <p class="hero-sub">A human readable, animation first CSS framework.</p>
  <div class="hero-actions">
    <a href="#" class="hero-btn">Get started</a>
    <a href="#" class="hero-btn is-ghost">View docs</a>
  </div>
</section>
```

The direct children of `.hero` animate in with increasing delays, and blurred pseudo elements provide the background glow.

### Why is it useful?

The hero is the first thing visitors see on a landing page. This reveals it with a staggered entrance and a soft background glow, using only CSS with no images. The buttons show a focus ring, and the entrance is disabled under `prefers-reduced-motion: reduce`.
