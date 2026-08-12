# Next.js App Router Import Placement Pitfalls

A static documentation demo that shows common mistakes when importing EaseMotion CSS in Next.js App Router projects — wrong placement in `page.js` vs `layout.js`, FOUC risks, and Server Component compatibility notes from the README.

> Submission track: `submissions/docs/ease-nextjs-import-pitfalls-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #47640

---

## What does this do?

The EaseMotion README documents Next.js App Router integration, but beginners often import styles in the wrong file. This showcase makes those pitfalls visible with side-by-side wrong vs correct examples, a FOUC explanation, and copy-ready snippets.

## How is it used?

1. Open `demo.html` in a browser (no build step required).
2. Compare **wrong** vs **correct** import placement for App Router.
3. Read the FOUC panel and run the flash simulation toggle.
4. Review Server Component notes (CSS-only, no hydration issues).
5. Copy the recommended `layout.js` snippet for production setup.
6. Use the pitfall checklist before shipping.

## Features

- Side-by-side wrong vs correct import examples for App Router
- FOUC explanation panel with practical prevention tips
- Interactive FOUC flash simulation (delayed stylesheet load)
- Server Component notes (static, from README guidance)
- Copy-ready code snippets for `layout.js` and `page.js`
- Pitfall checklist (import order, global scope, duplicate imports)
- Responsive and clean docs UI

## Why is it useful?

- **Prevents common Next.js mistakes** — import once in `layout.js`, not per page.
- **Explains FOUC** — why global CSS belongs in the root layout.
- **Server Component clarity** — EaseMotion is CSS-only, no hydration issues.
- **Self-contained** — no edits to `core/`, `components/`, or existing files.

## Tech stack

| Asset | Source |
|-------|--------|
| EaseMotion CSS | jsDelivr CDN (`easemotion.min.css`) |
| Pitfall demos & copy logic | Inline JS in `demo.html` |
| Layout styles | `style.css` |

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Pitfall guide UI, snippets, FOUC demo, checklist |
| `style.css` | Layout, code panels, badges, responsive styling |
| `README.md` | This document |

## Compliance notes

- Only **new files** inside `submissions/docs/ease-nextjs-import-pitfalls-sp/`.
- No modifications to `core/`, `components/`, workflows, or existing files.
- All three required submission files included (`demo.html`, `style.css`, `README.md`).
- Folder name carries the unique contributor suffix `-sp`.
