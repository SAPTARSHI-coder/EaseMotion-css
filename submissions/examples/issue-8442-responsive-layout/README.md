# Issue 8442: Responsive layout below 768px

This submission provides a fix for Issue 8442, where layout breaks on screens under 768px.

**What does this do?**
It adds a mobile-first media query to switch flex containers to column layout and adjust spacing.

**How is it used?**
The `.mobile-layout-fix` class (which can be incorporated into core layout utilities) ensures elements stack vertically on small screens.

**Why is it useful?**
It ensures EaseMotion CSS components remain fully readable and interactive on mobile devices, preventing horizontal overflow.
