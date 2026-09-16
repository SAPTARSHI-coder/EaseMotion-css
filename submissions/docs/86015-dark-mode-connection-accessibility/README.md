# Dark Mode Connection Status Bar — Accessibility

## Overview

This guide documents accessible usage of the Dark Mode Connection Status Bar.

The component communicates a connection state with text and optional visual decoration.

Its status should remain understandable without color or animation.

The example uses semantic HTML and plain CSS.

## Purpose

Use the status bar to communicate online, reconnecting, or offline states.

Keep the status message short and current.

Do not hide the actual state inside an icon-only treatment.

## Markup

Use a `status` or appropriately labelled container for the connection message.

Give the component a clear accessible label when context is ambiguous.

Use text such as “Connected” or “Reconnecting” in the DOM.

Decorative indicators should be hidden from assistive technology when redundant.

## State Modifiers

`.connection--online` represents a connected state.

`.connection--reconnecting` represents a temporary connection state.

`.connection--offline` represents an unavailable connection.

State classes should change presentation while text communicates meaning.

## Accessibility

Do not rely on green, amber, or red alone to communicate state.

Provide a readable state label for every status.

Use sufficient contrast in dark mode.

Avoid tiny status text that becomes unreadable at zoom.

Keep status changes understandable to screen-reader users.

## Live Updates

If the connection state changes dynamically, consider an appropriate live region.

Use `aria-live` carefully so frequent updates do not interrupt the user.

Prefer polite announcements for routine connection changes.

Do not repeatedly announce unchanged status.

## Keyboard Navigation

The status bar should not receive focus unless it is interactive.

Do not add positive `tabindex` values.

If a retry action is included, use a native button.

Keep the retry action in a logical keyboard order.

## Visual Design

Dark surfaces should maintain readable contrast.

Icons should supplement the text rather than replace it.

Avoid rapidly flashing connection indicators.

Keep borders and labels visible in forced-colors environments where possible.

## Reduced Motion

Connection indicators should have a static fallback.

Respect `prefers-reduced-motion` for pulse or shimmer effects.

Do not use animation to communicate the only state signal.

The connection message must remain clear without motion.

## Responsive Behavior

The status bar should fit narrow screens without clipping text.

Allow long connection messages to wrap.

Keep action controls reachable on mobile.

Test browser zoom and text scaling.

## Usage

Place the status bar where connection information is relevant.

Use concise state labels.

Update the state text whenever the connection changes.

Keep recovery actions separate from decorative status styling.

## Testing Checklist

- Check text contrast.
- Test screen-reader announcements when state changes.
- Test keyboard order around retry actions.
- Test zoom and text scaling.
- Test reduced-motion preferences.
- Test narrow screens.
- Confirm color is not the only state signal.

## Integration

The demo contains the complete semantic structure.

The stylesheet provides the dark presentation and responsive behavior.

A JavaScript connection manager can update the state class and text.

Keep accessibility attributes synchronized with the visible state.

## Summary

An accessible connection status bar communicates state through text first and styling second.

This keeps the component reliable across themes, assistive technologies, and user preferences.
