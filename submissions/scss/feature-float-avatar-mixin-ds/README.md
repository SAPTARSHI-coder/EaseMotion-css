# Float Avatar Mixin (Warning State)

A reusable SCSS mixin that adds a smooth floating animation to avatar elements. This effect can be used to highlight warning states, active users, notifications, or draw subtle attention to profile components.

## Features

- Smooth floating animation
- Lightweight and reusable SCSS mixin
- Customizable animation duration
- Supports reduced-motion preferences
- Beginner-friendly implementation

## Folder Structure

```text
submissions/scss/feature-float-avatar-mixin-ds/
├── _float-avatar-mixin.scss
└── README.md
```

## Usage

Import the mixin and apply it to your avatar element.

```scss
@use "float-avatar-mixin" as *;

.avatar {
  @include float-avatar-mixin-ds();
}
```

### Custom Duration

```scss
.avatar {
  @include float-avatar-mixin-ds(3s);
}
```

## Example

```scss
.warning-avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;

  @include float-avatar-mixin-ds(2s);
}
```

## Accessibility

This mixin respects user accessibility preferences by disabling animations when:

```scss
@media (prefers-reduced-motion: reduce)
```

is enabled.

## Why is it Useful?

Floating avatar effects help:

- Draw attention to warning or notification states
- Indicate active users or status changes
- Add subtle motion and polish to interfaces
- Improve visual engagement without being distracting

## License

Created as a contribution example for EaseMotion CSS.
