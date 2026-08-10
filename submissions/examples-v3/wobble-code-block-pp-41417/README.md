# Wobble Code Block

## What does this do?
This submission adds a startup-style wobble-themed code block component built with pure CSS.

## How is it used?
Include `style.css` and use the structure from `demo.html`.

```html
<article class="code-card wobble-on-hover">
  <div class="code-card__topbar">
    <div class="dots" aria-hidden="true"><span></span><span></span><span></span></div>
    <p class="code-card__label">TypeScript</p>
    <button class="copy-btn" type="button">Copy</button>
  </div>
  <pre class="code-content"><code>const sample = "wobble";</code></pre>
</article>
```

## Why is it useful?
Code blocks are common in docs, product pages, and landing sections. This variant provides a polished animated treatment while maintaining readability and accessibility.

## Notes
- Pure CSS, no JavaScript required.
- Uses EaseMotion classes in the demo (`ease-fade-in`, `ease-slide-up`, `ease-hover-grow`).
- Includes focus-visible styles and skip link.
- Includes reduced-motion handling.
- Keeps all files inside the required submissions path.
