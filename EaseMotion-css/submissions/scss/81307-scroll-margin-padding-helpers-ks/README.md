# SCSS Scroll Margin & Padding Helper Mixins
Reusable SCSS helpers for fixed and sticky header scroll offsets.
## Issue
#81307 — Add SCSS Scroll Margin & Padding Helper Mixins
## Overview
Provides reusable mixins for `scroll-margin-top` and `scroll-padding-top`.
They prevent anchored content from being hidden behind persistent headers.
## Features
- Scroll margin helper
- Scroll padding helper
- Combined offset helper
- CSS custom-property support
- Fallback values
- Responsive offsets
- Anchor-target support
- Scroll-container support
- Configurable defaults
- No JavaScript
## File Structure
```text
81307-feat-scss-add-scss-scroll-margin-padding-helper-mixins-ks/
├── _scroll-margin-padding-helper-mixins.scss
└── README.md
```
## Installation
Import the partial:
```scss
@use "scroll-margin-padding-helper-mixins" as scroll;
```
Then include the required mixin.
## Scroll Margin
Use `ease-scroll-margin-top` for anchor targets:
```scss
.section {
  @include scroll.ease-scroll-margin-top(5rem);
}
```
This keeps the target visible below a fixed header.
## Scroll Padding
Use `ease-scroll-padding-top` on the scrolling container:
```scss
html {
  @include scroll.ease-scroll-padding-top(5rem);
}
```
## Combined Offset
Use `ease-scroll-offset` when both properties need the same value:
```scss
.section {
  @include scroll.ease-scroll-offset(4rem);
}
```
## CSS Variables
The helpers support custom properties:
```scss
:root {
  --ease-scroll-offset: 4rem;
}
```
```scss
.section {
  @include scroll.ease-scroll-margin-top(var(--ease-scroll-offset, 4rem));
}
```
## Configuration
Default values can be overridden:
```scss
$ease-scroll-offset: 4rem !default;
$ease-scroll-offset-mobile: 3rem !default;
```
## Fallback Support
A concrete fallback is provided before the CSS variable:
```css
.section {
  scroll-margin-top: 4rem;
  scroll-margin-top: var(--ease-scroll-offset, 4rem);
}
```
## Parameters
### `ease-scroll-margin-top`
| Parameter | Default | Description |
|---|---|---|
| `$offset` | CSS variable | Scroll margin |
| `$fallback` | `4rem` | Fallback |
### `ease-scroll-padding-top`
| Parameter | Default | Description |
|---|---|---|
| `$offset` | CSS variable | Scroll padding |
| `$fallback` | `4rem` | Fallback |
## Why Use These Helpers?
Fixed and sticky headers can overlap anchored content.
`scroll-margin-top` offsets the target; `scroll-padding-top` offsets the container.
## Testing
Compile with Sass and verify the generated properties and responsive rules.
## Checklist
- [x] SCSS partial
- [x] Scroll margin and padding helpers
- [x] CSS variable and fallback support
- [x] Responsive helpers
- [x] Usage documentation
- [x] No JavaScript or external dependencies
## Related Issue
Closes #81307
## Summary
Compact SCSS utilities for reliable scroll offsets around persistent headers.