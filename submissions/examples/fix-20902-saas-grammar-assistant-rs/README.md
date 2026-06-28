# SaaS Grammar & Writing Assistant

## Issue
**Issue #20902**: Advanced: SaaS Landing — Grammar & Writing Assistant

## Description
This submission features a mock rich-text editor interface designed for a Grammar & Writing Assistant SaaS landing page. It showcases an interactive grammatical error state. The erroneous text features a wavy red underline implemented purely via SVG-in-CSS backgrounds. Hovering over the error reveals a beautifully animated tooltip offering the correction.

## Implementation Details
- **HTML (`demo.html`)**: Layout includes the editor toolbar (with a mock score badge) and the editor body containing the error and nested tooltip structure.
- **CSS (`style.css`)**: 
  - **Wavy Underline**: Utilizes an inline data-URI SVG background on the `.grammar-error` class, set to `repeat-x` along the bottom, creating a robust cross-browser squiggly line without using borders.
  - **Tooltip Popover**: Uses absolute positioning combined with `opacity`, `visibility`, and `transform` properties. When the parent error text is hovered, the tooltip scales up and slides in using a bouncy `cubic-bezier`.

## Verification
Open `demo.html` in your web browser. Hover your mouse over the red squiggly underlined text ("There effort"). The correction tooltip will spring into view. Move your mouse away, and the tooltip will seamlessly animate out.
