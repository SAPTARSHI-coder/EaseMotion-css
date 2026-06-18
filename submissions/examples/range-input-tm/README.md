# Custom Range Input Component

## What does this do?

Provides consistent, cross-browser styled range input components using the EaseMotion design token system. The component includes fill-track effects, color variants, and size modifiers.

## How is it used?

```html
<label class="range-label" for="range1">
  <span>Volume</span>
  <span class="range-value" id="val1">50</span>
</label>
<div class="range-wrapper">
  <input type="range" class="ease-range ease-range-primary" id="range1" min="0" max="100" value="50">
</div>
```

### Color Variants

| Class                | Color              |
|----------------------|--------------------|
| `.ease-range`        | Neutral (default) |
| `.ease-range-primary`| Primary purple    |
| `.ease-range-success`| Success green     |
| `.ease-range-danger` | Danger red        |

### Size Variants

| Class             | Height |
|-------------------|--------|
| `.ease-range-sm`  | 4px    |
| (default)         | 6px    |
| `.ease-range-lg`  | 10px   |

## Why is it useful?

- Cross-browser consistent range input styling without hacks
- Fill-track effect shows progress visually
- Respects design tokens from the framework variables
- Accessible — keyboard and focus states work natively
- No JavaScript needed for styling; JS only for live value display

## Browser Support

All modern browsers. WebKit and Firefox supported. Limited legacy IE support (acceptable for modern projects in 2024+).

## Tech Stack

Pure HTML + CSS. No JavaScript dependencies.
