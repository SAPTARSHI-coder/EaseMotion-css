# Animated Tooltip & Popover

1. What does this do? Provides a pure-CSS animated tooltip with 4 position variants (top, right, bottom, left) and a checkbox-based popover variant with a close button.
2. How is it used? Wrap a trigger element in `.tooltip-trigger` and add a `.tooltip-box` child with a position class (`.top`, `.right`, `.bottom`, `.left`). For the popover, use `.popover-wrapper` with a hidden checkbox and label to toggle `.popover-box`.
3. Why is it useful? Tooltips and popovers are essential UI patterns for hints, descriptions, and contextual information. This component follows EaseMotion CSS's zero-JavaScript philosophy, with smooth cubic-bezier animations, arrow indicators, reduced-motion support, and dark mode compatibility.
