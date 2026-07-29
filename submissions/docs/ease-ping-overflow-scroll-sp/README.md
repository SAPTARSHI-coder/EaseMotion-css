# Ping/Pulse Scale Overflow Creating Horizontal Scrollbar

A documentation guide explaining how edge-of-viewport `.ease-ping` / pulse scale animations can create unwanted body `overflow-x`, and which containment fixes stop the horizontal scrollbar.

> Submission track: `submissions/docs/ease-ping-overflow-scroll-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #47717

---

## What does this do?

`.ease-ping` scales to `scale(2)` while fading out. When a ping indicator sits near the left or right viewport edge, that expanded paint box extends past the layout width and the page grows a horizontal scrollbar — even though your content columns are not wider than the screen. This guide shows the bug live, compares containment fixes, and provides copy-ready snippets.

## How is it used?

1. Open `demo.html` in a browser.
2. Watch the **Buggy** edge demo create horizontal overflow (or toggle the overflow highlighter).
3. Compare the **Fixed** panels that clip ping paint with a containment wrapper.
4. Read why `transform: scale()` overflows and which recipes to use.
5. Copy recommended HTML/CSS into your project.

## Features

- Side-by-side bug vs fix demos for `.ease-ping` near viewport edges
- Overflow highlighter / scrollbar callouts
- Clear explanation of scale overflow vs layout width
- Containment recipes (`overflow: hidden`, wrapper clip, isolation)
- Copy-ready HTML/CSS snippets
- Responsive and beginner-friendly documentation UI

## Why is it useful?

- **Stops a common layout bug** — mysterious horizontal scroll from decorative motion.
- **Framework-aware** — documents real `.ease-ping` / `ease-kf-ping` behavior.
- **Practical fixes** — containment wrappers without removing the animation.
- **Self-contained** — no edits to `core/`, `components/`, or engine files.

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Bug/fix stages, overflow meter, snippets |
| `style.css` | Containment demos, layout, responsive design |
| `README.md` | This document |

## Compliance notes

- Only **new files** inside `submissions/docs/ease-ping-overflow-scroll-sp/`.
- No modifications to `core/`, `components/`, `easemotion/engine/`, or existing files.
- All three required submission files included (`demo.html`, `style.css`, `README.md`).
- Folder name carries the unique contributor suffix `-sp`.
