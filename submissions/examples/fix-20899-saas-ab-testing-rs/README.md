# SaaS A/B Testing Platform

## Issue
**Issue #20899**: Advanced: SaaS Landing — A/B Testing Platform

## Description
This component provides a compelling interactive demonstration for an A/B Testing SaaS. By clicking a toggle switch, the user can seamlessly transition a mocked webpage hero section from "Variant A" (Control) to "Variant B" (Test). The transition highlights the platform's ability to swap layouts and measure differing conversion rates.

## Implementation Details
- **HTML (`demo.html`)**: Features a toggle switch controlling a hidden checkbox, and a mockup frame containing two distinct layout structures.
- **CSS (`style.css`)**: 
  - **CSS-Only State**: Leverages the `:checked` pseudo-class on the hidden checkbox.
  - **Transitions**: When toggled, `.layout-a` fades and slides left (`translateX(-50px)`), while `.layout-b` fades and slides into view from the right.
  - Performance metric badges in the corner also update simultaneously using opacity and visibility toggles.

## Verification
Open `demo.html` in your browser. Note the default blue "Variant A" layout. Click the toggle switch in the center. The layout will smoothly transition to the green "Variant B" layout, and the conversion metric in the bottom right corner will update accordingly.
