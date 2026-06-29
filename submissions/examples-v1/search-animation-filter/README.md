# Animation Search Filter

1. What does this do? A search input filters animation cards by name in real time so users can quickly find a specific motion example.

2. How is it used?

```html
<section class="animation-section">
  <input id="animation-search" type="search" aria-label="Search animations by name" />
  <article class="animation-card" data-animation-name="fade in">Fade In</article>
</section>
```

3. Why is it useful? It keeps a growing animation library easy to scan, discover, and navigate without changing existing animation behavior.
