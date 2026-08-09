# Snap Modal Mixin (Error State)

A reusable SCSS mixin that applies a smooth snap animation to modal elements. The effect makes modals appear with a quick scaling transition, helping draw user attention to important alerts or error states.

## Features

- Smooth snap animation
- Lightweight and reusable SCSS mixin
- Customizable duration
- Supports reduced-motion preferences
- Beginner-friendly implementation

## Folder Structure

```text
submissions/scss/feature-snap-modal-mixin-ds/
├── _snap-modal-mixin.scss
└── README.md
```

## Usage

```scss
@use "snap-modal-mixin" as *;

.modal {
  @include snap-modal-mixin-ds();
}
```

### Custom Duration

```scss
.modal {
  @include snap-modal-mixin-ds(0.7s);
}
```

## Example

```scss
.error-modal {
  @include snap-modal-mixin-ds(0.5s);
}
```

## Accessibility

This mixin respects:

```scss
@media (prefers-reduced-motion: reduce)
```

and disables animations for users who prefer reduced motion.

## Why is it Useful?

- Highlights important dialogs and alerts
- Improves user experience with subtle motion
- Makes modal appearances feel polished
- Draws attention to warning or error states
