# Dynamic Cookie Banner — Accessibility Integration

## Overview

This guide documents accessibility integration for the Dynamic Cookie Banner.

The component uses semantic structure and native buttons for consent actions.

The accessibility scope emphasizes naming, focus, keyboard operation, and responsive behavior.

Consent persistence should be handled separately by the host application.

## Semantic Structure

Use a section with a descriptive heading for the banner.

Give the heading a unique `id` and reference it with `aria-labelledby`.

Group related actions inside a dedicated container.

Use native buttons for actions that change consent state.

## Markup

```html
<section class="cookie-banner" aria-labelledby="cookie-title">
  <div class="cookie-banner__content">
    <h2 id="cookie-title">Cookie preferences</h2>
    <p>Choose whether optional cookies may be used.</p>
  </div>
  <div class="cookie-banner__actions">
    <button type="button">Decline</button>
    <button type="button">Accept</button>
  </div>
</section>
```

## Accessible Naming

The heading provides a clear name for the banner section.

Button labels should describe their outcome.

Avoid ambiguous labels such as “Continue” when the action is consent-related.

Do not rely on icons alone to identify consent actions.

## Keyboard Interaction

Both buttons must be reachable using the Tab key.

Buttons should activate with Enter or Space through native browser behavior.

Keep focus indicators visible.

Do not create custom click targets with generic elements.

## Focus Styling

Use `:focus-visible` for a strong visible focus ring.

Ensure the focus ring contrasts with the banner surface.

Do not remove the browser focus outline without providing an equivalent indicator.

## Responsive Accessibility

Actions should remain usable on small screens.

Stack buttons when the available width becomes constrained.

Preserve readable line lengths for the consent message.

Avoid horizontal scrolling at any viewport width.

## Motion

Decorative transitions should respect `prefers-reduced-motion`.

Consent functionality must not depend on animation.

Avoid moving focus or content unexpectedly when a preference is selected.

## Color and Contrast

Text must remain readable against the banner surface.

Primary and secondary actions should remain distinguishable without color alone.

Focus indicators should remain visible in all supported themes.

## CSS Variables

Expose theme values through custom properties.

```css
.cookie-banner {
  --banner-surface: #111827;
  --banner-text: #f8fafc;
  --banner-accent: #5eead4;
}
```

## Class Naming

Use the `cookie-banner` block and descriptive element names.

Use modifiers only for intentional visual or layout variants.

Keep accessibility-related selectors close to the interactive elements.

## Usage

Copy the semantic structure into the host page.

Load the stylesheet and replace the example message with the site's consent text.

Connect buttons to the application's consent management logic.

Ensure any preference dialog opened by the banner follows the same focus rules.

## Testing Checklist

- Test keyboard-only navigation.
- Test visible focus states.
- Test screen-reader naming.
- Test button labels.
- Test narrow viewports.
- Test browser zoom.
- Test reduced-motion preferences.
- Test contrast.

## Documentation Integration

Place this guide under `submissions/docs/`.

Link it from the documentation index or cheatsheet index.

## Files

`README.md` contains the accessibility guide.

`demo.html` provides the accessible standalone example.

`style.css` contains the responsive presentation rules.

## Summary

The banner can remain visually polished while retaining semantic HTML and predictable keyboard behavior.
