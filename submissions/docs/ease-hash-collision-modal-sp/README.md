# Hash Modal Open While URL Already Has Unrelated #id

A documentation guide focused on **hash collision**: when an in-page `#section` deep-link already exists in the URL and a hash-driven EaseMotion modal (`#modal-x`) opens or closes — including stray hash clears from `core/modal.js`.

> Submission track: `submissions/docs/ease-hash-collision-modal-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #47721  
> Note: Different from the deep-link playground (`ease-hash-modal-lab-sp`) — this guide focuses on **collision**, not general modal deep-linking.

---

## What does this do?

EaseMotion modals can open via URL hash (`href="#modal-x"`) and `core/modal.js`. The browser only allows **one** hash at a time. If the user is already on `#features` (or any unrelated section id), opening a modal overwrites that hash. Closing via Escape / backdrop sets `location.hash = ''`, which clears the section deep-link instead of restoring it. This guide reproduces that path and shows safer patterns.

## How is it used?

1. Open `demo.html` in a browser.
2. Jump to a page section (sets an unrelated `#id`).
3. Open the hash modal and watch the URL / timeline panel.
4. Close the modal and observe the stray hash clear.
5. Compare the safer “remember & restore” pattern and copy snippets.

## Features

- Interactive `#section` + `#modal-x` collision demo
- Live URL / hash state panel (before → during → after)
- Reproduction steps aligned with `core/modal.js` behavior
- Callouts for scroll jumps and stray hash clears
- Side-by-side collision vs safer restore explanations
- Copy-ready snippets and beginner-friendly UI

## Why is it useful?

- **Explains a real gotcha** — section deep-links disappear after modal close.
- **Tied to real source** — documents `window.location.hash = ''` close behavior.
- **Actionable fixes** — restore previous hash or avoid hash for modals.
- **Self-contained** — no edits to `core/` or `components/`.

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Collision demo, modal, timeline, snippets |
| `style.css` | Lab layout, state panel, responsive design |
| `README.md` | This document |

## Compliance notes

- Only **new files** inside `submissions/docs/ease-hash-collision-modal-sp/`.
- No modifications to `core/`, `components/`, or existing files.
- All three required submission files included (`demo.html`, `style.css`, `README.md`).
- Folder name carries the unique contributor suffix `-sp`.
