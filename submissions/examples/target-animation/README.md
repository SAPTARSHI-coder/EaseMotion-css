# :target Animation

## What does this do?

Animates sections when they become the URL target using the CSS `:target` pseudo-class — clicking a hash link triggers an entrance animation without any JavaScript.

## How is it used?

```css
.section:target {
  animation: fade-slide-in 0.5s ease-out;
}

@keyframes fade-slide-in {
  from {
    opacity: 0;
    translate: 0 -20px;
  }
  to {
    opacity: 1;
    translate: 0 0;
  }
}
```

## Why is it useful?

Hash-based navigation (anchor links) is a natural, accessible way to navigate single-page content. The `:target` pseudo-class lets you animate the target element's entrance declaratively — no intersection observers, no scroll event listeners, no JS. This fits EaseMotion CSS's philosophy of leveraging native CSS features for zero-dependency, readable interactions.
