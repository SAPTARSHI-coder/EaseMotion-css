# Brutalism Cookie Consent Banner — Quickstart

## Overview

This guide documents a bold cookie-consent banner using a CSS-first layout.

The pattern keeps the consent message and actions explicit and keyboard reachable.

## Markup

```html
<section class="cookie-banner" aria-labelledby="cookie-title">
  <h2 id="cookie-title">Cookie preferences</h2>
  <p>Choose whether optional cookies may be used.</p>
  <div class="cookie-banner__actions">
    <button type="button">Accept</button>
    <button type="button">Decline</button>
  </div>
</section>
```

## Classes

`cookie-banner` is the component block.

`cookie-banner__actions` groups the decision controls.

Use modifiers for compact or high-contrast variants.

## Custom Properties

```css
.cookie-banner {
  --banner-surface: #fff36a;
  --banner-text: #111111;
  --banner-border: #111111;
  --banner-radius: 0;
}
```

Theme values can be overridden without changing markup.

## Accessibility

Use a real heading and concise explanatory text.

Use native buttons for consent actions.

Keep focus visible and preserve a logical action order.

Do not use color as the only indicator of the selected decision.

## Responsive Behavior

Allow the banner to wrap naturally on narrow screens.

Stack actions when horizontal space is limited.

Avoid fixed heights that clip long consent text.

## Reduced Motion

Consent decisions must not depend on animated effects.

Disable decorative transitions under `prefers-reduced-motion`.

## Testing

Test keyboard focus, zoom, narrow widths, contrast, and long text.

Verify both actions remain visible and operable.

## Files

`README.md` documents the quickstart.

`demo.html` is the standalone example.

`style.css` contains the responsive brutalist styling.
