# SaaS Resume Builder

## Issue
**Issue #20892**: Advanced: SaaS Landing — Resume Builder

## Description
A live resume builder mockup featuring two switchable templates ("Minimal" and "Modern") controlled entirely by CSS radio button state. Switching between templates triggers a smooth translate-and-fade animation on the resume preview area, demonstrating instant template switching without JavaScript.

## Implementation Details
- **HTML (`demo.html`)**: Radio inputs govern state, template thumbnail pickers in the sidebar, and two overlaid `.resume` divs in the preview area.
- **CSS (`style.css`)**:
  - Uses `position: absolute; opacity: 0; visibility: hidden` with `pointer-events: none` as the hidden base state.
  - On `:checked`, the selected template transitions to `opacity: 1; transform: translateX(0)` and restores pointer events.
  - Minimal template uses centered typography; Modern template uses a two-column layout with an indigo sidebar.

## Verification
Open `demo.html`. Click "Minimal" and "Modern" thumbnails in the sidebar. The resume card smoothly transitions between a clean single-column view and an indigo-accented two-column layout.
