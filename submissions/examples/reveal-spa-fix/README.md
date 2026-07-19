# Reveal SPA Dynamic Content Fix

This submission resolves Issue #11231 by patching `core/reveal.js` to observe dynamically injected content.

## What it does
The original `reveal.js` script only ran once on `DOMContentLoaded`. If a developer uses React, Vue, or fetches content dynamically, any newly injected `.ease-reveal` elements remained invisible. This patched version utilizes a `MutationObserver` on `document.body` to seamlessly detect new elements and observe them.

## How to use it
In this demo, the standard reveal logic is extended/patched via `reveal-patched.js`. Simply use the standard `.ease-reveal` markup. The demo automatically injects an element 2 seconds after load to prove it works dynamically.

## Why it fits
EaseMotion CSS should be robust enough to work out-of-the-box in modern Single Page Applications. Adding a MutationObserver aligns `reveal.js` with the already robust architecture of `tabs.js`.
