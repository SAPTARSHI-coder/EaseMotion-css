# Dynamic Cookie Banner — Basic Usage

## Overview

This guide documents the basic usage of the Dynamic Cookie Banner.

The example presents a clear consent message with primary and secondary actions.

The structure is intentionally small so it can be copied into an existing page.

The banner uses semantic buttons and does not require a JavaScript framework.

## Markup

```html
<section class="cookie-banner" aria-labelledby="cookie-title">
  <div class="cookie-banner__content">
    <h2 id="cookie-title">Cookie preferences</h2>
    <p>We use cookies to improve the experience and understand site usage.</p>
  </div>
  <div class="cookie-banner__actions">
    <button class="cookie-banner__button cookie-banner__button--secondary" type="button">Decline</button>
    <button class="cookie-banner__button cookie-banner__button--primary" type="button">Accept</button>
  </div>
</section>
```

## Class Naming

`cookie-banner` is the component block.

`cookie-banner__content` contains the message.

`cookie-banner__actions` groups available actions.

`cookie-banner__button` is the shared button style.

`cookie-banner__button--primary` and `--secondary` are modifiers.

## CSS Variables

Use variables for spacing, surface, border, accent, and radius.

```css
.cookie-banner {
  --banner-surface: #111827;
  --banner-text: #f8fafc;
  --banner-accent: #5eead4;
  --banner-radius: 1rem;
}
```

Override variables on the component to match the host design.

## Basic Layout

The banner can sit at the bottom of the viewport or inside a page section.

Use a flexible action row so buttons remain usable on smaller screens.

Keep the message width readable instead of stretching long paragraphs across the screen.

## Accessibility

Give the banner a visible heading.

Use native buttons for consent actions.

Make the action labels explicit rather than relying on icons.

Keep sufficient contrast between text, controls, and the surface.

## Keyboard Interaction

Both action buttons must be reachable with the keyboard.

Keep focus indicators visible.

Do not use clickable generic elements in place of buttons.

## Responsive Behavior

Actions should wrap on narrow screens.

The banner should not create horizontal scrolling.

Keep adequate padding around touch targets.

## Usage

Copy the component markup into the page.

Load the stylesheet after the project's base styles.

Connect the buttons to the application's consent state when behavior is added.

Keep the visual component independent from the consent-storage implementation.

## Testing Checklist

- Verify both actions are keyboard accessible.
- Verify visible focus states.
- Test narrow screens.
- Test long consent text.
- Test browser zoom.
- Test high-contrast conditions.

## Documentation Integration

The guide belongs under `submissions/docs/` as requested by the issue.

It can also be linked from the documentation index or cheatsheet.

## Files

`README.md` documents basic usage.

`demo.html` contains the standalone example.

`style.css` contains the visual presentation.

## Summary

The basic banner provides a reusable consent surface with clear actions and semantic HTML.

Application-specific persistence and consent logic can be connected separately.
