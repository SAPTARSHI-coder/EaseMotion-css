# Copy Class Name Button (`copy-class-name-btn-hr18`)

A small copy button for the class names shown in EaseMotion's animation demo
cards, built for issue
[#48321](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/48321).

## A note on scope and overlap

This issue targets the "Motion Library" demo cards on EaseMotion's own
[interactive demo page](https://saptarshi-coder.github.io/EaseMotion-css/demo.html)
— content that lives outside `submissions/`, so this can't literally patch
those cards in place. Instead, this submission reproduces that card pattern
(replayable glyph + class-name label) as a self-contained reference so the
copy-button behavior can be lifted directly into the real gallery.

It's also a close cousin of **`copy-code-btn-hr18`**, submitted separately
for issue #48659 — that component copies a whole multi-line code block; this
one is deliberately scoped down to copying a single short class-name string
and shows the exact **"Class name copied!"** success message the issue
specifies, rather than reusing the other component's generic "Copied!"
label. If the maintainer would rather these be consolidated into one
component, that's an easy follow-up — flagged in the PR notes.

## What it does

Each demo card shows a small animation-replay glyph, the animation's class
name, and a copy icon button right next to it. Clicking the copy button
copies that exact class name (e.g. `ease-fade-in`) to the clipboard, swaps
the icon to a checkmark briefly, and shows a "Class name copied!" message
under the card.

## Installation

Nothing to install — `demo.html` is self-contained and opens directly in a
browser (double-click the file). It links a single local `style.css`; no
build step, package manager, or external CDN.

## Usage

Wrap a class-name `<code>` element and a copy button in the component
markup:

```html
<span class="ccn-tag-hr18">
  <code>ease-fade-in</code>
  <button type="button" class="ease-copy-class-btn-hr18" data-class-name="ease-fade-in" aria-label="Copy class name">
    <svg class="ccn-icon-copy-hr18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"></rect><path d="M5 15V5a2 2 0 0 1 2-2h10"></path></svg>
    <svg class="ccn-icon-check-hr18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
  </button>
</span>
<span class="ccn-toast-hr18">Class name copied!</span>
```

The included script finds every `.ease-copy-class-btn-hr18` on the page
automatically and reads the string to copy from its `data-class-name`
attribute — no per-button JavaScript wiring required. The demo applies this
to six real EaseMotion class names (`ease-fade-in`, `ease-slide-up`,
`ease-hover-grow`, `ease-bounce`, `ease-rotate`, `ease-pulse`).

## Accessibility notes

- The button always has a real `aria-label="Copy class name"`, so it reads
  correctly for screen readers regardless of its icon state.
- Each card's "Class name copied!" message is a plain text node that
  becomes visible on copy — paired with the icon swap, so the outcome isn't
  communicated by color or icon alone.
- Copying uses the async Clipboard API first, with a hidden-`<textarea>` +
  `document.execCommand('copy')` fallback for older or restricted browsers,
  and a distinct "Copy failed" message if both attempts fail.
- The button is a native `<button>`, reachable and operable by keyboard
  (`Tab` + `Enter`/`Space`) without extra scripting.

## Responsiveness

The card grid runs three columns wide, dropping to two under `720px` and a
single column under `460px`.

## Why this fits EaseMotion CSS

It directly implements what the issue describes — including matching its
exact "Class name copied!" wording — as a small, dependency-free,
reusable pattern consistent with EaseMotion's existing class-based
component style. Built the same way as every other submission here: plain
HTML/CSS/vanilla JS, no framework or build step required to read or run it.

All classes and the folder itself use a `-hr18` suffix to avoid colliding
with any other contributor's submission under `submissions/examples/`.
