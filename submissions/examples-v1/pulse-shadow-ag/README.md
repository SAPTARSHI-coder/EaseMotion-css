# EaseMotion Pulse-Shadow Example

This directory provides a standalone, production-ready example of the "pulse-shadow" animation pattern using EaseMotion-inspired CSS utility classes.

## What is a Pulse Shadow?
Unlike a standard scale pulse (which physically increases the width and height of an element, potentially causing layout shifts), a pulse shadow animates the `box-shadow` property outward while simultaneously fading its opacity to zero. This creates a subtle, ripple-like effect that successfully draws user attention without breaking the surrounding layout.

## Demo Contents
This example demonstrates how to apply the `.ease-pulse-shadow` utility to three common UI patterns:
1. **Notification Bell Indicator:** The classic "unread notifications" red dot.
2. **Primary CTA Button:** Highlighting the primary action (e.g., "Start Free Trial").
3. **Live Status Indicator:** A green dot signifying system health or live status.

## Accessibility (a11y)
The animation strictly respects the `@media (prefers-reduced-motion: reduce)` media query. If a user has indicated they prefer less motion at the OS level, the pulse animation is completely disabled (`animation: none`), leaving the static component perfectly usable.

## Customization
To customize the shadow color for different components, you can either:
1. Override the `box-shadow` rgba values inside the `@keyframes` definition.
2. Use CSS Variables (e.g., `rgba(var(--shadow-color-rgb), 0.6)`) to make the keyframe completely dynamic across different themes.

*Note: This implementation uses pure CSS. No JavaScript is required for the animation to function.*
