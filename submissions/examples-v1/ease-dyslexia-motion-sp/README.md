# Dyslexia-Friendly Motion & Typography Showcase

An interactive example that presents the **same animated card and task list** in two modes — **Standard UI** and **Dyslexia-Friendly UI** — so users can compare typography, spacing, and motion intensity side by side.

> Submission track: `submissions/examples/ease-dyslexia-motion-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #43645

---

## What does this do?

EaseMotion CSS focuses on expressive motion and readable class names, but there is no existing example showing how to adapt animations and typography for users with dyslexia.

This showcase lets you compare:

| Standard UI | Dyslexia-Friendly UI |
|-------------|----------------------|
| Inter font, tight line-height | Lexend font, 1.85 line-height |
| Bouncy card entrance | Soft opacity fade |
| Fast staggered list pop | Slow calm fade stagger |
| Scale + lift on hover | Opacity + color on hover |

---

## How is it used?

1. Open `demo.html` in a browser (requires internet for CDN assets).
2. Compare the **side-by-side columns** (Standard vs Dyslexia-Friendly).
3. Review the **typography spec chips** on each column.
4. Toggle **Simulate prefers-reduced-motion** to test fallback behavior.
5. Press **Replay animations** to restart entrance effects.
6. Read the **comparison table** and educational notes.
7. Copy the **dyslexia-friendly class combination** at the bottom.

---

## Features

- Side-by-side Standard vs Dyslexia-Friendly comparison layout
- Dyslexia-friendly font stack (Lexend + Verdana fallback)
- Wider line-height, letter-spacing, and word-spacing
- Max paragraph width (`58ch`) for comfortable reading
- Calmer animation presets (slower fade, no bounce)
- Card and task list demo using EaseMotion utility classes
- `prefers-reduced-motion` simulation toggle
- Educational notes on readability + motion best practices
- Copy-ready class examples for dyslexia-friendly UI patterns
- Responsive, accessible UI with keyboard-friendly controls

---

## Class combinations

| Pattern | Standard | Dyslexia-Friendly |
|---------|----------|-------------------|
| Typography | `.df-standard-text` | `.df-friendly-text` |
| Card motion | `.df-card-standard` | `.df-card-calm` |
| List motion | `.df-list-standard` | `.df-list-calm` |
| EaseMotion base | `.ease-card-shadow` | `.ease-card-shadow` |

**Recommended copy-paste combo:**

```
.df-friendly-text .df-card-calm .ease-card-shadow
```

---

## Why is it useful?

- **Shows readability + motion together** — typography and animation affect comfort equally.
- **Visual side-by-side proof** — same content, two very different reading experiences.
- **Practical EaseMotion patterns** — real classes plus documented friendly presets.
- **GSSoC educational value** — helps contributors build inclusive animated UI.
- **Self-contained** — no edits to `core/`, `components/`, or existing files.

---

## Tech stack

| Asset | Source |
|-------|--------|
| EaseMotion CSS | jsDelivr CDN (`easemotion.min.css`) |
| Lexend font | Google Fonts |
| Calm motion presets | `style.css` (custom `@keyframes`) |
| Controls | Inline JS in `demo.html` |

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Side-by-side showcase, controls, copy logic |
| `style.css` | Typography modes, calm motion presets, layout |
| `README.md` | This document |

---

## Compliance notes

- Only **new files** inside `submissions/examples/ease-dyslexia-motion-sp/`.
- No modifications to `core/`, `components/`, workflows, or existing files.
- All three required submission files included (`demo.html`, `style.css`, `README.md`).
- Total contribution exceeds the 250-line minimum policy threshold.
- Folder name carries the unique contributor suffix `-sp`.
