# Break Inside Avoid

CSS utility classes for controlling break-inside break-after break-before orphans widows column-break in HTML elements.

## Installation

```bash
# Via CSS @import
@import "break-inside-avoid-tm/style.css";
```

## Usage

Apply utility classes directly to your HTML elements:

```html
<!-- break-inside example -->
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

- `break-inside`: Chrome 55+, Firefox 6+, Safari 5.1+, Edge 79+
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
