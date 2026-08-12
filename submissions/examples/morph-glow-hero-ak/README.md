# morph-glow-hero

### What does this do?
A glassmorphism hero section featuring a slow, organically morphing gradient glow blob behind a frosted-glass content card.

### How is it used?
```html
<section class="hero-morph">
  <div class="hero-morph__blob"></div>
  <div class="hero-morph__card">
    <h1 class="hero-morph__title">Your Headline</h1>
    <p class="hero-morph__text">Supporting copy goes here.</p>
  </div>
</section>
```

### Why is it useful?
Glassmorphism hero sections are a popular pattern in modern tech landing pages; this component adds visual depth via an animated `border-radius`-morphing blob (a smooth, organic alternative to static gradient blobs) combined with `backdrop-filter` for the frosted-glass card. Pure CSS keyframes, no JS. Fully responsive down to mobile, and disables the blob animation under `prefers-reduced-motion` while keeping the static glow.
