## What does this do?

Provides `ease-inset` utility classes for setting `top`, `right`, `bottom`, `left` positioning values. Essential for stretching positioned elements to fill their container.

## How is it used?

```html
<div class="ease-relative" style="height:200px">
  <div class="ease-absolute ease-inset-0-za">Full-bleed overlay</div>
</div>
```

## Why is it useful?

The `inset: 0` pattern is one of the most common CSS patterns for overlays, pseudo-element covers, and full-bleed backgrounds. It's used repeatedly across EaseMotion components but has no utility class, forcing duplication of `top:0;right:0;bottom:0;left:0` everywhere.
