# Hash-Based Modal Deep-Linking Playground

An interactive documentation lab demonstrating **EaseMotion `core/modal.js`** hash open/close behavior — backdrop click, Escape key handling, focus trap, and live URL state display.

> Submission track: `submissions/docs/ease-hash-modal-lab-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #44486

---

## What does this do?

EaseMotion CSS ships a lightweight `modal.js` helper that syncs `.ease-modal-overlay` elements with the URL hash. This playground lets beginners open modals via `#hash` links, observe real-time state changes, and test keyboard accessibility end to end.

---

## Demos included

| Demo | Hash | Highlights |
|------|------|------------|
| Details modal | `#hm-details-modal` | Deep-link sharing, modal chaining |
| Settings modal | `#hm-settings-modal` | Focus trap with form controls |
| Share modal | `#hm-share-modal` | Copyable deep-link URL |

---

## How is it used?

1. Open `demo.html` in a browser (requires internet for CDN assets).
2. Click any **Open modal** trigger — watch the live state panel update.
3. Close via backdrop click, `Escape`, or a `href="#"` close link.
4. Open **settings** and press `Tab` to test the focus trap.
5. Copy the HTML snippet for hash-modal integration.

---

## Features

- Interactive hash-based modal open/close demo
- Live URL hash state display panel
- Backdrop click to close demonstration
- Escape key close behavior demonstration
- Focus trap and keyboard navigation notes
- Example markup using EaseMotion modal classes and `core/modal.js`
- Copy-ready HTML snippets for hash-modal integration
- Educational notes on deep-linking and modal accessibility
- Responsive, accessible UI with keyboard-friendly controls

---

## Tech stack

| Asset | Source |
|-------|--------|
| EaseMotion CSS | jsDelivr CDN (`easemotion.min.css`) |
| EaseMotion modal.js | jsDelivr CDN (`core/modal.js`) |
| Lab styling | `style.css` |
| State panel + event log | Inline JS in `demo.html` |

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Interactive playground, modals, event log |
| `style.css` | Lab layout, state panel, behavior cards |
| `README.md` | This document |

---

## Compliance notes

- Only **new files** inside `submissions/docs/ease-hash-modal-lab-sp/`.
- No modifications to `core/`, `components/`, workflows, or existing files.
- All three required submission files included (`demo.html`, `style.css`, `README.md`).
- Total contribution exceeds the 250-line minimum policy threshold.
- Folder name carries the unique contributor suffix `-sp`.
