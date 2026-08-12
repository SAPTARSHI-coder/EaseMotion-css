# Text Outline to Filled Transition

## What does this do?

It creates a typography effect where outlined text smoothly fills with solid color from left to right on hover.

## How is it used?

Apply the `text-outline-fill-uj` class and define the `data-text` attribute with matching text content:

```html
<h1 class="text-outline-fill-uj" data-text="Creative">
  Creative
</h1>
```

You can change the fill color by modifying the text color of the element:

```css
.text-outline-fill-uj {
  color: #ff5a5f; /* Change outline and fill color */
}
```

## Why is this useful?

This effect offers a premium interactive experience for hero headings, titles, and branding layouts. It runs entirely on the GPU utilizing compositor-friendly properties (`width` transition on a pseudoelement), preserves clean layouts without reflows, and falls back to fully colored text when `prefers-reduced-motion` is active.
