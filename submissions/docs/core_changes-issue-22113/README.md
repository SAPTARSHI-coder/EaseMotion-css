# Screen Reader Only (sr-only) Utility

## What does this do?

Adds `ease-sr-only` and `ease-sr-only-focusable` utility classes that visually hide content while keeping it accessible to screen readers and assistive technologies, following the WCAG-compliant visually-hidden pattern.

## How is it used?

**Icon button with accessible label:**

```html
<button class="icon-btn" aria-label="Close dialog">
  <span class="ease-sr-only">Close</span>
  <svg>...</svg>
</button>
```

**Skip-to-content navigation link:**

```html
<a href="#main-content" class="ease-sr-only-focusable">
  Skip to main content
</a>
```

**Screen reader only heading for section landmark:**

```html
<h2 class="ease-sr-only">Section Navigation</h2>
<nav>...</nav>
```

## Why is it useful?

Accessibility is a core requirement for modern web development. The `sr-only` pattern is one of the most fundamental accessibility utilities — it enables developers to provide screen reader text without affecting visual design. This utility is essential for:

- Icon-only buttons (social media icons, close buttons, menu toggles)
- Skip navigation links
- Section labels for landmark regions
- Form input labels when using placeholder-only designs
- Table summaries and data descriptions
- Status updates for screen readers during dynamic content changes

Adding this to EaseMotion CSS aligns with the framework's utility-first philosophy and ensures developers have WCAG-compliant accessibility tools built in.
