# SCSS Accent & Caret Color Helper Mixins

An SCSS helper mixin suite for controlling native form control accent colors (`accent-color`) and text input insertion cursors (`caret-color`).

## Mixins Overview

- `accent-color($color)`: Customizes native HTML checkboxes, radios, range sliders, and progress bars.
- `caret-color($color)`: Customizes the text input insertion cursor color.
- `form-theme($accent, $caret)`: Combines both accent and caret color rules in a single invocation.

## Usage Example

```scss
@use 'mixins' as *;

// Customize text cursor
.my-input {
  @include caret-color(#06b6d4);
}

// Customize native form elements
.my-checkbox {
  @include accent-color(#ec4899);
}

// Apply full theme
.my-form {
  @include form-theme(#10b981, #10b981);
}