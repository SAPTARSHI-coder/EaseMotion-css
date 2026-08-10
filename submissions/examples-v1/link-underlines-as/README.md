# Animated Link Underlines

### What does this do?

It shows a set of link hover styles where an underline animates in differently: sliding in from the left, expanding from the center, and sliding in from the right.

### How is it used?

```html
<a href="#" class="link link-slide">Slide in</a>
<a href="#" class="link link-center">Center out</a>
<a href="#" class="link link-right">From right</a>
```

Add `link` plus one of `link-slide`, `link-center`, or `link-right` to a link. The underline direction comes from the `transform-origin`.

### Why is it useful?

Animated underlines make navigation and inline links feel responsive. This animates the underline with a `scaleX` transform and a chosen `transform-origin`, so it needs no JavaScript. The effect also triggers on keyboard focus, and the transition is disabled under `prefers-reduced-motion: reduce`.
