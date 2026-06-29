# Issue 8444: Standardize CSS Custom Properties

This submission demonstrates the migration from camelCase to kebab-case for CSS variables as discussed in Issue #8444.

**What does this do?**
It proposes a consistent naming convention (`var(--ease-color-primary)`) to avoid collisions and confusion.

**How is it used?**
Instead of `var(--easeColorPrimary)`, users and components reference `var(--ease-color-primary)`.

**Why is it useful?**
Consistency improves developer experience, prevents overrides failing silently, and aligns with standard CSS custom property patterns.
