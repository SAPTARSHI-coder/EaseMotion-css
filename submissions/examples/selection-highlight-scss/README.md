# SCSS Custom Selection Highlight Mixins

A lightweight SCSS helper mixin suite for brand-themed text selection highlights (`::selection` and `::-moz-selection`) with EaseMotion CSS token fallbacks.

## Mixins Overview

- `selection-highlight($bg, $color, $global)`: Scopes selection styling to local selectors or the global document.
- `selection-theme($variant)`: Presets theme variants (`'cyan'`, `'magenta'`, `'emerald'`, `'amber'`).

## Usage Example

```scss
@import 'mixins';

// Apply global selection
@include selection-highlight($global: true);

// Apply component brand theme
.card-magenta {
  @include selection-theme('magenta');
}