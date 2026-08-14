# Photosensitive / Seizure-Safe Animation Safety Lab

An interactive accessibility documentation lab that compares **risky EaseMotion animation patterns** with **safer alternatives** for photosensitive users — covering rapid flash, opacity flicker, aggressive loops, and high-contrast strobing.

> Submission track: `submissions/docs/ease-photosensitive-lab-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #43644

---

## What does this do?

EaseMotion CSS supports `prefers-reduced-motion`, but that alone does not guarantee **photosensitive / seizure-safe** UI. Rapid flashing, high-contrast flicker, and fast infinite loops can still cause discomfort or trigger symptoms in sensitive users.

This lab lets you:

| Compare | Learn |
|---------|-------|
| `.ease-ping` (risky) | `.ps-safe-ping` (slower, 2 iterations) |
| `.ease-pulse` (risky) | `.ps-safe-pulse` (gentler opacity) |
| Black ↔ white flash (never use) | `.ease-fade-in` one-shot entrance |
| Infinite `.ease-rotate` | Single slow rotation or static icon |

---

## How is it used?

1. Open `demo.html` in a browser (requires internet for CDN assets).
2. Browse the **side-by-side comparison cards** (Risky vs Safe Alternative).
3. Read the **risk tags** on each pattern (Flash, Flicker, Fast Loop, High Contrast).
4. Toggle **Simulate prefers-reduced-motion** to test fallback behavior.
5. Adjust the **loop iterations slider** to see `--ease-animation-iterations` in action.
6. Press **Copy safe class** to grab recommended class names.
7. Read the **WCAG guidance** cards at the bottom.

---

## Features

- Side-by-side Risky vs Safe Alternative panels (6 animation patterns)
- Risk flags: flash, flicker, fast loop, high contrast
- Safe alternative presets with slower timing and reduced opacity
- `--ease-animation-iterations` slider (1× – infinite)
- Manual `prefers-reduced-motion` simulation toggle
- Replay button to restart all animations
- Copy-to-clipboard for safe class suggestions
- Educational WCAG photosensitive safety notes
- Production checklist for safer motion defaults
- Responsive layout and keyboard-friendly controls
- Native `prefers-reduced-motion` CSS fallback

---

## Patterns covered

| Pattern | Risky class | Safe alternative |
|---------|-------------|------------------|
| Ping indicator | `.ease-ping` | `.ps-safe-ping` |
| Pulse opacity | `.ease-pulse` | `.ps-safe-pulse` |
| Bounce motion | `.ease-bounce` | `.ps-safe-bounce` |
| Continuous rotate | `.ease-rotate` | `.ps-safe-rotate` |
| High-contrast flash | custom flash demo | `.ease-fade-in` / `.ps-safe-fade` |
| Glow emphasis | `.ease-pulse-border-emphasis` | `.ps-safe-glow` |

---

## Why is it useful?

- **Goes beyond reduced motion** — teaches photosensitive safety as a separate concern.
- **Visual evidence** — risky patterns are shown next to safer replacements.
- **Framework-native** — uses real EaseMotion classes plus documented safe presets.
- **GSSoC educational value** — helps contributors build accessible animation demos.
- **Self-contained** — no edits to `core/`, `components/`, or existing files.

---

## Tech stack

| Asset | Source |
|-------|--------|
| EaseMotion CSS | jsDelivr CDN (`easemotion.min.css`) |
| Safe alternative presets | `style.css` (custom `@keyframes`) |
| Lab controls | Inline JS in `demo.html` |

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Comparison lab UI, controls, copy logic |
| `style.css` | Safe animation presets, layout, risk styling |
| `README.md` | This document |

---

## Compliance notes

- Only **new files** inside `submissions/docs/ease-photosensitive-lab-sp/`.
- Risky flash demo is clearly labeled **educational only — never for production**.
- No modifications to `core/`, `components/`, workflows, or existing files.
- All three required submission files included (`demo.html`, `style.css`, `README.md`).
- Total contribution exceeds the 250-line minimum policy threshold.
- Folder name carries the unique contributor suffix `-sp`.
