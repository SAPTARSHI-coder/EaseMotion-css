# Animated Table with Row Entry Stagger

## Issue
**Issue #22980**: [React] Build animated table with row entry stagger animation

## Description
This submission implements a staggered entry animation for table rows. By using a combination of a CSS keyframe animation (`slideUpFade`) and CSS `nth-child` selectors, we achieve a dynamic cascading effect without the need for JavaScript. Each row slides up and fades in with incrementally increasing delay.

## Implementation Details
- **HTML (`demo.html`)**: Defines a semantic table structure with rows containing the `.ease-row-animate` class.
- **CSS (`style.css`)**: 
  - Uses modern UI aesthetics (dark mode, badges, gradients).
  - Defines `@keyframes slideUpFade`.
  - Applies staggered `animation-delay` using `:nth-child` selectors for `.ease-row-animate`.

## Verification
Open `demo.html` in a web browser. Upon loading, the table rows should sequentially fade in and slide up from the bottom.
