# @layer Override Playground for Custom Theming

An interactive documentation lab that proves **custom `@layer easemotion-components` overrides win without `!important`** — helping users understand EaseMotion's cascade layer architecture.

> Submission track: `submissions/docs/ease-layer-override-lab-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #44492

---

## What does this do?

The EaseMotion README documents `@layer easemotion-base`, `easemotion-components`, and `easemotion-utilities`, but beginners often reach for `!important` when customizing buttons, cards, or tabs.

This lab lets you:

- Preview EaseMotion components with default framework styles
- Edit and apply `@layer easemotion-components` overrides live
- Compare default vs overridden side by side
- See why wrong-layer CSS fails
- See why unlayered utility overrides lose to `!important` utilities
- Copy ready-to-use override snippets

## How is it used?

1. Open `demo.html` in a browser.
2. Read the **cascade layer stack** diagram.
3. Pick a **preset** (button color, card border, tab underline, wrong layer, unlayered).
4. Click **Apply override** to inject CSS into the live preview.
5. Compare the **Default** and **With override** panels.
6. **Copy snippet** for your own project's theme stylesheet.

## Features

- Live component preview (button, card, tabs, utility box)
- Custom `@layer easemotion-components` override editor
- Side-by-side default vs overridden comparison
- Wrong-layer failure demonstration (`easemotion-base`)
- Unlayered vs `!important` utility demonstration
- Copy-ready override CSS snippets
- Educational notes on cascade layer architecture
- Responsive, accessible UI with keyboard-friendly controls
- Uses EaseMotion CSS CDN (`easemotion.min.css`)

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Interactive lab UI, presets, and override injection |
| `style.css` | Lab chrome layout (not component overrides) |
| `README.md` | This document |

## Compliance notes

- Only **new files** inside `submissions/docs/`.
- No edits to `core/`, `components/`, or existing project files.
- Self-contained — no backend, no build step.
