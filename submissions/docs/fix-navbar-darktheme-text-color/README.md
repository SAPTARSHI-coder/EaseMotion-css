# Fix: Navbar Dark Theme Text Color

Resolves a theme toggling issue in `navbar.css` where manual dark theme triggers (`[data-theme="dark"]`) fail to update navbar link colors, leaving them unreadable.

## What does this do?
- **Manual Theme Selector Support:** Extends text color styles to target `[data-theme="dark"]` explicit overrides in addition to system-preferred rules.