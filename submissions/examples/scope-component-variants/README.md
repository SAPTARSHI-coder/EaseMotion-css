# @scope Component Variants

## What
Demonstrates CSS `@scope` for creating component theme variants without nested selectors or complex specificity. A theme-wrapper element changes class, and `@scope` rules re-theme all cards inside.

## How
Three `@scope` blocks (`.theme-default`, `.theme-dark`, `.theme-colorful`) redefine CSS custom properties scoped to their root. A base `@scope (.card)` provides shared card styles. JavaScript toggles the class on the wrapper, and `@scope` applies the correct theme without cascade leaks.

## Why
`@scope` provides true component encapsulation in vanilla CSS. It avoids specificity inflation, keeps themes maintainable, and eliminates the need for naming conventions like BEM for scoped overrides.
