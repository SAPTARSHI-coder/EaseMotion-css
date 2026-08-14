# Overflow Wrap Utility Classes

## What does this do?

This adds utility classes to manage word wrapping and layout overflow when dealing with exceptionally long unbreakable words, text strings, or URLs.

## How is it used?

Apply these utility classes on block or inline elements containing text content:

```html
<p class="ease-overflow-wrap-break">
  https://www.verylongunbreakableurl-example.com/some/path/here
</p>
```

Available classes:

- `.ease-overflow-wrap-normal`: Wrapping only at default break opportunities (default browser behavior).
- `.ease-overflow-wrap-anywhere`: Breaks lines at any arbitrary point in a string if no normal wrap points exist. Prevents container breaking and respects min-content sizes.
- `.ease-overflow-wrap-break`: Breaks lines inside words to fit containing bounds (fallback/traditional wrapping style).

## Why is it useful?

It provides simple, reusable utility classes to control text overflow behavior across containers like cards, grids, sidebars, and comments columns.
