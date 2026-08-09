# Skew-Active Drawer for SaaS Showcase Layouts

A pure CSS/HTML bottom drawer that leans into a slight skew as it opens —
as if it has real momentum — then snaps upright with a small counter-lean
before settling flat. The trigger button echoes the same lean on
`:active`, tying the "press" and the "open" motions together. Built for
SaaS showcase layouts: onboarding checklists, setup wizards, guided
walkthroughs.

No JavaScript is required. Open/close state is driven entirely by the
**checkbox + `:checked` + general-sibling-selector** pattern: a visually
hidden `<input type="checkbox">` holds the state, and any `<label for="...">`
(the trigger button, the backdrop, the close icon) toggles it.

## Files

- `demo.html` — standalone showcase page: a SaaS onboarding hero with a
  "Start onboarding" trigger that opens a 3-step setup drawer
- `style.css` — the component styles
- `README.md` — this file

## Usage

```html
<link rel="stylesheet" href="style.css" />

<!-- 1. The state-driving checkbox — place once, anywhere before the labels/drawer -->
<input type="checkbox" id="sk-toggle" class="sk-toggle" aria-hidden="true" />

<!-- 2. Any trigger is just a label pointing at the checkbox -->
<label for="sk-toggle" class="sk-trigger">Start onboarding</label>

<!-- 3. Backdrop — also a label, so clicking it closes the drawer -->
<label for="sk-toggle" class="sk-backdrop" aria-hidden="true"></label>

<!-- 4. The drawer itself -->
<aside class="sk-drawer" role="dialog" aria-modal="true" aria-labelledby="sk-drawer-title">
  <div class="sk-drawer__handle" aria-hidden="true"></div>
  <label for="sk-toggle" class="sk-drawer__close" aria-label="Close" tabindex="0">✕</label>
  <h2 id="sk-drawer-title">Get set up in 3 steps</h2>
  <!-- drawer content -->
</aside>
```

**Important:** the checkbox, backdrop, and drawer must all be **siblings at
the same DOM level** (the CSS relies on `~`, the general sibling
combinator) — don't nest the backdrop/drawer inside the page content.

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--sk-accent` | `#4f46e5` | Primary accent color (trigger, step numbers, focus ring) |
| `--sk-open-duration` | `520ms` | Duration of the opening keyframe animation (translate + skew) |
| `--sk-close-duration` | `260ms` | Duration of the plain closing transition |
| `--sk-skew-angle` | `5deg` | How far the drawer leans mid-open, at its peak momentum |
| `--sk-skew-overshoot` | `-1.2deg` | Small counter-lean applied just before the drawer settles upright |
| `--sk-backdrop-duration` | `260ms` | Duration of the backdrop fade |
| `--sk-press-skew` | `-3deg` | How far the trigger button itself leans on `:active` (mouse/touch press) |

## Features

- **Pure CSS state management**: no JavaScript, no `<dialog>` polyfills —
  the checkbox hack drives open/closed state, and works with any number of
  triggers pointing at the same `id`.
- **Momentum-style skew entrance**: the drawer's opening motion is a single
  keyframe animation (`sk-drawer-open`) that combines a vertical slide with
  a skew that builds, overshoots slightly past upright, and then settles —
  evoking real physical momentum rather than a flat linear slide.
  `transform-origin: bottom center` keeps the skew anchored naturally at
  the drawer's base.
- **Matching press feedback**: the trigger button itself skews on
  `:active`, so the "launch" gesture visually rhymes with the drawer's own
  entrance.
- **Calm exit**: closing uses a plain, quick transition back to
  `translateY(100%)` with no skew — the drawer only "leans" on the way in,
  keeping the exit understated.
- **Backdrop + click-outside-to-close**: the backdrop is itself a label, so
  clicking anywhere outside the drawer closes it.
- **Keyboard operable**: the trigger and close control are focusable labels
  (`tabindex="0"` on the close icon), and the checkbox itself is
  tab-reachable.
- **Scroll lock**: while open, the checkbox's `:checked` state also
  constrains the page's scroll via a sibling selector.
- **Fully responsive**: the drawer's max-width and padding scale down for
  mobile, and the skew angle itself is reduced on small screens
  (`--sk-skew-angle: 3deg`) so it stays subtle on narrow viewports.
- **Accessible by default**: uses `role="dialog"`, `aria-modal="true"`, and
  `aria-labelledby` pointing at the drawer heading, and honors
  `prefers-reduced-motion` by disabling the keyframe animation and the
  trigger's press-skew entirely.

## Known limitation

Because this is pure CSS with no JavaScript, the drawer **cannot close on
the Escape key** — CSS has no way to listen for keyboard events beyond
`:focus`/`:checked`. Closing is available via the backdrop click, the close
icon, or toggling the trigger again. If Escape-to-close is a hard
requirement for a given project, a few lines of JavaScript (listening for
`keydown` and un-checking the input) can be layered on top without changing
any of the CSS here.

## Browser support

Uses only standard `transform: skewY()`/`translateY()` and CSS keyframe
animations — no bleeding-edge features. Supported in all browsers released
in the last several years, including older evergreen versions.
