# SaaS Link Shortener & Analytics

## Issue
**Issue #20897**: Advanced: SaaS Landing — Link Shortener & Analytics

## Description
This component provides a sleek demonstration for a Link Shortener SaaS platform. The mockup animates in smoothly upon load, presenting a mock URL input and a shortened URL result box that drops in dynamically. Below it, a pure CSS bar chart visually demonstrates the analytics portion of the platform by growing the chart bars sequentially.

## Implementation Details
- **HTML (`demo.html`)**: Defines the form structure and the chart columns. The chart bars use inline CSS variables (`--target-height`) to dictate their final animation height.
- **CSS (`style.css`)**: 
  - **Component Entrance**: Uses a bouncy `cubic-bezier` scale animation on the main card container.
  - **Result Box Drop**: Uses a delayed translate/opacity keyframe to make the "shortened URL" appear just after the main card loads.
  - **Bar Chart**: Leverages `@keyframes growBar` which animates the `height` property from `0` to the `var(--target-height)` declared in the HTML, generating a realistic chart loading effect entirely without JavaScript.

## Verification
Open `demo.html` in your web browser. Watch the main white card scale in with a bounce. Shortly after, the shortened URL result box will drop in. Finally, the bar chart columns at the bottom will smoothly grow to their respective heights.
