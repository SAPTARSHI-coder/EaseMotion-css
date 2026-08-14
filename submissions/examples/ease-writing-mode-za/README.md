## What does this do?

Provides `writing-mode` and `text-orientation` utility classes for controlling text direction and vertical text layout. Essential for CJK (Chinese/Japanese/Korean) content, vertical headings, and creative typography.

## How is it used?

```html
<div class="ease-writing-vertical-rl-za">Vertical text R&#x2192;L</div>
<div class="ease-writing-vertical-rl-za ease-text-orient-upright-za">
  Upright vertical text
</div>
```

## Why is it useful?

EaseMotion has no writing mode utilities. The CSS `writing-mode` property is essential for international content (especially CJK languages) and is also used in modern UI for vertical nav labels, table headers, and decorative text.
