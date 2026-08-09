# Wiggle Icon Mixin

## What does this do?

An SCSS mixin that wiggles an icon on hover and keyboard focus to seek attention.

## How is it used?

```scss
@use 'wiggle-icon' as *;

.my-element {
  @include wiggle-icon-mixin-sum(0.5s);
}
```

## Why is it useful?

Wiggle icons highlight notifications and actions in toolbars without writing one-off keyframes each time.

## Accessibility

- Triggers on `:focus-visible` for keyboard users
- Under `prefers-reduced-motion: reduce`, wiggle is disabled and a static outline cue is used

## Files

```
submissions/scss/feature-wiggle-icon-mixin-sum/
├── _wiggle-icon.scss
└── README.md
```

Related issue: #50750
