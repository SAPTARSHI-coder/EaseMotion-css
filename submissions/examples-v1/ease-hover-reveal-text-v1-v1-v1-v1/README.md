# Ease Hover Reveal Text

## What does this do?

Reveals hidden text by sliding it upward when the parent element is hovered.

## How is it used?

```html
<div class="card">
  <p class="ease-reveal-text">Hidden text</p>
</div>
```

## Why is it useful?

Useful for card captions, descriptions, button subtitles, and other UI elements where secondary content should appear only on hover.

## Tech Stack

- HTML
- CSS

## Preview

Open demo.html directly in a browser.

## Contribution Notes

Uses overflow:hidden on the parent and translateY animation on the child element for a smooth reveal effect.
