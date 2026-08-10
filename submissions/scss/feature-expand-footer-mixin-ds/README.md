# Expand Footer Mixin (Hover Effect)

A reusable SCSS mixin that applies a smooth expand animation to footer elements on hover. The effect subtly enlarges the footer while adding depth through a shadow, making footer sections more engaging without being distracting.

## Features

- Smooth expand hover animation
- Lightweight and reusable SCSS mixin
- Customizable transition duration
- Supports reduced-motion preferences
- Beginner-friendly implementation

## Folder Structure

```text
submissions/scss/feature-expand-footer-mixin-ds/
├── _expand-footer-mixin.scss
└── README.md
```

## Usage

```scss
@use "expand-footer-mixin" as *;

.footer {
  @include expand-footer-mixin-ds();
}
```

### Custom Duration

```scss
.footer {
  @include expand-footer-mixin-ds(0.6s);
}
```

## Example

```scss
.site-footer {
  @include expand-footer-mixin-ds();
}
```

## Accessibility

This mixin respects:

```scss
@media (prefers-reduced-motion: reduce)
```

and disables animations for users who prefer reduced motion.

## Why is it Useful?

- Enhances footer interactions
- Highlights important footer content
- Improves visual feedback
- Lightweight and easy to integrate
