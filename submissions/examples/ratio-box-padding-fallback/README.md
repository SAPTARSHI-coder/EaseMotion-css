# Ratio Box Padding Fallback

This example demonstrates the EaseMotion SCSS `ratio-box`
helper mixin.

The mixin provides an aspect-ratio fallback using the
traditional `padding-top` percentage technique.

## Usage

```scss
@use "../../scss/mixins" as *;

.video-container {
  @include ratio-box(16, 9);
}