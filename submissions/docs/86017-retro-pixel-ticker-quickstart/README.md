# Retro Pixel Ticker Marquee Row — Quickstart

## Overview

This quickstart shows how to add a Retro Pixel Ticker Marquee Row to a page.

The component uses semantic HTML and a small CSS surface.

It is suitable for short status messages and non-critical announcements.

No framework or JavaScript dependency is required.

## Step 1 — Add the Container

Create an element with the `.ticker` class.

Give the component an accessible label when its purpose is not obvious.

Keep the component near related status content.

## Step 2 — Add the Track

Place a `.ticker__track` inside the ticker.

The track groups all message items.

Use a consistent structure for every item.

## Step 3 — Add Items

Create one `.ticker__item` for each short message.

Keep text concise and independently understandable.

Avoid placing primary actions inside a moving track.

## Modifier Classes

`.ticker--compact` can reduce vertical spacing.

`.ticker--static` can present the content without movement.

`.ticker__item--accent` can emphasize one item.

Use modifiers only when the change has a clear design purpose.

## Custom Properties

`--ticker-bg` controls the item surface.

`--ticker-text` controls item text.

`--ticker-border` controls the border.

`--ticker-gap` controls spacing.

`--ticker-radius` controls corner rounding.

## Accessibility

Do not make the ticker itself a keyboard target unless it is interactive.

Keep important information available outside moving content.

Maintain strong text contrast.

Respect reduced-motion preferences.

Avoid rapid flashing or distracting effects.

## Responsive Usage

The ticker should fit inside its parent container.

Allow items to wrap on narrow screens.

Avoid fixed widths that cause page-level overflow.

Test the component at mobile, tablet, and desktop widths.

## Motion Guidance

Motion is optional and should not be required for comprehension.

Provide a static presentation for users who prefer reduced motion.

Keep movement slow enough to read.

Do not use continuous motion for critical instructions.

## Integration

Copy the markup from `demo.html`.

Load `style.css` after the page's base styles.

Replace the example messages with real content.

Adjust custom properties at the component or theme scope.

## Testing Checklist

- Confirm the ticker has an accessible purpose.
- Check text contrast.
- Check long messages.
- Check small screens.
- Check browser zoom.
- Check reduced-motion behavior.
- Check that important information has a static alternative.

## Files

`README.md` contains this implementation guide.

`demo.html` provides the complete example.

`style.css` contains responsive component styling.

The three files can be reviewed independently.

## Summary

The quickstart pattern keeps the ticker simple and reusable.

Start with semantic content, then apply the visual treatment through CSS.
