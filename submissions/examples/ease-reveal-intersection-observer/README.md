# IntersectionObserver Scroll Reveal Proposal (`ease-reveal-intersection-observer`)

A proposal for `core/reveal.js` to implement high-performance, scroll-triggered animations using the native `IntersectionObserver` API.

## 🚀 Features

- **No Scroll Event Listeners**: Completely avoids `window.addEventListener('scroll')`, which is notorious for causing layout thrashing and performance bottlenecks.
- **Data Attribute Mapping**: Developers simply add `data-em-reveal="em-animation-name"` to any element. When the element enters the viewport, the JS automatically applies the specified animation class.
- **Clean State Management**: Uses `.em-reveal-pending` to hide elements initially, preventing flashes of unstyled content (FOUC).
- **Motion Safe**: The JS checks `window.matchMedia('(prefers-reduced-motion: reduce)')` first. If enabled, it skips the observer entirely and instantly reveals all elements.
- **Resource Efficient**: Automatically unobserves elements after they have animated once, freeing up memory.

## 🛠️ Usage

Open `demo.html` in your browser and scroll down to see the elements animate as they enter the viewport.

**HTML Markup Example:**
```html
<div class="em-reveal-pending" data-em-reveal="em-slide-in-up">
  I will slide up when scrolled into view!
</div>
```

*Note: This is submitted via the `submissions/examples/` directory to adhere to the strict CI/CD guidelines preventing external modification of `core/` files. The maintainer can easily merge the JS script block from `demo.html` into `core/reveal.js`, and the pending states into `core/animations.css`.*

## 🔗 Related Issue
Resolves Issue #16927
