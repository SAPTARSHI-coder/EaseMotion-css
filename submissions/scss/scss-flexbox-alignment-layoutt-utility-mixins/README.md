# SCSS Utility: Flexbox Alignment & Layout Utility Mixins

A data-driven, performance-first SCSS layout partial providing comprehensive, parameterized flexbox arrangement mixins and independent helper classes within the EaseMotion CSS engine.

## API Configuration Parameters

### `ease-flex()`
Assembles layout declarations into components with zero multi-class rule dependency stacking.

- `$direction` (Default: `row`): Sets the primary layout alignment orientation.
- `$justify` (Default: `flex-start`): Manages main axis spacing distribution structures.
- `$align` (Default: `stretch`): Directs cross-axis child item alignments.
- `$wrap` (Default: `nowrap`): Toggles item wrapping thresholds.
- `$gap` (Default: `var(--ease-space-md, tokens.$ease-spacing-md)`): Unified fallback space variable.

---

## Technical Integration Guide

### Sass Framework Integration
```scss
@use "../../scss/mixins" as ease;
@use "../../scss/tokens" as tokens;

.custom-nav-bar {
  @include ease.ease-flex(
    $direction: row,
    $justify: space-between,
    $align: center
  );
}
```
---

Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**