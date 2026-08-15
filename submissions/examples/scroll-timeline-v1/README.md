# Scroll Driven Animation Timeline Helper

A reusable SCSS helper for creating scroll-driven animations using the CSS `scroll()` animation timeline.

## Feature

The helper provides a convenient way to apply a scroll-based animation timeline.

It supports:

- `animation-timeline: scroll()`
- Scroll progress animations
- CSS variable integration
- Browser fallback
- Responsive usage
- Reduced-motion accessibility

## Basic Usage

```scss
.progress {
  @include scroll-timeline;
}