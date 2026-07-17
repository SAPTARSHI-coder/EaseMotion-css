# Fix scroll-behavior !important bug (Issue #12195)

### 1. What does this do?
This submission proposes a fix for the `easemotion.css` core file by removing the `!important` flag from the `scroll-behavior: auto` property within the `prefers-reduced-motion: reduce` media query.

### 2. How is it used?
By removing `!important`, the property follows the standard CSS cascade. Developers can override it in their own stylesheets if a specific UI interaction requires a different scroll behavior, while still maintaining accessibility by default.

### 3. Why is it useful?
Using `!important` in a framework's core utility is generally discouraged as it breaks the cascade and prevents customization. This fix improves framework flexibility and compliance with CSS best practices without compromising the default accessibility behavior for users who prefer reduced motion.

---
**Note to Maintainer:** This is a core bug fix submission for #12195. Please apply the change to `easemotion.css` as requested in the issue.
