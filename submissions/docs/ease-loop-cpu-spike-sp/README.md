# Multiple Looping Animations CPU Spike on Low-End Devices

A documentation showcase that demonstrates **CPU performance impact** when a page contains 10+ simultaneous `.ease-ping` / `.ease-pulse` looping animations — with a live performance warning panel and safer alternatives.

> Submission track: `submissions/docs/ease-loop-cpu-spike-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #44495

---

## What does this do?

EaseMotion makes it easy to add expressive looping animations, but stacking many infinite loops on one dashboard can cause CPU spikes and jank on low-end mobile devices.

This guide lets contributors:

- View 10+ simultaneous `.ease-ping` / `.ease-pulse` elements
- See a live performance warning panel (loop count, paint load, severity)
- Compare heavy loop overload vs optimized patterns
- Learn safer alternatives and copy HTML snippets

## How is it used?

1. Open `demo.html` in a browser.
2. Review the **live performance panel** (loop count, severity, frame estimate).
3. Adjust the **loop count slider** (0–24) and click **Apply count**.
4. Compare **Heavy** (infinite loops) vs **Optimized** (capped + one-shot).
5. Check **prefers-reduced-motion** status on your system.
6. Copy performance-safe snippets from the tabbed panel.

## Features

- Demo with 10+ looping `.ease-ping` / `.ease-pulse` elements
- Live performance warning panel with severity indicator
- Side-by-side heavy vs optimized comparison
- Safer patterns: `ease-fade-in` one-shot, capped `--ease-animation-iterations`
- `prefers-reduced-motion` fallback demonstration
- Copy-ready HTML snippets
- Responsive, accessible UI
- Uses EaseMotion CSS CDN (`easemotion.min.css`)

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Interactive CPU spike demo and snippets |
| `style.css` | Lab layout and dashboard badge styling |
| `README.md` | This document |

## Compliance notes

- Only **new files** inside `submissions/docs/`.
- No edits to `core/`, `components/`, or existing project files.
- Self-contained — no backend, no build step.
