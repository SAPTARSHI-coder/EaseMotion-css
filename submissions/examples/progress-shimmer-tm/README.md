# Progress Bar Shimmer Variant

## What does this do?
Proposes adding `.ease-progress-shimmer` to `components/progress.css`. A layered gradient sweep animates across the progress bar fill, giving it a premium loading feel. This is visually distinct from the existing `.ease-progress-striped` variant.

## How is it used?
```html
<div class="ease-progress ease-progress-shimmer">
  <div class="ease-progress-bar" style="width: 65%;"></div>
</div>
```

Works with all existing progress color variants: `.ease-progress-success`, `.ease-progress-danger`, `.ease-progress-warning`, `.ease-progress-info`.

## Why is this useful?
The shimmer effect is a common UI pattern for loading indicators in modern web apps (GitHub, YouTube, and many design systems use it). It conveys "in progress" more dynamically than a static bar while remaining subtle enough to not distract from content. It complements the existing striped variant with a different visual language.

## Tech Stack
- Pure CSS: layered `linear-gradient` + `background-size` + `animation`
- No external dependencies or JavaScript
- Works with all existing color variants

## Browser Support
All modern browsers supporting `animation`, `background-image`, and CSS custom properties.
