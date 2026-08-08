# Zoom Skeleton Mixin

## What does this do?

An SCSS mixin that applies a smooth zoom pulse to skeleton loading placeholders.

## How is it used?

```scss
@use 'zoom-skeleton' as *;

.my-element {
  @include zoom-skeleton-mixin-sum(0.5s);
  width: 100%;
  height: 1rem;
}
```

## Why is it useful?

Zooming skeletons keep loading states visually alive without heavy shimmer libraries — simple and readable.

## Accessibility

- Under `prefers-reduced-motion: reduce`, zoom stops and a static opacity remains

## Files

```
submissions/scss/feature-zoom-skeleton-mixin-sum/
├── _zoom-skeleton.scss
└── README.md
```

Related issue: #50752
