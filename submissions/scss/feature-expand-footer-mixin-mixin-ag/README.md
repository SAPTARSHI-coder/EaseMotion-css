# Expand Footer Hover Effect (SCSS)

## Description

A reusable SCSS mixin that smoothly expands a footer when the user hovers over it or focuses on an element inside it.

## Features

- Smooth height expansion
- Keyboard accessible using `:focus-within`
- Respects `prefers-reduced-motion`
- Easy to customize

## Usage

```scss
.footer {
  @include feature-expand-footer-mixin-mixin-ag(
    220px,
    70px,
    0.5s,
    ease
  );
}