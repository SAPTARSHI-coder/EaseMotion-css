# ease-text-underline — Issue #23962

## What

Utility classes for fine-grained control over the CSS `text-decoration` underline appearance. Three categories of classes are provided:

**Offset** — distance from the baseline:
- `.ease-underline-offset-1`, `.ease-underline-offset-2`, `.ease-underline-offset-3`, `.ease-underline-offset-4`, `.ease-underline-offset-auto`

**Thickness** — line width:
- `.ease-underline-thin` (1px), `.ease-underline-thick` (3px)

**Style** — visual pattern:
- `.ease-underline-wavy`, `.ease-underline-dotted`, `.ease-underline-dashed`

## How

Apply one or more classes to any element that has an underline (typically `<a>` tags, but works on any text with `text-decoration: underline`):

```html
<a class="ease-underline-thick ease-underline-offset-3" href="#">Link</a>
<span class="ease-underline-wavy ease-underline-offset-2">Styled text</span>
```

The classes combine freely — use offset + thickness + style together for full control.

## Why

Browser defaults for underlines are often too close to the text, too thin, or use a solid line that can look harsh. These utilities give designers pixel-level control over the underline appearance without writing verbose CSS. They are especially useful for link styling, where a well-tuned underline improves readability and aesthetic quality. The classes are composable, so you can mix and match as needed.
