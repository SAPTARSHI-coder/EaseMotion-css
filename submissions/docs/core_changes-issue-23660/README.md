# Screen Reader Accessibility Utilities

1. What does this do?
Provides classes (`sr-only`, `sr-only-focusable`, `not-sr-only`) to hide elements visually from sighted users while keeping them accessible to screen readers, plus skip-link and display-undo utility overrides.

2. How is it used?

**Hide text visually (but keep screen-reader accessible):**
```html
<button class="icon-button">
  <svg>...</svg>
  <span class="sr-only">Delete Item</span>
</button>
```

**Skip links (hidden until tab-focused):**
```html
<a href="#main" class="sr-only sr-only-focusable">Skip to Main Content</a>
```

**Override/Undo hiding:**
```html
<div class="not-sr-only">This content is now visible to all users.</div>
```

3. Why is it useful?
Web accessibility (a11y) is a key requirement for modern web standards (WCAG). Providing native support for screen reader utilities without needing external heavy grid systems keeps EaseMotion CSS clean, accessible, and simple to configure.
