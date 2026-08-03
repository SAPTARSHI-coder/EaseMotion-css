# Spin Alert SCSS Mixin

## What does this do?
This submission implements a reusable SCSS mixin (`spin-alert-ag`) under the `submissions/scss/` track. It applies an elastic rotational entrance animation ("Spin Alert") to notification boxes, alert popups, or banner containers.

## How is it used?
Import the partial and use `@include spin-alert-ag()` inside your stylesheet:

```scss
@use './spin-alert-ag' as *;

.alert-banner {
    background-color: #1e1b4b;
    color: #e0e7ff;
    padding: 16px 24px;
    border-radius: 12px;
    
    // Apply spin alert animation
    @include spin-alert-ag(0.7s);
}
```

## Parameters
| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `$duration` | `Time` | `0.6s` | Duration of the rotational entrance animation |
| `$timing-function` | `String` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Easing curve for the elastic spin effect |
