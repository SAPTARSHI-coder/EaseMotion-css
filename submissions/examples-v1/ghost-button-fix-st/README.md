# Ghost Button Hover Contrast Fix

This submission proposes a patch for the `.ease-btn-ghost` hover state in the core framework to resolve issue #38751.

## What is the bug?
When using a dark theme where the text color is natively white (`#ffffff`), hovering the ghost button applied a solid light background (`--ease-color-neutral-100`) while keeping the text light (or shifting to a white variable), making it invisible.

## The Fix
Instead of using fixed background color variables for the hover state, we use a CSS `color-mix()` based on `currentColor` with a 10% opacity. 

```css
.ease-btn-ghost:hover {
  background-color: color-mix(in srgb, currentColor 10%, transparent) !important;
  color: inherit !important;
}
```

This guarantees that:
1. The text remains whatever color it was set to.
2. The hover background perfectly matches the button's text color but completely translucent, functioning gracefully in both light mode and dark mode without needing complex media queries.

*Note: Submitted as a separate example folder to respect the temporary core contribution freeze.*
