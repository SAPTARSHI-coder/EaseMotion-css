# CSS `:target-current` Navigation Utilities

Relates to feature request **#41320**.

## 1. What does this do?

Adds utility classes demonstrating the upcoming `:target-current` pseudo-class to automatically highlight the currently active navigation item in nested documents, tables of contents, and documentation sites without requiring JavaScript. Includes a robust `:target` fallback strategy for immediate use today.

## 2. Why is this useful for EaseMotion CSS?

Documentation websites and long-form content often require active section highlighting. Supporting `:target-current` provides a future-friendly, declarative solution aligned with the evolution of the CSS specification, while the `:target` fallback ensures it works everywhere right now.

## 3. Utilities Provided

| Class | Style |
|---|---|
| `.ease-toc` | Default: purple text with left border accent |
| `.ease-toc-pill` | Pill-style background highlight |
| `.ease-toc-underline` | Subtle underline indicator |

## 4. How is it used?

**HTML** (matching the issue's snippet exactly)
```html
<nav class="ease-toc">
  <a href="#intro">Introduction</a>
  <a href="#usage">Usage</a>
</nav>

<section id="intro">...</section>
<section id="usage">...</section>
```

**CSS** (matching the issue's snippet exactly)
```css
/* Fallback working today */
.ease-toc a:target {
  color: #6c63ff;
  font-weight: 600;
}

/* Progressive enhancement for the future */
@supports selector(a:target-current) {
  .ease-toc a:target-current {
    color: #6c63ff;
    font-weight: 600;
  }
}
```

## 5. `:target` vs `:target-current`

- **`:target` (Present)**: Triggers when the element's ID matches the hash in the browser URL (e.g., `#usage`). Click a link, the URL updates, the style applies.
- **`:target-current` (Future)**: Will trigger when the element being linked to is the *current scroll target* (visible at the top of the viewport), updating in real time as the user scrolls, without needing the URL hash to change.

## 6. Progressive Enhancement Strategy

Because `:target-current` is a proposed spec and not yet supported in any stable browser, this implementation uses `@supports selector(a:target-current)` to wrap the new syntax. Browsers will use the `:target` fallback today, and automatically upgrade to the real-time scrolling behavior of `:target-current` once they implement the spec.
