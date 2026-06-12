# Blockquote Component

### What does this do?

Adds `ease-blockquote-az` — a styled blockquote component with a large decorative quotation mark, italic quote text, author citation with optional avatar, and multiple color/size variants.

### How is it used?

The maintainer should copy `style.css` into `components/blockquote.css` and import it.

```html
<blockquote class="ease-blockquote-az">
  <p class="ease-blockquote-text-az">The quote text goes here.</p>
  <div class="ease-blockquote-footer-az">
    <div class="ease-blockquote-avatar-az">A</div>
    <div class="ease-blockquote-author-az">
      <span class="ease-blockquote-author-name-az">Author Name</span>
      <span class="ease-blockquote-author-title-az">Title</span>
    </div>
  </div>
</blockquote>
```

Variants: `.bordered`, `.center`, `.color-success`, `.color-warning`, `.color-danger`, `.sm`.

### Why is it useful?

1. **Decorative quote mark** — large curly quote rendered via CSS `::before`, no extra markup
2. **Rich citation** — author name, title, and optional avatar slot in naturally
3. **Color variants** — success (green), warning (amber), danger (red) for contextual quotes
4. **Centered layout** — top-border accent with centered text, perfect for hero sections
