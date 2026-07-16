# ease-outline — Outline & Ring Focus Utility Classes

## What does this do?

Provides CSS `outline` and `box-shadow` ring utilities for focus indicators, accessibility, and visual emphasis. Rings use `box-shadow` (non-scaling) while outlines use the native `outline` property.

## How is it used?

```html
<button class="ease-ring-2 ease-ring-primary">Focused</button>
<input class="ease-outline-2" />
<div class="ease-ring-inset">Inset ring</div>
```

### Classes

| Class | Property | Value |
|---|---|---|
| `.ease-outline-0` | `outline` | `none` |
| `.ease-outline-1` | `outline` | `1px solid` |
| `.ease-outline-2` | `outline` | `2px solid` |
| `.ease-outline-4` | `outline` | `4px solid` |
| `.ease-ring-1` | `box-shadow` | `0 0 0 1px` |
| `.ease-ring-2` | `box-shadow` | `0 0 0 2px` |
| `.ease-ring-4` | `box-shadow` | `0 0 0 4px` |
| `.ease-ring-inset` | `box-shadow` | Inset ring |
| `.ease-ring-primary` | color | Primary color var |
| `.ease-ring-offset-2` | `box-shadow` | With 2px offset |
