# ease-print Print-Friendly Utility Classes

## What does this do?

Provides CSS utility classes for controlling element visibility during printing, allowing developers to hide navigation/animations when printing while showing print-specific content like footers.

## How is it used?

```html
<!-- Hide navigation when printing -->
<nav class="ease-print-hide">
  <a href="#">Home</a>
  <a href="#">About</a>
  <button class="ease-animate-pulse">Buy Now</button>
</nav>

<!-- Printable article content -->
<article>
  <h1>Article Title</h1>
  <p>Article content here...</p>
</article>

<!-- Print-only footer -->
<footer class="ease-print-only">
  <p>Printed from example.com on August 5, 2026</p>
</footer>
```

### CSS Classes

| Class | Purpose |
|-------|---------|
| `.ease-print-hide` | Hides element only when printing |
| `.ease-print-only` | Shows element only when printing |

## Why is it useful?

Real-world pages built with CSS frameworks eventually get printed (invoices, articles, receipts, docs). Animated or interactive elements like nav bars, buttons with hover states, and pulsing animations look broken or wasteful on paper. This utility:

- ✅ Improves print readability by removing distractions
- ✅ Adds professional print footers automatically
- ✅ Zero JavaScript required
- ✅ Tiny footprint, high utility
- ✅ Complements EaseMotion's focus on polished user experiences
