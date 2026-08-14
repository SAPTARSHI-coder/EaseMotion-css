# Minimalist Modal — Quickstart

## Overview
This quickstart introduces a lightweight minimalist modal pattern.
The component focuses on clear content hierarchy and simple controls.

## Purpose
Use a modal for focused tasks that need temporary attention.
Keep the content short and action-oriented.
Do not use a modal for information that belongs naturally on the page.

## Markup
Use a semantic dialog element where browser support permits.
Give the dialog a descriptive heading.
Use native buttons for close and action controls.

## Basic Usage
Copy the demo structure into the target page.
Connect the opening control to the dialog behavior used by the application.
Keep the styling independent from application state logic.

## Visual Design
The minimalist style uses restrained borders, spacing, and typography.
Avoid unnecessary decoration around the main task.
Keep primary and secondary actions visually distinct.

## Accessibility
A modal must have a meaningful accessible name.
Focus should move into the modal when it opens.
Focus should return to the trigger when it closes.
Users must have a clear way to dismiss the dialog.

## Keyboard
Escape should close the modal when appropriate.
Tab should move through available controls in a logical order.
Do not allow focus to disappear behind the overlay.

## Responsive Behavior
The dialog should fit narrow screens with safe margins.
Content should scroll inside the modal when necessary.
Avoid fixed heights that clip important content.

## Reduced Motion
Respect reduced-motion preferences for opening transitions.
The modal must remain usable without animation.

## Customization
Use CSS variables for surface, border, radius, spacing, and shadow.
Override tokens from a local theme wrapper.

## Testing
Test keyboard-only use.
Test Escape dismissal.
Test focus return.
Test narrow viewport widths.
Test long modal content.
Test browser zoom.

## Browser Support
The example uses standard HTML and CSS.
JavaScript behavior should be supplied by the host application when needed.

## Files
`README.md` contains this quickstart.
`demo.html` contains the standalone modal example.
`style.css` contains the presentation rules.

## Summary
The minimalist modal keeps temporary tasks focused and understandable.
Preserve native semantics while adding application-specific behavior.
Use the supplied demo as the starting point for integration.
