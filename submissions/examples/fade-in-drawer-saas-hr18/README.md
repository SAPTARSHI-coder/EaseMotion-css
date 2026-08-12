# Fade-In Drawer for SaaS Showcase Layouts

A pure CSS/HTML side panel where **fade is the primary motion** — the
drawer eases into view with only a small horizontal drift (not a full
slide), and its contents fade in one after another in a gentle stagger.
Built for SaaS showcase layouts: activity feeds, notification panels,
recent-changes logs.

No JavaScript is required. Open/close state is driven entirely by the
**checkbox + `:checked` + general-sibling-selector** pattern: a visually
hidden `<input type="checkbox">` holds the state, and any `<label for="...">`
(the trigger button, the backdrop, the close icon) toggles it.

## Files

- `demo.html` — standalone showcase page: a SaaS dashboard hero with a
  "View activity" trigger that opens a 5-item activity feed drawer
- `style.css` — the component styles
- `README.md` — this file

## Usage

```html
<link rel="stylesheet" href="style.css" />

<!-- 1. The state-driving checkbox — place once, anywhere before the labels/drawer -->
<input type="checkbox" id="fi-toggle" class="fi-toggle" aria-hidden="true" />

<!-- 2. Any trigger is just a label pointing at the checkbox -->
<label for="fi-toggle" class="fi-trigger">View activity</label>

<!-- 3. Backdrop — also a label, so clicking it closes the drawer -->
<label for="fi-toggle" class="fi-backdrop" aria-hidden="true"></label>

<!-- 4. The drawer itself -->
<aside class="fi-drawer" role="dialog" aria-modal="true" aria-labelledby="fi-drawer-title">
  <label for="fi-toggle" class="fi-drawer__close" aria-label="Close" tabindex="0">✕</label>
  <h2 id="fi-drawer-title">Recent activity</h2>

  <!-- Give each item its own stagger index -->
  <ul class="fi-item-list">
    <li class="fi-item" style="--fi-item-index: 0;">…</li>
    <li class="fi-item" style="--fi-item-index: 1;">…</li>
    <li class="fi-item" style="--fi-item-index: 2;">…</li>
  </ul>
</aside>
```

**Important:** the checkbox, backdrop, and drawer must all be **siblings at
the same DOM level** (the CSS relies on `~`, the general sibling
combinator) — don't nest the backdrop/drawer inside the page content.

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--fi-accent` | `#4f46e5` | Primary accent color (trigger button, focus ring) |
| `--fi-panel-duration` | `380ms` | Duration of the drawer's fade/drift transition |
| `--fi-panel-ease` | `cubic-bezier(0.22, 1, 0.36, 1)` | Easing curve for the panel entrance |
| `--fi-panel-shift` | `18px` | Horizontal drift distance accompanying the fade (deliberately small) |
| `--fi-backdrop-duration` | `260ms` | Duration of the backdrop fade |
| `--fi-item-duration` | `320ms` | Duration of each list item's individual fade-in |
| `--fi-item-stagger` | `60ms` | Delay step between successive items (multiplied by `--fi-item-index`) |
| `--fi-item-index` | *(set per item)* | The item's position in the stagger sequence — set inline on each `.fi-item` |

## Features

- **Pure CSS state management**: no JavaScript, no `<dialog>` polyfills —
  the checkbox hack drives open/closed state, and works with any number of
  triggers pointing at the same `id`.
- **Fade-first motion**: unlike a typical slide-in drawer, opacity is the
  dominant transition here — the panel only drifts a small, fixed distance
  (`--fi-panel-shift`), giving it a softer, quieter entrance suited to
  secondary/utility panels like notifications.
- **Staggered content fade-in**: each `.fi-item` fades and lifts in
  slightly after the panel itself, using a `transition-delay` computed from
  `--fi-item-index * --fi-item-stagger` — no JavaScript loop needed, just
  one inline custom property per item.
- **Backdrop + click-outside-to-close**: the backdrop is itself a label, so
  clicking anywhere outside the drawer closes it.
- **Keyboard operable**: the trigger and close control are focusable labels
  (`tabindex="0"` on the close icon), and the checkbox itself is
  tab-reachable.
- **Scroll lock**: while open, the checkbox's `:checked` state also
  constrains the page's scroll via a sibling selector.
- **Fully responsive**: the drawer's width is clamped with `min()` against
  the viewport and expands to full-width with no visible border on screens
  under 480px.
- **Accessible by default**: uses `role="dialog"`, `aria-modal="true"`, and
  `aria-labelledby` pointing at the drawer heading, and honors
  `prefers-reduced-motion` by removing the horizontal drift and collapsing
  all stagger delays to zero.

## Known limitation

Because this is pure CSS with no JavaScript, the drawer **cannot close on
the Escape key** — CSS has no way to listen for keyboard events beyond
`:focus`/`:checked`. Closing is available via the backdrop click, the close
icon, or toggling the trigger again. If Escape-to-close is a hard
requirement for a given project, a few lines of JavaScript (listening for
`keydown` and un-checking the input) can be layered on top without changing
any of the CSS here.

## Browser support

Uses only standard `opacity`/`transform` transitions and CSS custom
properties for the stagger math — no bleeding-edge features. Supported in
all browsers released in the last several years, including older evergreen
versions.
