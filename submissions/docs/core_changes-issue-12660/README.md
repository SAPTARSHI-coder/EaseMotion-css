# ease-line-clamp-\*

## What does this do?

Provides line clamp truncation utility classes (`.ease-line-clamp-1` through `.ease-line-clamp-6`) that limit text to a specific number of lines with an ellipsis, plus responsive breakpoint variants and a `.ease-line-clamp-none` reset.

## How is it used?

**Clamp to 3 lines:**

```html
<p class="ease-line-clamp-3">
  Long text that will be truncated after 3 lines...
</p>
```

**Remove clamping:**

```html
<p class="ease-line-clamp-none">This text is always fully visible.</p>
```

**Responsive clamp (2 lines on mobile, 4 on desktop):**

```html
<p class="ease-line-clamp-2 ease-md-line-clamp-4">
  Clamped to 2 lines on small screens, 4 on medium+.
</p>
```

### Available Classes

| Class                   | Lines     |
| ----------------------- | --------- |
| `.ease-line-clamp-1`    | 1 line    |
| `.ease-line-clamp-2`    | 2 lines   |
| `.ease-line-clamp-3`    | 3 lines   |
| `.ease-line-clamp-4`    | 4 lines   |
| `.ease-line-clamp-5`    | 5 lines   |
| `.ease-line-clamp-6`    | 6 lines   |
| `.ease-line-clamp-none` | Unclamped |

### Responsive Prefixes

| Prefix     | Min Width |
| ---------- | --------- |
| `ease-sm-` | 640px     |
| `ease-md-` | 768px     |
| `ease-lg-` | 1024px    |
| `ease-xl-` | 1280px    |

Example: `.ease-lg-line-clamp-2` clamps to 2 lines on viewports 1024px and wider.

## Why is it useful?

Multi-line text truncation is a common pattern in cards, article previews, and descriptions. These utility classes eliminate the need for JavaScript-based truncation or manual `-webkit-line-clamp` CSS, providing consistent truncation with a single class across all breakpoints.

## Features

- Clamp from 1 to 6 lines with a single class
- `.ease-line-clamp-none` to unclamp
- Responsive variants for sm, md, lg, and xl breakpoints
- Works on any block-level element (p, div, h1-h6, etc.)
- Uses the standard `-webkit-line-clamp` property with `overflow: hidden` fallback
