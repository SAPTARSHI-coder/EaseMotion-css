# prefers-reduced-motion Demo (`prefers-reduced-motion-demo-hr18`)

A demo/showcase example of respecting `prefers-reduced-motion` with
EaseMotion-style animation classes, built for issue
[#55958](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/55958).

## A note on scope

The framework's own site already documents `prefers-reduced-motion`
support at the CSS level. What this issue actually asks for — per its
title, "add prefers-reduced-motion demo example" — is a dedicated,
interactive example that *teaches* the pattern rather than a new CSS
mechanism, so that's what this submission builds: a page demonstrating
the behavior live, with the exact global rule from the issue's own CSS
snippet as the actual mechanism underneath.

## What it does

- **A live "Simulate reduced motion" toggle** that applies the identical
  override this page uses for the real OS-level setting, so the effect is
  visible immediately without needing to change any system preference —
  useful for a reviewer checking this PR, and as a pattern other
  submissions in this repo can reuse.
- **Four animation demo cards** (fade-in, slide-up, bounce, hover-grow),
  each replayable, so the "before vs after" is felt directly rather than
  just described.
- **A "reduced ≠ none" nuance example**: a purely decorative toast
  (fully disabled under reduced motion) next to an essential one (a
  payment-failure notice) that keeps a very short 120ms cross-fade even
  under reduced motion, since its appearance *is* the notification —
  removing that transition entirely would mean some users get no
  indication anything happened at all, not just a less flashy one.
- **A copy-ready CSS snippet** — the exact rule from the issue — with a
  one-click copy button.

## Installation

Nothing to install — `demo.html` is self-contained and opens directly in a
browser (double-click the file). It links a single local `style.css`; no
build step, package manager, or external CDN.

## Usage

The core mechanism is exactly the issue's proposed rule:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
```

Applied globally once, this makes every `ease-*` animation and transition
in a project resolve instantly for anyone who's set that OS preference —
no per-component opt-in required. This demo also shows the nuanced
follow-up: if a specific transition is communicating that something
happened (not just decorating that it happened), it's reasonable to
scope it out of the blanket rule and keep a much shorter version of it,
rather than treating "respect the preference" and "remove all motion
everywhere without exception" as the same thing.

## Accessibility notes

- This entire submission *is* an accessibility feature demo, so the notes
  above cover the substance — but worth stating directly: the "simulate"
  toggle is additive, not a replacement for real support. The actual
  `@media (prefers-reduced-motion: reduce)` rule works with zero
  JavaScript and zero page interaction; the toggle only exists so this
  specific demo page can be evaluated without changing system settings.
- The toggle itself is a real, labeled checkbox with a visible
  `:focus-visible` state, operable by keyboard.
- The copy button announces success or failure through an
  `aria-live="polite"` status region, and falls back to
  `document.execCommand('copy')` for browsers without the async Clipboard
  API.

## Why this fits EaseMotion CSS

`prefers-reduced-motion` support is directly aligned with the framework's
stated accessibility goals, and this submission makes the behavior
tangible and testable rather than just documented in prose — someone can
open this one file and immediately understand, and verify, what "respects
reduced motion" means for an `ease-*` class in practice.

All classes and the folder itself use a `-hr18` suffix to avoid colliding
with any other contributor's submission under `submissions/examples/`.
