# skew-active-hero

### What does this do?
A glassmorphism hero section with a skewed gradient background panel that straightens out and the frosted-glass card lifts slightly on hover/active.

### How is it used?
```html
<section class="hero-skew">
  <div class="hero-skew__panel"></div>
  <div class="hero-skew__card">
    <h1 class="hero-skew__title">Your Headline</h1>
    <p class="hero-skew__text">Supporting copy goes here.</p>
  </div>
</section>
```
Add the `is-active` class to `.hero-skew` to trigger the effect via JS/state toggle instead of relying on `:hover` alone.

### Why is it useful?
Skewed panels give a hero section dynamic energy without heavy JS, and pairing it with a glassmorphism card keeps it aligned with modern tech landing page trends. Pure CSS transforms/transitions, GPU-friendly, no JS required for the base hover interaction. Fully responsive down to mobile, and disables all transitions under `prefers-reduced-motion`.
