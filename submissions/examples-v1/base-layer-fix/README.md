# Base Layer Cascade Fix (Submission Patch)

**Issue:** `core/base.css` is unlayered, causing unexpected overrides.
**Constraint:** Core files cannot be modified.

**Solution:**
This submission provides a `patch.css` file. By importing the core `base.css` inside an `@layer easemotion-base` block within this patch, we restore the correct CSS cascade order without modifying any core source files.

**How to use:**
Instead of importing the raw `core/base.css`, import this `patch.css` to ensure your layers are respected.
