# Next.js App Router Import Placement Pitfalls (`ease-nextjs-import-pitfalls-hr18`)

A documentation-style guide explaining how EaseMotion's stylesheet import
location affects a Next.js App Router app, built for issue
[#47640](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/47640).

## What it does

The App Router keeps `app/layout.js` mounted across every navigation but
remounts `app/page.js` on each route change — which means *where* you import
`easemotion-css` actually matters, unlike in a plain single-page setup. This
guide:

- **Demonstrates the flash live** — two mock browser windows, one simulating
  an import scoped to `page.js` (flashes unstyled content on every simulated
  navigation) and one simulating an import in `layout.js` (never flashes,
  since the layout never unmounts)
- **Compares wrong vs correct placement** with real code for both
  `app/page.js` and `app/layout.js`
- **Explains FOUC's causes** (per-route imports, duplicate imports) and its
  **prevention** (import once at the root, avoid pushing it into a nested
  Client Component)
- **Covers Server Component compatibility** — the import needs no
  `"use client"` directive, since EaseMotion is plain CSS
- **Provides copy-ready snippets** for both `layout.js` and `page.js`,
  switchable by tab
- **Gives a pitfall checklist** covering import order, global scope, and
  duplicate imports

## Installation

Nothing to install — `demo.html` is self-contained and opens directly in a
browser (double-click the file). It links a single local `style.css`; no
build step, package manager, or external CDN. (A Next.js project isn't
required to view the guide — the App Router code is shown as illustrative
snippets.)

## Usage

Open `demo.html`. Click **"Simulate navigation"** on the `page.js` window
first to see the unstyled flash, then on the `layout.js` window to see the
same simulated navigation with no flash. Read through the wrong-vs-correct
comparison and the FOUC callouts, then use the **layout.js / page.js** tabs
and **Copy snippet** button to grab the import you need.

## Accessibility notes

- The two demo windows are labeled with their import location in a visible
  URL bar (`app/page.js imports styles` / `app/layout.js imports styles`),
  not color alone, so the difference reads without relying on the flash
  itself.
- The copy button announces success or failure through an
  `aria-live="polite"` status region.
- Copying uses the async Clipboard API first, with a hidden-`<textarea>` +
  `document.execCommand('copy')` fallback for older or restricted browsers.
- The tabs use proper `role="tablist"` / `role="tab"` semantics with
  `aria-selected` state, built on native `<button>` elements.
- The demo's entrance animation respects
  `@media (prefers-reduced-motion: reduce)`.

## Responsiveness

The FOUC-demo grid and the wrong-vs-correct comparison grid both collapse
from two columns to one under a `720px` viewport width.

## Why this fits EaseMotion CSS

This closes a real, easy-to-hit setup mistake for one of the most common
frameworks EaseMotion gets used in — the fix isn't a framework quirk to work
around, it's just putting a plain CSS import in the file that actually
matches how long it needs to stay applied. Built the same way as every other
submission here: plain HTML/CSS/vanilla JS, no framework or build step
required to read or run it.

All classes, custom properties, and the folder itself use a `-hr18` suffix
to avoid colliding with any other contributor's submission under
`submissions/docs/`.
