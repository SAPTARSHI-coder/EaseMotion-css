# Animated Split Screen Layout

## Issue
**Issue #22976**: [React] Build animated split-screen layout component

## Description
This CSS demonstration implements a dynamic, animated split-screen layout using CSS Flexbox. The panels are initially divided 50/50. Hovering over a panel dynamically alters the `flex` property, gracefully expanding the focused panel while shrinking the other.

## Implementation Details
- **HTML (`demo.html`)**: Two `.split-pane` containers inside a `.split-container` flex parent.
- **CSS (`style.css`)**: 
  - `transition: flex 0.6s cubic-bezier(0.25, 1, 0.5, 1);` ensures fluid panel resizing.
  - On hover, child elements (paragraphs and buttons) fade in and slide up smoothly.
  - Image backgrounds with dark overlays enhance contrast for the text.

## Verification
Open `demo.html` in a web browser. Hover your mouse over either side of the screen to observe the smooth expansion and the text reveal animation.
