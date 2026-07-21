# Code-Block Dark Mode Support

## Description
This submission adds automatic dark mode support to the `code-block` component
using the `@media (prefers-color-scheme: dark)` CSS media query.

When a user enables dark mode in their OS or browser, the component
automatically switches its color palette to a dark-friendly theme using
CSS custom properties. No JavaScript, no class toggling, and no extra
configuration is required.

## Implementation Details
All color tokens are defined as CSS custom properties on the component
selector in light mode. The dark mode media query block overrides these
tokens so every property (background, text, border, shadow, accent) adapts
atomically. A combined `prefers-color-scheme: dark` and
`prefers-contrast: more` block ensures the component also meets WCAG AAA
requirements in high-contrast dark environments.

## Accessibility Standards
- WCAG 2.1 Success Criterion 1.4.3: Contrast Minimum (Level AA)
- WCAG 2.1 Success Criterion 1.4.6: Contrast Enhanced (Level AAA)

## Files
- `style.css`: 100+ lines. CSS custom property definitions for light mode,
  base component styles, dark mode overrides, and a combined dark plus high
  contrast override block.
- `demo.html`: Full HTML5 boilerplate with dark mode testing instructions.
- `README.md`: This file.

## How to Test
1. Open `demo.html` in any modern browser.
2. Enable dark mode in OS settings or emulate it in browser DevTools.
3. Observe that the component background, text, borders and shadows all
   adapt without a page reload.

Fixes #47238
