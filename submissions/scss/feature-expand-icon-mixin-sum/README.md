# Expand Icon Mixin

## What does this do?

An SCSS mixin that expands an icon smoothly on hover and keyboard focus.

## How is it used?

```scss
@use 'expand-icon' as *;

.my-element {
  @include expand-icon-mixin-sum(0.5s);
}
```

### Parameters

| Param | Default | Description |
| --- | --- | --- |
| `$duration` | `0.5s` | Transition length |
| `$scale` | `1.18` | Peak expand scale |
| `$easing` | spring cubic-bezier | Motion curve |

## Why is it useful?

Expand-on-hover icons give clear interactive feedback for toolbars, FABs, and action buttons without writing one-off CSS each time.

## Accessibility

- Works with `:focus-visible` for keyboard users
- Under `prefers-reduced-motion: reduce`, scaling is disabled and a static outline cue is used instead

## Files

```
submissions/scss/feature-expand-icon-mixin-sum/
├── _expand-icon.scss
└── README.md
```

Related issue: #50759
