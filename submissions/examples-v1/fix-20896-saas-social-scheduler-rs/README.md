# SaaS Social Media Scheduler

## Issue
**Issue #20896**: Advanced: SaaS Landing — Social Media Scheduler

## Description
This submission implements a content composer and social preview mockup intended for a Social Media Scheduler SaaS landing page. Utilizing pure CSS, users can swap between Twitter/X and LinkedIn post formats via animated tabs. The selected social platform card smoothly scales and fades into focus, demonstrating layout adaptation.

## Implementation Details
- **HTML (`demo.html`)**: Implements radio button tabs, a post composer card, and dual preview cards representing Twitter/X and LinkedIn layouts.
- **CSS (`style.css`)**:
  - Employs hidden `<input type="radio">` tags for state control.
  - Leverages the general sibling selector (`~`) to toggle preview card active states.
  - Switches include transitions using `transform` scale/translation and `opacity` for a premium feel.

## Verification
Open `demo.html` in a web browser. Click the tabs at the top of the card ("Twitter / X" and "LinkedIn"). The corresponding social card mockup below will reveal itself with a smooth fade-and-rise transition.
