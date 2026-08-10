# Copy Field

### What does this do?

It shows a read only field for a value like an API key or an invite link, with a copy button on the right. A copied confirmation tooltip appears when the copy button is hovered or focused.

### How is it used?

```html
<div class="copy-field">
  <input class="cf-input" type="text" readonly value="ease_sk_9f2a..." aria-label="API key" />
  <button class="cf-btn" aria-label="Copy API key">
    <svg>...</svg>
    Copy
    <span class="cf-hint" role="status">Copied</span>
  </button>
</div>
```

The input is `readonly` so the value can be selected but not edited. The copied hint is hidden until the button is hovered or focused. A host app wires the actual clipboard write.

### Why is it useful?

Dashboards show API keys, invite links, and coupon codes with a copy button. This presents a read only value with a copy button and a copied hint, using only CSS and inline SVG. The whole field shows a focus ring via `:focus-within` and the hint fade is reduced under reduced motion.
