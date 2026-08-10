# Interactive "Peel Reveal" Sticker Corner

## What does this do?
A delightful interaction where the top-right corner of a card or element looks like a physical sticker. When hovered, the corner visually "peels" back smoothly to reveal a hidden easter egg (like an emoji, text, or icon) underneath.

## How is it used?
```html
<div class="ease-peel-card">
    Hover Top Right
</div>
```

## Why does it fit EaseMotion CSS?
This uses a classic CSS trick: rendering a triangle using thick CSS borders on a `::before` pseudo element. By animating `border-width` and `box-shadow` on hover, we create a realistic page-turning or peeling effect that looks completely organic and 3D, without any SVG or canvas manipulation.

## Tech Stack
- HTML
- CSS (No JavaScript)
