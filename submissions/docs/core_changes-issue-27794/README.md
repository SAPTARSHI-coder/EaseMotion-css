# ease-flexbox — Flexbox Alignment & Layout Utility Mixins

## What does this do?

SCSS mixins for common flexbox patterns — center, space-between, column, wrap, start, and end. Saves boilerplate for repeated flex layouts.

## How is it used?

```scss
@use 'mixins' as flex;

.nav { @include flex.ease-flex-between; }
.grid { @include flex.ease-flex-wrap(0.75rem); }
.overlay { @include flex.ease-flex-center; }
```
