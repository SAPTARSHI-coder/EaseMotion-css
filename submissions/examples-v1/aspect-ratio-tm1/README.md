# Aspect Ratio TM v2

Utility classes for maintaining consistent aspect ratios across images, videos, cards, iframes, and responsive containers.

## Files

```text
demo.html
style.css
README.md
```

## Available Utilities

| Class                  | CSS                     |
| ---------------------- | ----------------------- |
| `.aspect-ratio-auto`   | `aspect-ratio: auto;`   |
| `.aspect-ratio-square` | `aspect-ratio: 1 / 1;`  |
| `.aspect-ratio-1-1`    | `aspect-ratio: 1 / 1;`  |
| `.aspect-ratio-video`  | `aspect-ratio: 16 / 9;` |
| `.aspect-ratio-16-9`   | `aspect-ratio: 16 / 9;` |
| `.aspect-ratio-4-3`    | `aspect-ratio: 4 / 3;`  |
| `.aspect-ratio-3-4`    | `aspect-ratio: 3 / 4;`  |
| `.aspect-ratio-21-9`   | `aspect-ratio: 21 / 9;` |
| `.aspect-ratio-9-16`   | `aspect-ratio: 9 / 16;` |
| `.aspect-ratio-2-1`    | `aspect-ratio: 2 / 1;`  |
| `.aspect-ratio-1-2`    | `aspect-ratio: 1 / 2;`  |

## Usage

### Video Container

```html
<div class="aspect-ratio-16-9">
  <iframe></iframe>
</div>
```

### Square Card

```html
<div class="aspect-ratio-1-1">Content</div>
```

### Mobile Mockup

```html
<div class="aspect-ratio-9-16">Mobile Preview</div>
```

## Use Cases

- Images
- Videos
- YouTube embeds
- Product cards
- Gallery layouts
- Mobile previews
- Dashboard widgets

## Browser Support

Modern versions of:

- Chrome
- Firefox
- Safari
- Edge

## Run

Open:

```text
demo.html
```

to view all aspect ratio utility classes.
