# Auto-Growing Textarea with field-sizing

Uses the modern field-sizing: content CSS property so textareas and inputs grow automatically with their content — no JavaScript required. Gracefully falls back in older browsers.

## Features

- field-sizing: content — auto-grows with typed content
- min-height and max-height constraints for UX boundaries
- Falls back gracefully with a min-height in unsupported browsers
- Dark mode surface and text contrast
- Chat-message-style layout with auto-growing input

## Usage

```html
<div class="demo-card">
  <!-- Apply the feature class to any element -->
</div>
```

## Why is it useful?

This submission uses EaseMotion's CSS custom properties — specifically the `color-surface, shadow-sm, radius-md, space-4, color-primary` tokens — to ensure the demo is fully themeable and consistent with the rest of the framework. The implementation includes dark mode via `prefers-color-scheme: dark` and respects `prefers-reduced-motion` for accessibility.
