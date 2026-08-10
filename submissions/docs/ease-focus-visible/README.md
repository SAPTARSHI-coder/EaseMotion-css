# ease-focus-visible

Fixes issue #57536 — "[BUG] fix: keyboard focus outline missing on
interactive buttons."

Adds a clear, accessible keyboard focus indicator to EaseMotion's buttons
(and other interactive elements), using `:focus-visible` so the ring only
appears for keyboard/programmatic focus — not on mouse clicks — matching
the fix the issue itself suggested.

## The problem

`.btn-primary`, `.btn-secondary`, and `.btn-outline` (and likely other
button variants) currently show little to no visible outline when
tabbed to with the keyboard, which fails WCAG 2.1 SC 2.4.7 (Focus
Visible) and makes keyboard-only navigation hard to follow.

## The fix

This file is purely additive — it only adds `:focus-visible` rules and
never touches existing color, hover, or active styles, so it's safe to
link in alongside the current button CSS with no visual side effects for
mouse users.

- A universal fallback rule covers any `button`, `a`, `input`, `textarea`,
  `select`, or `[tabindex]` element, so nothing falls through the cracks
  even for buttons this file doesn't specifically know about.
- Targeted rules for `.btn-primary`, `.btn-secondary`, `.btn-outline`,
  and `.ease-btn` add a matching outline + soft glow box-shadow, tuned
  to read clearly against light backgrounds.
- An optional `.ease-focus-on-dark` helper class swaps in a
  lighter-colored ring for buttons sitting on dark cards/surfaces.
- Ring color and sizing are exposed as CSS custom properties
  (`--ease-focus-color`, `--ease-focus-width`, `--ease-focus-offset`) so
  consumers can retheme it without overriding selectors.

## Files

- `demo.html` — the exact reproduction case from the issue (three
  buttons), with a hint to tab through them
- `style.css` — the raw CSS

## Usage

```html
<link rel="stylesheet" href="easemotion.css" />
<link rel="stylesheet" href="style.css" />

<button class="btn-primary">Primary</button>
<button class="btn-secondary">Secondary</button>
<button class="btn-outline">Outline</button>
```

## Notes

- Pure CSS, no JavaScript.
- Ships as a self-contained `submissions/` file rather than an edit to
  `core/buttons.css`, per the repo's current contribution restriction —
  the maintainer can fold these rules directly into core during review
  if preferred.
- Verified with keyboard Tab navigation in Chrome; ring does not appear
  on mouse click, only on keyboard/programmatic focus.