# Badge Keyboard Focus Styles

Submission for [#59916](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/59916)
("[FEATURE] Add keyboard focus styles for badge components").

## Track

Core & Docs Showcase (`submissions/docs/`) — reference implementation only.
No files under `core/` or `components/` are modified by this submission.

## What

`.ease-badge` (and `.em-badge`) components currently have no visible
keyboard focus state when used as interactive elements (buttons or
links), making keyboard navigation through badges inaccessible —
there's no way to tell which badge is currently focused when tabbing.

## Fix

Add a `:focus-visible` outline, matching the CSS provided in the issue:

```css
.ease-badge:focus-visible,
.em-badge:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}
```

`currentColor` is used so the outline automatically matches each
badge variant's text color (success/danger/info/warning) without
needing per-variant overrides.

An additional small addition (not in the original issue snippet, but
included here for completeness) suppresses the outline for
mouse/touch clicks, since `:focus-visible` already isolates the
keyboard-only case:

```css
.ease-badge:focus:not(:focus-visible),
.em-badge:focus:not(:focus-visible) {
  outline: none;
}
```

Maintainer may drop this second block if the base badge styles
already handle default focus suppression elsewhere.

## Files

- `demo.html` — standalone page with four interactive badges
  (button and link variants) to tab through
- `style.css` — includes a minimal standalone reimplementation of
  `.ease-badge` base styles (since `core/`/`components/` can't be
  imported directly per the contribution guide) plus the actual
  focus-visible fix, clearly separated and labeled
- `README.md` — this file

## How to verify

1. Open `demo.html` in a browser.
2. Click anywhere on the page to ensure no element has focus.
3. Press `Tab` repeatedly — each badge should show a colored outline
   matching its variant as it receives focus.
4. Click a badge with the mouse — no outline should appear (confirms
   `:focus-visible` is correctly distinguishing keyboard vs. pointer
   focus).

## Why it fits EaseMotion CSS

Improves accessibility for keyboard users without altering existing
badge visuals, colors, or animations — purely additive, consistent
with the issue's stated goal.