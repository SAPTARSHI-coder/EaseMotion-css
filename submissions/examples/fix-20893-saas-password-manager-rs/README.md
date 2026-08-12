# SaaS Password Manager

## Issue
**Issue #20893**: Advanced: SaaS Landing — Password Manager

## Description
This submission builds a sleek password manager credential mockup. It includes a functional, pure CSS "eye" toggle (using the checkbox hack) to switch between hidden mask dots and the raw password text string. Below the credential line, an animated password strength indicator bar transitions values upon container load.

## Implementation Details
- **HTML (`demo.html`)**: Incorporates standard credential structure with container dots, plain password text, and toggle button connected to a hidden checkbox.
- **CSS (`style.css`)**:
  - Toggles visibility states for `.password-dots-wrapper` and `.password-text` using the `:checked` status.
  - Changes the status icons (eye open vs closed monkey emoji).
  - Triggers a keyframe fill animation for the password strength meter bar (`fillMeter`) after a brief delay.

## Verification
Open `demo.html` in a web browser. Watch the green password strength bar load to 85% dynamically. Click the eye icon next to the password dots to view the actual string value. Click it again to hide it.
