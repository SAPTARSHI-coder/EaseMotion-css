# Responsive Avatar Documentation

An in-depth guide for integrating and customizing the **Responsive Avatar** component in EaseMotion CSS.

---

## Overview

The Responsive Avatar is a fluid user profile component built with viewport-relative scaling functions (`clamp()`). It dynamically scales image dimensions, initials typography, and status indicators across mobile, tablet, and desktop viewports while delivering smooth micro-interaction hover lifts (`translateY(-4px)`).

---

## Key Features

- **Fluid Clamp Sizing**: Employs CSS `clamp()` rules for avatar dimensions (`clamp(48px, 10vw, 80px)`), typography, and status badge indicators.
- **Image & Initials Fallbacks**: Out-of-the-box support for image avatars (`.ease-avatar-image`) and text initial placeholders (`.ease-avatar-initials`).
- **Contextual Status Badges**: Integrated presence indicators (`.ease-status-online`, `.ease-status-away`, `.ease-status-busy`) with ambient box-shadow glow.
- **Accessible Design**: Marked with `role="img"`, `aria-label`, and `alt` properties for screen reader accessibility.
- **Reduced Motion Fallback**: Gracefully disables hover lift transforms when `prefers-reduced-motion: reduce` is detected.

---

## File Structure

```text
submissions/docs/responsive-avatar/
├── demo.html     # Live interactive showcase page
├── style.css     # Production CSS stylesheet
└── README.md     # Detailed usage guide & API specification