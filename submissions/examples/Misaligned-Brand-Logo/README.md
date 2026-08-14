### Bug Fix: Misaligned Header Logo (#1)

**Issue:** The EaseMotion brand logo was detached from the main navigation flow, rendering at the absolute top of the viewport instead of aligning inline with the navigation links.

**Resolution:** - Restructured the HTML by placing the `.demo-logo` anchor tag inside a `.nav-brand-group` wrapper.
- Applied `display: flex` and `align-items: center` to the navbar container in `style.css` to enforce a strictly horizontal, space-between layout.