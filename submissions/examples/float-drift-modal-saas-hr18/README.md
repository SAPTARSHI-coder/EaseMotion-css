# Float-Drift Modal for SaaS Showcase Layouts

A pure CSS/HTML modal that drifts in from an offset position with a soft
blur and slight tilt, settles into place, then gently bobs in an idle
float — like it's hovering just above the page. Built for SaaS showcase
layouts: feature announcements, "what's new" spotlights, upgrade prompts.

No JavaScript is required. Open/close state is driven entirely by the
**checkbox + `:checked` + general-sibling-selector** pattern: a visually
hidden `<input type="checkbox">` holds the state, and any `<label for="...">`
(the trigger button, the backdrop, the close icon) toggles it.

## Files

- `demo.html` — standalone showcase page: a SaaS feature page with a
  "See it in action" trigger that opens a product-announcement modal
- `style.css` — the component styles
- `README.md` — this file

## Usage

```html
<link rel="stylesheet" href="style.css" />

<!-- 1. The state-driving checkbox — place once, anywhere before the labels/modal -->
<input type="checkbox" id="fd-toggle" class="fd-toggle" aria-hidden="true" />

<!-- 2. Any trigger is just a label pointing at the checkbox -->
<label for="fd-toggle" class="fd-trigger">See it in action</label>

<!-- 3. Backdrop — also a label, so clicking the dimmed area closes the modal -->
<label for="fd-toggle" class="fd-backdrop" aria-hidden="true"></label>

<!-- 4. The modal itself — a SIBLING of the backdrop, not nested inside it,
        so clicking the modal never also triggers the backdrop's close -->
<div class="fd-modal" role="dialog" aria-modal="true" aria-labelledby="fd-modal-title">
  <label for="fd-toggle" class="fd-modal__close" aria-label="Close" tabindex="0">✕</label>
  <h2 id="fd-modal-title">Automations, reimagined</h2>
  <!-- modal content -->
</div>
```

**Important:** the checkbox, backdrop, and modal must all be **siblings at
the same DOM level** (the CSS relies on `~`, the general sibling
combinator). The modal is fixed-positioned and self-centers with its own
`top: 50%; left: 50%` + transform — it is deliberately *not* nested inside
the backdrop, so a click landing on the modal's surface never falls through
to the backdrop label underneath it.

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--fd-accent` | `#4f46e5` | Primary accent color (trigger, CTA button, focus ring) |
| `--fd-accent-hover` | `#4338ca` | Accent color on trigger hover |
| `--fd-enter-duration` | `620ms` | Duration of the drift-in entrance |
| `--fd-enter-ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Smooth-deceleration easing for the entrance |
| `--fd-backdrop-duration` | `280ms` | Duration of the backdrop fade |
| `--fd-drift-x` | `-26px` | Horizontal offset the modal drifts in from |
| `--fd-drift-y` | `34px` | Vertical offset the modal drifts in from |
| `--fd-drift-rotate` | `-2.5deg` | Slight rotation applied during the entrance |
| `--fd-float-duration` | `4.5s` | Period of the idle bobbing loop once settled |
| `--fd-float-distance` | `6px` | How far the modal bobs up/down while idle |

## Features

- **Pure CSS state management**: no JavaScript, no `<dialog>` polyfills —
  the checkbox hack drives open/closed state, and works with any number of
  triggers pointing at the same `id`.
- **Drift-in entrance**: the modal enters from an off-center offset with a
  soft blur-to-sharp focus pull and a slight rotation that settles to
  upright — a softer, more organic alternative to a hard pop-in or a
  straight slide.
- **Idle float loop**: once settled, the modal keeps a slow, subtle
  vertical bob (`fd-idle-float`), reinforcing the "floating" feel without
  being distracting.
- **Backdrop + click-outside-to-close**: the backdrop is itself a label, so
  clicking anywhere in the dimmed area closes the modal — no extra markup
  or scripting needed. Because the modal is a sibling (not a child) of the
  backdrop, clicks on the modal's content never accidentally close it.
- **Keyboard operable**: the trigger and close control are focusable labels
  (`tabindex="0"` on the close icon), and the checkbox itself is
  tab-reachable, so the modal can be opened and closed with Space/Enter.
- **Scroll lock**: while open, the checkbox's `:checked` state also
  constrains the page's scroll via a sibling selector.
- **Fully responsive**: the modal's width is clamped with `min()` against
  the viewport, and the drift offset shrinks on small screens so the
  entrance never overshoots off-screen.
- **Accessible by default**: uses `role="dialog"`, `aria-modal="true"`, and
  `aria-labelledby` pointing at the modal heading, and honors
  `prefers-reduced-motion` by disabling the idle float and collapsing the
  entrance transition to near-instant.

## Known limitation

Because this is pure CSS with no JavaScript, the modal **cannot close on
the Escape key** — CSS has no way to listen for keyboard events beyond
`:focus`/`:checked`. Closing is available via the backdrop click, the close
icon, or toggling the trigger again. If Escape-to-close is a hard
requirement for a given project, a few lines of JavaScript (listening for
`keydown` and un-checking the input) can be layered on top without changing
any of the CSS here.

## Browser support

Uses `backdrop-filter` and `filter: blur()`, both supported in all current
evergreen browsers (Chrome/Edge 76+, Firefox 103+, Safari 9+/6+
respectively). On browsers without `backdrop-filter` support, the backdrop
still darkens correctly; it just won't blur the page content behind it.
