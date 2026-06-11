## What does this do?

Provides `ease-text-decoration` utility classes for controlling text decoration line, style, thickness, and offset.

## How is it used?

```html
<span class="ease-text-underline-za">Underlined text</span>
<span class="ease-text-line-through-za">Strikethrough text</span>
<span class="ease-text-overline-za">Overlined text</span>
<span class="ease-text-underline-za ease-text-decoration-wavy-za"
  >Wavy underline</span
>
```

## Why is it useful?

EaseMotion core only sets `text-decoration: none` on links and `text-decoration: underline` on hover. There are no standalone utility classes for text decoration. These are commonly needed for styling links, highlights, and decorative text without writing custom CSS.
