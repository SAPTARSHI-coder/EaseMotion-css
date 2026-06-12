# Glossary Component

### What does this do?

Adds `ease-glossary-az` — a styled definition list component using semantic `<dl>` markup. Ideal for product specs, API documentation, metadata displays, and key-value pair listings.

### How is it used?

The maintainer should copy `style.css` into `components/glossary.css` and import it.

```html
<dl class="ease-glossary-az inline striped">
  <div class="ease-glossary-row-az">
    <dt class="ease-glossary-term-az">Display</dt>
    <dd class="ease-glossary-desc-az">15.6" Retina</dd>
  </div>
  <div class="ease-glossary-row-az">
    <dt class="ease-glossary-term-az">Processor</dt>
    <dd class="ease-glossary-desc-az">M3 Pro</dd>
  </div>
</dl>
```

Variants: `.inline` (horizontal term/desc), `.striped` (alternating rows), `.card` (bordered items), `.sm`.

### Why is it useful?

1. **Semantic HTML** — uses `<dl>`, `<dt>`, `<dd>` for accessibility and SEO
2. **Four variants** — default vertical, `.inline` horizontal, `.striped` alternating, `.card` bordered items
3. **Responsive** — inline mode collapses to vertical on mobile
