# Notification Dot Component (`ease-notification-dot`)

This submission resolves issue #19896 by providing a highly reusable, pure CSS animated notification dot component.

## Overview
Notification dots (or badges) are essential micro-UI elements used to alert users of new messages, updates, or status changes. This component provides a robust, positioning-agnostic dot that features a subtle, attention-grabbing pulse animation.

## Features
- **Semantic Positioning:** Uses `position: absolute` with `transform: translate(50%, -50%)` to perfectly align the dot to the top-right corner of any relative container (like an icon or avatar), regardless of the container's exact dimensions.
- **Pulsing Animation:** Utilizes a pure CSS `@keyframes` animation that scales up a pseudo-element (`::after`) while fading its opacity to `0`, creating a smooth ripple/pulse effect that draws the eye without being visually overwhelming.
- **Variant Support:** Includes styles for standard dots (empty) and badge dots (containing a number, e.g., '3').
- **Status Colors:** Configurable via simple modifier classes (`.dot-primary`, `.dot-success`, `.dot-danger`, `.dot-warning`).

## Files
- `demo.html`: A demonstration of the dot applied to a mock notification bell icon and a user avatar.
- `style.css`: The structural and animation logic for the notification dot.
