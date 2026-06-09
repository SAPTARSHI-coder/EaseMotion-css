# CSS @scope Demo

## What does this do?

Demonstrates the CSS `@scope` rule — which scopes styles to a specific container so the same class name can have different animations in different contexts, without conflicts or specificity hacks.

## How is it used?

```css
@scope (#container-a) {
  .highlight {
    animation: rotate 2s infinite;
  }
  @keyframes rotate {
    50% {
      rotate: 5deg;
    }
  }
}

@scope (#container-b) {
  .highlight {
    animation: bounce 2s infinite;
  }
  @keyframes bounce {
    50% {
      translate: 0 -6px;
    }
  }
}
```

## Why is it useful?

In animation-heavy codebases, class name collisions and specificity wars are common. `@scope` lets you reuse descriptive class names (like `.highlight`, `.active`, `.entrance`) with different animation behaviors in different contexts — no BEM hacks, no overrides. This makes CSS more maintainable while keeping class names human-readable, which aligns with EaseMotion CSS's philosophy.
