# Spiral Back to Top

## 1. What does this do?

An advanced portfolio-inspired back-to-top button featuring an outer radial scroll progress tracker ring, a rotating spiral background vortex, and an upward-pointing arrow that spins on hover.

## 2. How is it used?

Place the button at the root of the page and link it to the page top anchor (`#top`):

```html
<a href="#top" id="back-to-top" class="spiral-top-btn">
  <svg class="spiral-svg" viewBox="0 0 100 100">
    <circle class="spiral-track" cx="50" cy="50" r="44"></circle>
    <circle class="spiral-progress" cx="50" cy="50" r="44"></circle>
  </svg>
  <div class="spiral-vortex"></div>
  <span class="spiral-arrow">↑</span>
</a>
```

## 3. Why is it useful?

It conforms fully to the EaseMotion CSS design guidelines:

- **Human-readable**: Semantic structure naming configurations like `spiral-top-btn` and `spiral-vortex` make functional layout details obvious.
- **Animation-first**: Implements modern CSS scroll-driven animation timelines for the progress circle alongside continuous opposite rotation animations for the inner spiral.
- **Composable**: Easily drops into portfolio sites, blogs, documentation pages, or long dashboard pages.
