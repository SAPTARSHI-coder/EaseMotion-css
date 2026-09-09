# Dynamic Cookie Banner — Advanced Styling

## Overview

This guide documents advanced styling for the Dynamic Cookie Banner.

The component uses a flexible content and action layout with reusable CSS variables.

The advanced scope focuses on visual hierarchy, responsive composition, and themed controls.

The semantic structure remains independent from consent-storage logic.

## Markup

Use a labeled section with a content region and a dedicated action group.

```html
<section class="cookie-banner cookie-banner--floating" aria-labelledby="cookie-title">
  <div class="cookie-banner__content">
    <p class="cookie-banner__eyebrow">Privacy</p>
    <h2 id="cookie-title">Cookie preferences</h2>
    <p>Choose how optional cookies should be handled.</p>
  </div>
  <div class="cookie-banner__actions">
    <button class="cookie-banner__button cookie-banner__button--secondary" type="button">Decline</button>
    <button class="cookie-banner__button cookie-banner__button--primary" type="button">Accept</button>
  </div>
</section>
```

## Class Naming

`cookie-banner` is the component block.

`cookie-banner__content`, `__actions`, and `__button` are component elements.

`cookie-banner--floating` is an optional layout modifier.

Button color variants use `--primary` and `--secondary` modifiers.

## CSS Variables

Expose surface, text, accent, border, radius, and shadow values as variables.

```css
.cookie-banner {
  --banner-surface: #111827;
  --banner-text: #f8fafc;
  --banner-accent: #5eead4;
  --banner-radius: 1rem;
  --banner-shadow: 0 1rem 3rem rgb(0 0 0 / 16%);
}
```

Theme overrides can be applied to the component without rewriting selectors.

## Advanced Layout

Use flexbox for desktop alignment between content and actions.

Allow the action group to wrap instead of shrinking controls below usable sizes.

A floating modifier can add viewport spacing when the banner is positioned near an edge.

Keep the content width constrained for readable paragraphs.

## Visual Treatment

Use a strong surface contrast for the consent message.

Reserve the accent color for the primary action and focus treatment.

Keep shadows subordinate to the message and controls.

Avoid decorative gradients that reduce text contrast.

## Accessibility

The banner must retain a clear heading and native buttons.

Focus indicators should be visible against both dark and light themes.

Action labels should communicate the result of the interaction.

Do not rely on hover states for essential information.

## Keyboard Interaction

Both consent buttons must remain keyboard reachable.

Use native button elements to preserve expected activation behavior.

Keep focus order aligned with the visual action order.

## Responsive Behavior

Stack content and actions on narrow screens.

Allow buttons to grow to usable widths.

Prevent the banner from creating horizontal overflow.

## Usage

Copy the markup into the page and load the stylesheet.

Use the modifier only when a floating presentation is appropriate.

Connect button actions to the project's consent implementation separately.

## Testing Checklist

- Test desktop and mobile widths.
- Test keyboard navigation.
- Test focus visibility.
- Test long consent copy.
- Test zoomed layouts.
- Test high-contrast conditions.
- Test both action variants.

## Documentation Integration

Link the guide from the documentation index or cheatsheet.

The issue requires placement under `docs/` or `submissions/docs/`.

## Files

`README.md` documents advanced styling.

`demo.html` demonstrates the component.

`style.css` contains the presentation rules.

## Summary

Advanced styling adds a polished consent surface while keeping structure and behavior maintainable.
