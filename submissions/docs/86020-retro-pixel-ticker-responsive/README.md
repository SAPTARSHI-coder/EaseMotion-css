# Retro Pixel Ticker Marquee Row — Responsive

## Overview

This guide documents responsive breakpoints for a Retro Pixel Ticker Marquee Row.

The component presents a horizontal stream of short status or announcement items.

Its layout must remain readable when the available width changes.

The example uses plain HTML and CSS.

## Purpose

Use the ticker for non-critical announcements, status updates, or decorative activity.

Do not use continuous motion for information that users must read to complete a task.

Keep each item concise so it remains useful at smaller widths.

## Markup

The outer element uses `.ticker` as the component container.

The scrolling content uses `.ticker__track`.

Individual messages use `.ticker__item`.

A `.ticker__label` can identify the message group.

Use meaningful text rather than images for ticker content.

## Modifier Classes

`.ticker--compact` reduces vertical padding.

`.ticker--stacked` can switch to a wrapped presentation.

`.ticker__item--accent` can emphasize a selected message.

Keep modifiers optional so the base component remains reusable.

## Responsive Breakpoints

Wide layouts can keep the ticker in one horizontal row.

Medium layouts should reduce gaps and text size slightly.

Small layouts should allow items to wrap or switch to a readable static presentation.

Avoid horizontal page overflow at every breakpoint.

Use CSS media queries instead of JavaScript viewport detection.

## Custom Properties

`--ticker-bg` controls the background.

`--ticker-text` controls message text.

`--ticker-gap` controls spacing between items.

`--ticker-border` controls the edge treatment.

`--ticker-radius` controls the corner shape.

## Accessibility

The ticker should not steal keyboard focus.

Provide a meaningful accessible label when the content has a specific purpose.

Do not rely on movement to expose essential information.

Respect reduced-motion preferences.

Ensure text remains readable with zoom and text scaling.

## Motion

If a moving marquee is used, pause or remove motion for reduced-motion users.

Avoid excessively fast movement.

Do not require users to chase moving text to understand the message.

A static fallback is preferable for important announcements.

## Responsive Testing

Test desktop, tablet, and mobile widths.

Test browser zoom at 200 percent.

Test long message strings.

Test short message strings.

Test large text settings and narrow containers.

## Usage

Place the ticker near related status content.

Keep messages short and independently understandable.

Replace demo messages with application-specific content.

Avoid placing primary navigation inside the moving track.

## Testing Checklist

- Check narrow viewport overflow.
- Check readable text at zoom.
- Check reduced-motion behavior.
- Check keyboard focus around the component.
- Check long labels and long messages.
- Check static fallback behavior.

## Summary

Responsive ticker documentation should prioritize readable content over continuous motion.

The component can remain visually expressive while switching to a static or wrapped layout when space is limited.
