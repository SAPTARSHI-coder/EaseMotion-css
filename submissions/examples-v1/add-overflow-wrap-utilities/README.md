# Overflow Wrap Utilities

Utility classes for controlling how text wraps when it reaches the edge of its container.

## Available Classes

| Class | CSS |
|---------|---------|
| `.wrap-normal` | `overflow-wrap: normal;` |
| `.wrap-break-word` | `overflow-wrap: break-word;` |
| `.wrap-anywhere` | `overflow-wrap: anywhere;` |

## Usage

```html
<div class="wrap-normal">LongText...</div>

<div class="wrap-break-word">
  LongTextWithoutSpaces...
</div>

<div class="wrap-anywhere">
  LongTextWithoutSpaces...
</div>
```

## What It Does

These utilities control how long words or strings behave when they exceed the width of their container.

- `normal` — Default wrapping behavior.
- `break-word` — Breaks long words when necessary.
- `anywhere` — Allows breaks at any point to prevent overflow.

## Use Cases

- User-generated content
- URLs
- Long filenames
- Chat messages
- Responsive layouts