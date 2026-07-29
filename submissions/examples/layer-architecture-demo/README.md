# @layer Architecture Demo

## What
Demonstrates CSS `@layer` to explicitly control the cascade order. Three layers (base, components, utilities) are defined, and utility classes take precedence regardless of source position in the stylesheet.

## How
Styles are organized into `@layer base { ... }`, `@layer components { ... }`, and `@layer utilities { ... }`. Utility classes like `.highlight` and `.border-accent` are toggled via JavaScript. Because utilities are the highest-priority layer, they always override component styles without `!important`.

## Why
`@layer` brings order to large stylesheets by making cascade control explicit. It eliminates specificity wars and allows third-party styles to be safely imported at a lower layer than application styles.
