# Prefers-Reduced-Motion Guide

Fixes #62615 — demonstrates the correct pattern for respecting `prefers-reduced-motion` across animated components.

## Problem

Multiple components in the framework are missing `prefers-reduced-motion` media query support, which violates WCAG 2.1 Success Criterion 2.3.3 and can cause motion sickness for users with vestibular disorders.

## Solution

Every animated component should disable or shorten motion when the user has requested reduced motion at the OS level:

```css
@media (prefers-reduced-motion: reduce) {
  .component-class {
    animation: none;
    transition: none;
  }
}
```

This submission demonstrates the pattern applied to three common animation types:

- A looping spinner (`animation`)
- An on-load fade-in (`animation`)
- A hover transition (`transition` + `transform`)

## Files

- `demo.html` — live example with all three animated components
- `style.css` — includes the components' base animations plus the `prefers-reduced-motion` override block

## How to view

Open `demo.html` in a browser. In Chrome DevTools, open the Rendering tab and set "Emulate CSS media feature prefers-reduced-motion" to `reduce` to see all animations and transitions disable.

## Reference

Components like `modals.css`, `cards.css`, `buttons.css`, `forms.css`, and `command-palette.css` already implement this pattern correctly and were used as a reference for this guide.
