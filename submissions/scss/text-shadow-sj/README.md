# Text Shadow SCSS Mixin

A reusable SCSS mixin for adding customizable text shadows to EaseMotion projects.

## Usage

Import the mixin:

```scss
@use "text-shadow";

.title {
  @include text-shadow.text-shadow(
    2px,
    2px,
    5px,
    rgba(0, 0, 0, 0.4)
  );
}