# Delete-Detection Explainer (`ease-nodelete-policy-explainer-hr18`)

A documentation-style static guide explaining valid vs invalid contribution
diffs for this repository, built for issue
[#47701](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/47701).

## What it does

Most PRs in this repo don't get closed for bad code — they get closed for
touching the wrong files. This page is a self-contained explainer that walks
a first-time contributor through:

- A side-by-side **invalid vs valid diff** comparison, with a plain-language
  "why" callout under each
- Six **policy callouts** covering the rules a diff actually gets checked
  against (new-folder-only, unique naming, `core/`/`components/` being
  off-limits, the 3-file minimum, the ≥250 line-count sanity check, and
  one-feature-per-PR)
- **Track-specific folder structures** (tabs for `examples/`, `docs/`,
  `react/`, `scss/`) so contributors can see exactly where their files
  belong for the track they're using
- A **"why this gets closed"** list of the most common real-world mistakes
- A **copy-ready checklist**, exportable as Markdown with one click, meant to
  be pasted straight into a PR description before opening it

## Installation

Nothing to install — `demo.html` is self-contained and opens directly in a
browser (double-click the file). It links a single local `style.css`; no
build step, package manager, or external CDN.

## Usage

Open `demo.html`, read through the diff comparison and policy callouts, click
through the track tabs to find the folder structure for your track, then hit
**"Copy checklist as Markdown"** and paste the result into your own PR
description before you open it.

The diff examples on the page use illustrative file paths (e.g.
`core/animations.css`) — they're representative of the kind of change that
gets rejected, not copies of any real PR.

## Accessibility notes

- The track tabs use proper `role="tablist"` / `role="tab"` /
  `role="tabpanel"` semantics with `aria-selected` state, so they're
  navigable by screen readers and keyboard users (native `<button>` elements,
  so `Tab` + `Enter`/`Space` work without extra JS).
- The copy button announces success or failure through an
  `aria-live="polite"` status region rather than a visual-only toast.
- Copying uses the async Clipboard API first, with a hidden-`<textarea>` +
  `document.execCommand('copy')` fallback for older or restricted browsers.
- Color is never the only signal: the invalid/valid diff cards are also
  labeled with explicit "✗ INVALID" / "✓ VALID" text, not just red/green.

## Why this fits EaseMotion CSS

It's a plain HTML/CSS/vanilla-JS page with zero framework or build
dependency, consistent with the rest of the project's submissions, and it
directly serves the project's own review process — reducing the number of
invalid PRs the maintainer has to manually close by teaching the rule set
visually instead of purely in prose.

All classes and custom properties use a `-hr18` suffix, and the folder itself
is suffixed the same way, to avoid colliding with any other contributor's
submission under `submissions/docs/`.
