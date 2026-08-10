# CDN Semver Version Picker & Pinning Guide

An interactive documentation tool that generates **version-pinned CDN links** for EaseMotion CSS across **jsDelivr** and **unpkg**, with clear guidance on version pinning versus tracking the latest release.

> Submission track: `submissions/docs/ease-cdn-semver-picker-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #43649

---

## What does this do?

The EaseMotion README documents multiple CDN providers, but beginners often copy the `@main` link into production projects without understanding the risks of unpinned versions.

This tool lets you:

- Select a version (`v1.0.0`, `v1.1.0`, `v1.2.0`, or `main`)
- Choose a CDN provider (jsDelivr / unpkg)
- Pick a file (minified bundle, full bundle, granular `core/` files)
- Get copy-ready `<link>` tags with the correct URL format
- See a live risk meter that warns when your selection is unpinned

---

## How is it used?

1. Open `demo.html` in a browser (requires internet for CDN assets).
2. Pick a **version**, **provider**, and **file** in the left panel.
3. Watch the **risk meter** — green for pinned, red for `@main`.
4. Copy the generated **`<link>` tag** or **raw URL**.
5. Check the **live preview** styled by your selected build.
6. Read the **pin vs latest** panel and semver/caching notes.

---

## Features

- Version selector with all published EaseMotion releases plus `main`
- CDN provider toggle (jsDelivr / unpkg) with correct URL formats for each
- File picker (`easemotion.min.css`, `easemotion.css`, granular `core/` files)
- Auto-generated copy-to-clipboard snippets (link tag and raw URL)
- Live risk meter — pinned (safe), unpinned (warning/danger)
- "Pin vs latest" comparison panel explaining production risks of `@main`
- Semver basics explainer (major / minor / patch) for beginners
- Cache behavior notes (jsDelivr permanent version caching, ~12h branch cache)
- Live preview section styled with the selected EaseMotion build
- Responsive, accessible UI with keyboard-friendly radio controls

---

## URL formats generated

| Selection | Generated URL format |
|-----------|---------------------|
| jsDelivr + pinned version | `cdn.jsdelivr.net/npm/easemotion-css@1.2.0/easemotion.min.css` |
| jsDelivr + `main` | `cdn.jsdelivr.net/gh/SAPTARSHI-coder/EaseMotion-css@main/easemotion.min.css` |
| unpkg + pinned version | `unpkg.com/easemotion-css@1.2.0/easemotion.min.css` |
| unpkg + `main` | Falls back to `@latest` (unpkg serves npm releases only) |

---

## Why is it useful?

- **Prevents production accidents** — makes the `@main` risk visible before copying.
- **Correct URLs every time** — jsDelivr and unpkg formats differ; the tool handles both.
- **Teaches semver** — major/minor/patch explained for beginners.
- **Documents cache behavior** — explains why branch URLs update slowly.
- **Self-contained** — no edits to `core/`, `components/`, or existing files.

---

## Tech stack

| Asset | Source |
|-------|--------|
| EaseMotion CSS | jsDelivr CDN (`easemotion.min.css`) |
| Link generator | Inline JS in `demo.html` |
| Layout & risk styling | `style.css` |

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Picker UI, link generation, live preview, copy logic |
| `style.css` | Panel layout, risk meter, snippet styling |
| `README.md` | This document |

---

## Compliance notes

- Only **new files** inside `submissions/docs/ease-cdn-semver-picker-sp/`.
- No modifications to `core/`, `components/`, workflows, or existing files.
- All three required submission files included (`demo.html`, `style.css`, `README.md`).
- Total contribution exceeds the 250-line minimum policy threshold.
- Folder name carries the unique contributor suffix `-sp`.
