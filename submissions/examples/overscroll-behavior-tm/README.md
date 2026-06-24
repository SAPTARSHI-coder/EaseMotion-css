# Overscroll Behavior

CSS utility classes for controlling overscroll-behavior overscroll-behavior-x overscroll-behavior-y in HTML elements.

## Installation

```bash
# Via CSS @import
@import "overscroll-behavior-tm/style.css";
```

## Usage

Apply utility classes directly to your HTML elements:

```html
<!-- overscroll-behavior example -->
<div class="hyphens-auto-tm word-break-keep-all-tm">
  Long unbreakable text content here
</div>
```

## Classes Reference

| Class | CSS Property |
|-------|-------------|
| `.hyphens-auto-tm` | `-webkit-hyphens: auto; hyphens: auto;` |
| `.word-break-words-tm` | `word-break: break-word; overflow-wrap: break-word;` |
| `.overflow-wrap-anywhere-tm` | `overflow-wrap: anywhere;` |
| `.text-overflow-ellipsis-tm` | `overflow: hidden; text-overflow: ellipsis; white-space: nowrap;` |
| `.white-space-pre-wrap-tm` | `white-space: pre-wrap;` |
| `.line-clamp-2-tm` | `-webkit-line-clamp: 2;` |
| `.break-inside-avoid-tm` | `break-inside: avoid;` |

## Live Demo

Open `demo.html` to see all utilities in action with interactive examples.

## Browser Support

- `overscroll-behavior`: Chrome 55+, Firefox 6+, Safari 5.1+, Edge 79+
- `word-break`: All modern browsers
- CSS Multi-column Layout: Chrome 50+, Firefox 52+, Safari 9+, Edge 79+

## Customization

Override utility classes in your own CSS:

```css
.my-custom-class {
  -webkit-hyphens: auto;
  hyphens: auto;
  -webkit-language: en;
}
```
