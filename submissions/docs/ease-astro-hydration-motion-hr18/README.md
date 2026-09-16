# Astro Island Hydration & EaseMotion Class Timing (`ease-astro-hydration-motion-hr18`)

A documentation-style guide explaining how Astro's island hydration model
affects when EaseMotion classes actually become interactive, built for issue
[#47699](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/47699).

## What it does

EaseMotion's `ease-*` classes are plain CSS, so anything driven purely by CSS
(`:hover`, `@keyframes` entrance animations, `:focus` states) is live the
instant the stylesheet loads — completely independent of any JavaScript
framework. The problem shows up when a class is applied or toggled *by a
component's JavaScript* inside an Astro Island: that toggle can't run until
the island hydrates, and Astro's different `client:*` directives hydrate at
very different times. This guide:

- **Demonstrates the gap live** — a CSS-only entrance/hover box next to a
  box whose click handler is deliberately disabled for ~2 seconds to
  simulate a `client:idle`-style hydration delay, so the timing difference
  is felt, not just described
- **Summarizes all five hydration directives** (`client:load`,
  `client:idle`, `client:visible`, `client:media`, `client:only`) in a table
  of when each fires and what it's a good fit for
- **Compares a problematic pattern** (a hover class gated behind React
  state that can't update pre-hydration) **against a recommended one**
  (the same hover handled natively in CSS, with hydration reserved for
  whatever genuinely needs JavaScript)
- **Provides a copy-ready Astro component snippet** showing the recommended
  pattern in context
- **Gives a checklist** for picking a hydration strategy based on how
  critical the interaction actually is

## Installation

Nothing to install — `demo.html` is self-contained and opens directly in a
browser (double-click the file). It links a single local `style.css`; no
build step, package manager, or external CDN. (Astro itself isn't required
to view or understand the guide — the `.astro` snippets are shown as
illustrative code blocks.)

## Usage

Open `demo.html`. Watch the live demo at the top first — the JS-toggled box
starts disabled and grayed out with a "Hydrating…" status pill, then becomes
clickable once the simulated delay finishes, while the CSS-only box next to
it has already animated in and responds to hover from the moment the page
rendered. Click **"Replay hydration delay"** to see it again. Then read
through the directive table, the problematic-vs-recommended comparison, and
copy the integration snippet with the **Copy snippet** button.

## Accessibility notes

- The status pill text ("Hydrating…" / "Hydrated — try the button") is not
  color-only — the state is legible even without perceiving the color shift.
- The copy button announces success or failure through an
  `aria-live="polite"` status region.
- Copying uses the async Clipboard API first, with a hidden-`<textarea>` +
  `document.execCommand('copy')` fallback for older or restricted browsers.
- The CSS-only entrance animation respects
  `@media (prefers-reduced-motion: reduce)` and skips straight to its final
  state.
- Decorative boxes are marked `aria-hidden="true"`; the interactive button
  has a real disabled state (`disabled` attribute), not just a visual one.

## Responsiveness

The live-demo grid and the pattern-comparison grid both collapse from two
columns to one under a `720px` viewport width, and the directive table
scrolls horizontally on narrow screens rather than compressing into
unreadable columns.

## Why this fits EaseMotion CSS

EaseMotion is explicitly framework-agnostic — it works with Astro, React,
Vue, and plain HTML alike — so a guide that clarifies exactly where CSS
responsibility ends and framework hydration timing begins helps contributors
avoid filing "the animation is broken" issues that are actually just
hydration timing, not a bug in the library. It's built the same way as every
other submission here: plain HTML/CSS/vanilla JS, no framework or build step
required to read or run it.

All classes, custom properties, and the folder itself use a `-hr18` suffix
to avoid colliding with any other contributor's submission under
`submissions/docs/`.
