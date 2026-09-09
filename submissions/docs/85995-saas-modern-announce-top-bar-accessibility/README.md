# SaaS Modern Announce Top Bar — Accessibility

## Overview

This guide documents an accessible announcement bar for SaaS interfaces.

The component communicates product notices without interrupting the main page.

It supports informative text and an optional dismiss action.

The example uses semantic HTML and native controls.

No framework dependency is required.

## Structure

Use a banner region for an important site-wide announcement.

Keep the message concise and useful.

Use a native button for dismissal.

Give the dismissal control an accessible name.

Do not hide essential information behind an icon.

## Accessibility

The announcement must remain readable at increased zoom.

Text should have sufficient contrast against the bar surface.

The dismiss button needs a visible focus indicator.

Do not rely on animation to communicate the announcement.

Avoid automatic movement that makes text difficult to read.

## Keyboard Navigation

The dismiss button must be reachable with Tab.

Enter or Space activates a native button.

Focus order should follow the visual reading order.

Do not trap keyboard focus inside the announcement.

Keep the control available until the user dismisses the message.

## HTML Example

The demo uses a semantic banner section.

The announcement text is grouped with its supporting action.

The button uses `type="button"` to prevent accidental form submission.

An optional icon is marked decorative when it adds no information.

## Modifier Classes

Use the base announcement class for shared structure.

Use `announce--info` for informational messages.

Use `announce--warning` for important caution messages.

Use `announce--compact` when vertical space is limited.

Keep modifiers presentation-focused.

## Custom Properties

`--announce-accent` controls the accent treatment.

`--announce-surface` controls the background.

`--announce-text` controls primary text.

`--announce-border` controls the component boundary.

`--announce-button` controls the action styling.

## Responsive Behavior

Allow the message to wrap on narrow screens.

Keep the dismiss control usable beside or below the text.

Avoid fixed heights that clip long announcements.

Use flexible gaps instead of absolute positioning.

## Reduced Motion

The component should remain static by default.

Optional entrance transitions should respect reduced-motion preferences.

Never use continuous flashing to attract attention.

## Usage

Copy the semantic structure from `demo.html`.

Replace the sample announcement with current product information.

Choose the modifier that matches the message severity.

Update the CSS variables at the theme level.

Keep announcements short enough to scan quickly.

## Testing

Test the dismissal button with a keyboard.

Check visible focus at every viewport size.

Test long announcement text.

Test browser zoom.

Test reduced-motion preferences.

Verify that the message remains readable without decorative effects.

## Integration

Place the banner before the primary page content when it applies globally.

Do not duplicate the same announcement in multiple regions.

Ensure dismissal does not remove required legal or safety information.

## Files

`README.md` contains the accessibility guide.

`demo.html` contains the standalone example.

`style.css` contains responsive presentation rules.

The component is dependency-free.

## Summary

A SaaS announcement bar should be informative, concise, and easy to dismiss.

Native HTML controls provide reliable keyboard behavior.

Responsive sizing and reduced-motion support keep the pattern usable across devices.
