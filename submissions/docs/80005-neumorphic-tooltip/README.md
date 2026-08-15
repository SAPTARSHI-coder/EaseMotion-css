# Neumorphic Tooltip — Usage Guide

## Overview

This guide documents how to use the Neumorphic Tooltip component.

The issue requests documentation under `submissions/docs/`.

The example demonstrates a compact tooltip trigger with a soft raised visual treatment.

The tooltip is shown through CSS hover and focus states.

## Markup

```html
<span class="tooltip">
  <button class="tooltip__trigger" type="button" aria-describedby="tip">?</button>
  <span class="tooltip__content" id="tip" role="tooltip">More information about this setting.</span>
</span>
```

## Class Naming

`tooltip` is the component wrapper.

`tooltip__trigger` identifies the interactive control.

`tooltip__content` contains the explanatory message.

Keep the tooltip identifier unique when multiple instances are used.

## Usage

Wrap the trigger and tooltip content inside the component.

Use a native button when the trigger performs an interaction.

Keep the message concise and relevant to the trigger.

Use `aria-describedby` to associate the trigger with the tooltip text.

## Visual Treatment

The neumorphic appearance uses paired light and dark shadows.

Keep the surface color close to the surrounding page color.

Use a visible border or contrast adjustment when shadows alone are insufficient.

## CSS Variables

```css
.tooltip {
  --tooltip-surface: #e9edf4;
  --tooltip-text: #263247;
  --tooltip-shadow-light: #ffffff;
  --tooltip-shadow-dark: #c5ccd8;
}
```

Override the variables at the component scope.

## Interaction

Show the tooltip when the trigger is hovered or focused.

Keep it visible while the pointer is over the trigger.

Do not require pointer hover as the only way to discover the message.

## Accessibility

The trigger needs an accessible name.

`aria-describedby` connects the trigger to the explanatory content.

Keyboard focus should reveal the tooltip.

Do not place essential information only inside a hover-only tooltip.

## Keyboard Guidance

A native button is focusable by default.

Users can reach the trigger with Tab.

The tooltip should appear when the trigger receives keyboard focus.

## Responsive Behavior

Keep tooltip text short enough to fit narrow screens.

Use a maximum width and allow the text to wrap.

Avoid positioning that causes horizontal page overflow.

## Reduced Motion

If the tooltip fades in, respect `prefers-reduced-motion`.

The message should remain available without animation.

## Testing Checklist

- Test hover behavior.
- Test keyboard focus.
- Test accessible description.
- Test long tooltip text.
- Test narrow screens.
- Test browser zoom.
- Test contrast.

## Documentation Integration

Place this guide under `submissions/docs/` as requested.

Link it from the documentation index when the component is added to the cheatsheet.

## Files

`README.md` contains the usage guide.

`demo.html` provides the standalone example.

`style.css` contains the neumorphic presentation.

## Summary

The tooltip combines a soft neumorphic surface with semantic trigger and description relationships.
