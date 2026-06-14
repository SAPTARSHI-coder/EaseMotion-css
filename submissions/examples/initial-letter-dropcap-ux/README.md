# Initial Letter Dropcap Ux

## What does this do?

Demonstrates the native CSS `initial-letter` property for creating typographic drop caps without float + font-size hacks. Supports multiple sizes (sink 2, 3, 4 lines) and visual variants (solid, gradient, outline) with a graceful `@supports` fallback for Firefox and older browsers.

## How is it used?

```html
<p class="il-card-text">
  <span class="il-cap il-cap-3">T</span>ext content here...
</p>
```

Variants: `il-cap-2` (sink 2 lines), `il-cap-3` (sink 3 lines), `il-cap-4` (sink 4 lines), `il-cap-primary`, `il-cap-gradient`, `il-cap-outline`, `il-cap-serif`.

## Why is it useful?

Drop caps add editorial polish to articles, blog posts, and documentation. Using the native `initial-letter` property is more maintainable and predictable than the traditional float approach.
