# Global Reduced-Motion Rule vs Engine Class Double-Apply

A documentation guide explaining why DevTools shows two `@media (prefers-reduced-motion: reduce)` blocks for the same element — the global rule in `easemotion.css` and the Motion Engine compiler's per-class guard — and which one effectively wins.

> Submission track: `submissions/docs/ease-global-rm-engine-overlap-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #47706

---

## What does this do?

When users enable "Reduce motion" and inspect an element with both a framework class (`ease-fade-in`) and an engine-injected class (`_em_*`), DevTools lists multiple reduced-motion rules. This looks like a bug but is intentional redundancy. The guide clarifies cascade behavior and expected outcomes.

## How is it used?

1. Open `demo.html` in a browser.
2. Toggle **Reduce motion** on/off to compare animation behavior.
3. Read the DevTools-style cascade panels for global vs engine rules.
4. See the "winner" callout explaining why both rules produce the same result.
5. Copy snippets for local reduced-motion testing.

## Features

- Side-by-side explanation of global RM media query vs engine per-class RM guard
- Fake DevTools-style cascade panels showing rule overlap
- Clear "winner" callouts for animation duration/iteration behavior
- Live toggle to simulate `prefers-reduced-motion: reduce`
- Accessibility-focused notes
- Copy-ready snippets for testing reduced motion locally
- Responsive and beginner-friendly documentation UI

## Why is it useful?

- **Prevents false bug reports** — "double RM rules" is by design, not a cascade bug.
- **Explains engine standalone mode** — per-class guards work when `easemotion.css` is not loaded.
- **DevTools literacy** — teaches how to read strikethrough and `!important` in RM context.
- **Self-contained** — no edits to `core/`, `components/`, or engine files.

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Cascade explorer, RM toggle, live animation demo |
| `style.css` | DevTools panel styling, layout, responsive design |
| `README.md` | This document |

## Compliance notes

- Only **new files** inside `submissions/docs/ease-global-rm-engine-overlap-sp/`.
- No modifications to `core/`, `components/`, `easemotion/engine/`, or existing files.
- All three required submission files included (`demo.html`, `style.css`, `README.md`).
- Folder name carries the unique contributor suffix `-sp`.
