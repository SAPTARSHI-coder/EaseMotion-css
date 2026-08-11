# ease-page-transition-slide

## Issue
**Issue #20550**: Animation: ease-page-transition-slide — page slides left on navigation

## Bug
No CSS utility existed for sliding page transitions. Navigation between routes caused instant content replacement with no animation, breaking the sense of spatial context for the user.

## Fix
Implemented a slide-left/slide-right page transition system using CSS `@keyframes`. The fix maps directly to the View Transitions API pattern where:

- `::view-transition-old(root)` → `slideOutLeft` — current page exits to the left
- `::view-transition-new(root)` → `slideInRight` — incoming page enters from the right

## CSS Classes Provided
| Class | Effect |
|---|---|
| `.slide-out-left` | Current page exits left (0 → -100%) |
| `.slide-in-right` | New page enters from right (100% → 0) |
| `.slide-out-right` | Reverse: page exits right |
| `.slide-in-from-left` | Reverse: page enters from left |

## Why It Works
The `overflow: hidden` on the viewport container clips both pages as they move. Using `position: absolute` on page containers and `translateX` keyframes creates a clean, hardware-accelerated sliding effect with no layout reflow.

## Verification
Open `demo.html`. Click "Navigate → About" to see the home page slide left as the about page slides in from the right. Click "← Back to Home" for the reverse transition.
