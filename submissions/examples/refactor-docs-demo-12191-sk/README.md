# Refactor Hardcoded Inline Styles in docs/demo.html (Issue #12191)

### 1. What does this do?
This submission provides a refactored version of the `docs/demo.html` page (and a demonstration of the proposed changes) by moving hardcoded inline `style` attributes into reusable CSS classes.

### 2. How is it used?
The inline styles such as `style="padding-left: 10px;"`, `style="margin-bottom: var(--ease-space-8);"`, and complex flexbox layouts are replaced with semantic classes like `.demo-pl-10`, `.demo-mb-8`, and `.demo-logo-link`. These classes are defined in the accompanying `style.css`.

### 3. Why is it useful?
Refactoring inline styles to classes:
- Improves **separation of concerns** by keeping structure in HTML and styling in CSS.
- Enhances **maintainability** as global changes can be made in one place.
- Prevents styling issues where inline styles override stylesheets with high specificity.
- Makes the codebase cleaner and more professional.

---
**Note to Maintainer:** This is a bug fix/refactoring submission for #12191. Please consider integrating these classes into `docs/docs.css` and updating `docs/demo.html` accordingly.
