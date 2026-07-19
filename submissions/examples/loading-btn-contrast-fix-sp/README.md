# Loading Button Contrast Fix

**What does this do?**
Overrides the spinner `border-color` for ghost, outline, and link loading buttons to ensure the loading indicator remains visible when the button text color is transparent.

**How is it used?**
The following CSS should be applied to the framework to ensure contrast:
```css
.ease-btn-ghost.ease-btn-loading::after,
.ease-btn-outline.ease-btn-loading::after,
.ease-btn-link.ease-btn-loading::after {
  border-color: var(--ease-color-neutral-400);
  border-top-color: transparent;
}
```

**Why is it useful?**
For ghost, outline, and link buttons, `currentColor` inherits the transparent text color during the loading state, causing the spinner to become invisible. This fix explicitly sets a fallback neutral color to maintain accessibility and visual feedback for the user.
