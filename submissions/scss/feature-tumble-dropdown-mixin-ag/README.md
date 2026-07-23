# Tumble Dropdown Mixin (-ag)

A reusable SCSS mixin that creates a smooth tumble dropdown animation suitable for loading indicators and interactive UI components.

## Features

- Lightweight SCSS mixin
- Customizable duration
- Adjustable movement distance
- Adjustable rotation angle
- Accessible
- Supports `prefers-reduced-motion`

## Usage

```scss
@use "ease-motion" as *;

.loader {
  @include feature-tumble-dropdown-mixin-ag();
}