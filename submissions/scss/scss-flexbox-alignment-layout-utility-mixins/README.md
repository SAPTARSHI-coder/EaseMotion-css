# SCSS Utility: Flexbox Alignment & Layout Utility Mixins

A reusable, structural SCSS layout partial providing comprehensive, parametric flexbox arrangement mixins and independent utility classes to optimize element distributions within the EaseMotion CSS engine.

## API & Parametric Configurations

### `ease-flex()`
Assembles standard layout definitions cleanly into composable components with zero multi-class rule dependency stacking.

- `$direction` (Default: `row`): Sets the primary layout alignment axis orientation.
- `$justify` (Default: `flex-start`): Manages main axis spacing distribution structures.
- `$align` (Default: `stretch`): Directs cross axis child item stretch and baseline alignments.
- `$wrap` (Default: `nowrap`): Toggles item row wrapping thresholds.
- `$gap` (Default: `tokens.$ease-spacing-md`): Spatial padding grid allocating room between modules.

---

## Technical Integration Guide

### Sass Dependency Compiling
```scss
@use "../../scss/mixins" as ease;
@use "../../scss/tokens" as tokens;

.custom-nav-bar {
  @include ease.ease-flex(
    $direction: row,
    $justify: space-between,
    $align: center,
    $gap: tokens.$ease-spacing-lg
  );
}

```
---
Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**