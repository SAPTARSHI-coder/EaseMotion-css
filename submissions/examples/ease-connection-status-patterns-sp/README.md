# Connection Status UI Pattern Board

A pattern board showcasing reusable UI patterns for **online**, **offline**, **reconnecting**, and **slow network** states — using EaseMotion CSS animations such as pulse, shake, and fade.

> Submission track: `submissions/examples/ease-connection-status-patterns-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #44484

---

## What does this do?

EaseMotion CSS supports expressive motion utilities, but beginners building network-aware UIs lack a single reference for connection status patterns. This board demonstrates four states with appropriate animations in one demo page.

---

## Patterns included

| State | Motion | ARIA |
|-------|--------|------|
| Online | `.ease-pulse` on indicator dot | `role="status"` |
| Offline | `.ease-shake` on badge | `role="alert"` |
| Reconnecting | `.ease-pulse` + `.ease-fade-in` | `aria-live="polite"` |
| Slow network | `.ease-pulse` (soft) + `.ease-fade-in` | `role="status"` |

---

## How is it used?

1. Open `demo.html` in a browser (requires internet for CDN assets).
2. Use the **state switcher** to preview online, offline, reconnecting, and slow network.
3. Browse the **all patterns grid** for side-by-side comparison.
4. Copy HTML snippets for each state.
5. Read motion mapping and ARIA guidance notes.

---

## Features

- Online state pattern (stable connected UI with subtle pulse indicator)
- Offline state pattern (disconnected UI with shake alert styling)
- Reconnecting state pattern (loading/retry UI with pulse animation)
- Slow network state pattern (degraded connection warning with fade/pulse cues)
- Uses EaseMotion animation classes (`ease-pulse`, `ease-shake`, `ease-fade-in`)
- Interactive state switcher to preview each connection status
- Copy-ready HTML snippet for each pattern
- Responsive and clean demo page
- Accessible labels, keyboard-friendly controls, and readable contrast

---

## Tech stack

| Asset | Source |
|-------|--------|
| EaseMotion CSS | jsDelivr CDN (`easemotion.min.css`) |
| State switcher | Inline JS in `demo.html` |
| Pattern styling | `style.css` |

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Interactive pattern board, switcher, copy snippets |
| `style.css` | Status badges, preview layout, state colors |
| `README.md` | This document |

---

## Compliance notes

- Only **new files** inside `submissions/examples/ease-connection-status-patterns-sp/`.
- No modifications to `core/`, `components/`, workflows, or existing files.
- All three required submission files included (`demo.html`, `style.css`, `README.md`).
- Total contribution exceeds the 250-line minimum policy threshold.
- Folder name carries the unique contributor suffix `-sp`.
