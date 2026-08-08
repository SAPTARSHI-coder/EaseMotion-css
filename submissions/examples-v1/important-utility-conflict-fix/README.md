# Fix: Conflicting !important usage across utility classes and component styles

Resolves #30483

## The Problem

Both utility classes (`.u-hidden`, `.u-text-center`, etc.) and component
styles (`.ease-card`, `.ease-alert`, etc.) used `!important` on
overlapping properties such as `display` and `text-align`. Two
`!important` declarations of equal specificity resolve by source order —
so depending on how stylesheets were concatenated or merged across
branches, a utility class could silently fail to override a component.
This defeats the entire purpose of a utility class, which is meant to
win unconditionally.

## The Fix

**CSS Cascade Layers (`@layer`) replace `!important` as the override
mechanism.** Layers are declared once, in explicit priority order:

```css
@layer base, components, utilities;
```

Any rule inside a later-declared layer beats any rule inside an earlier
layer — regardless of selector specificity or `!important` — as long as
both rules live inside a layer. This makes the override relationship
deterministic and removes the need for `!important` as a defensive
mechanism in component styles entirely.

Specifically:
- **`base` layer** — resets, custom properties, page-level styles
- **`components` layer** — `.ease-card`, `.ease-alert`, `.ease-btn`, etc.,
  with `!important` removed entirely; components no longer need to
  "defend" their styles since the layer order already guarantees
  utilities win
- **`utilities` layer** — `.u-text-center`, `.u-text-dim`, etc., declared
  last so they always win against component styles

`!important` is retained in exactly one place — `.u-hidden` — as a
documented, intentional fallback for edge cases involving unlayered
third-party CSS, not as the primary override mechanism.

## Files

| File | Purpose |
|---|---|
| `demo.html` | A card and alert component, with buttons to toggle utility classes on top of them |
| `style.css` | The actual fix — `@layer` structure replacing `!important` for utility/component precedence |
| `script.js` | Toggles `.u-text-center` / `.u-hidden` and demonstrates the alert's internal dismiss state, logging what happened |

## How to Test

1. Open `demo.html` in a browser.
2. Click **Toggle .u-text-center** — confirm the card's text centers
   correctly, overriding its own component-level `text-align: left`.
3. Click **Toggle .u-hidden** — confirm the card hides/shows correctly.
4. Click the **×** on the alert — confirm it dismisses via its own
   internal `.is-dismissed` state without any interference from the
   utilities layer.
5. Open devtools and inspect computed styles to confirm utility rules
   are winning via layer order, not via stacked `!important` declarations.

## Browser Support Note

`@layer` is supported in all modern evergreen browsers (Chrome 99+,
Firefox 97+, Safari 15.4+). For projects needing to support older
browsers, the existing `!important` fallback on `.u-hidden` is left in
place as a safety net, but no new `!important` declarations should be
added to component styles going forward — new conflicts should be
resolved by layer placement instead.