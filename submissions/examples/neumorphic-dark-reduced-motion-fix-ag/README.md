# Neumorphic Dark Mode Reduced Motion Fix (Issue #14065)

## What does this do?
Shows the correct CSS ordering so that `prefers-reduced-motion: reduce` properly suppresses the neumorphic card hover animation in both light AND dark mode.

## How is it used?
```html
<div class="demo-card-neumorphic">Card content</div>
```

## Why is it useful?
The current implementation nests the dark-mode hover inside `@media (prefers-color-scheme: dark)` but the reduced-motion override is declared before the dark-mode block. By placing the reduced-motion block last and targeting both the default and `:hover` states, the animation is fully suppressed for all users who prefer reduced motion.
