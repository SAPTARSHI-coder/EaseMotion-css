### Bug Fix: Broken Code Tag Typography (#2)

**Issue:** Code snippet tags within the feature cards were breaking across multiple lines (e.g., rendering `[in]` on a new line), breaking the pill-shaped UI aesthetic.

**Resolution:** - Updated the `.tag` class in the main stylesheet to include `white-space: nowrap` and `display: inline-block`.

- This explicitly instructs the browser engine to treat the entire code block as a single, unbreakable visual element.
