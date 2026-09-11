# Reduced Motion Query

Responsive example demonstrating `prefers-reduced-motion`
for accessible animation fallbacks.

## SCSS helper concept

```scss
@mixin reduced-motion {
  @media (prefers-reduced-motion: reduce) {
    @content;
  }
}