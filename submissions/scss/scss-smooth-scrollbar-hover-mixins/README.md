# SCSS Utility: Scrollbar Hover Utility

Provides an elegant, cross-browser compatible SCSS mixin (`@include`) to style default browser scrollbars seamlessly with hardware-accelerated interactive hover states.

## Parameter Reference

- `$width` (Default: `8px`) - Controls scrollbar track/thumb dimensions.
- `$track-color` (Default: `transparent`) - Colors the scroll channel trajectory runway.
- `$thumb-color` (Default: `tokens.$ease-color-primary`) - Sets base element scroll handle fill.
- `$thumb-hover-color` (Default: `null`) - Custom hover state override. Automatically darkens by `15%` via `sass:color` engine loops if left blank.
- `$radius` (Default: `4px`) - Curves the boundaries of the interactive handle.

## Integration Blueprint

```scss
@use "../../scss/mixins" as ease;
@use "../../scss/tokens" as tokens;

.dashboard-viewport {
  max-height: 500px;
  overflow-y: auto;

  @include ease.ease-scrollbar(
    $width: 6px,
    $thumb-color: tokens.$ease-color-primary,
    $radius: 8px
  );
}
```
---
Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**