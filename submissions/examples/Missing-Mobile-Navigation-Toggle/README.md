### Bug Fix: Missing Mobile Navigation Toggle (#3)

**Issue:** While the CSS contained logic for a mobile sidebar menu, the HTML was entirely missing the trigger button. This rendered the documentation unnavigable on viewport sizes under 768px.

**Resolution:** - Injected a `<button class="sidebar-toggle">` element immediately preceding the logo.
- Adjusted CSS media queries to ensure the button is hidden on desktop viewports (`> 768px`) and visible on mobile, while simultaneously collapsing the standard `demo-nav-links` list.