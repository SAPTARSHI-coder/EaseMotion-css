# Aspect Ratio Utilities

Utility classes for maintaining consistent aspect ratios using the CSS `aspect-ratio` property.

## Available Classes

| Class            | CSS                    |
| ---------------- | ---------------------- |
| `.aspect-square` | `aspect-ratio: 1 / 1`  |
| `.aspect-4-3`    | `aspect-ratio: 4 / 3`  |
| `.aspect-3-2`    | `aspect-ratio: 3 / 2`  |
| `.aspect-16-9`   | `aspect-ratio: 16 / 9` |
| `.aspect-video`  | `aspect-ratio: 16 / 9` |
| `.aspect-auto`   | `aspect-ratio: auto`   |

## Usage

```html
<div class="aspect-square"></div>
<div class="aspect-4-3"></div>
<div class="aspect-3-2"></div>
<div class="aspect-16-9"></div>
```

## Why?

These utilities make it easy to create responsive image containers, video wrappers, cards, and media layouts while maintaining consistent proportions.
