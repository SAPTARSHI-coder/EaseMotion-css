# Alpine.js + EaseMotion Integration Showcase

An interactive documentation showcase demonstrating how to combine **Alpine.js state management** with **EaseMotion CSS entrance and hover animations** for toggle panels, modals, and tabs — no React, no build step.

> Submission track: `submissions/docs/ease-alpine-integration-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #43656

---

## What does this do?

EaseMotion CSS documents integration with React, Next.js, Vue, and more — but there is no example showing **Alpine.js + EaseMotion** together.

This showcase demonstrates:

| Pattern | Alpine | EaseMotion |
|---------|--------|------------|
| Toggle panel | `x-show` | `ease-fade-in` |
| Disclosure | `x-show` | `ease-slide-up` |
| Modal | `x-data` state | `ease-fade-in` + `ease-slide-up` |
| Tabs | `active` state | `ease-fade-in` per panel |
| Hover cards | (no Alpine needed) | `ease-hover-grow`, `ease-hover-lift` |

---

## How is it used?

1. Open `demo.html` in a browser (requires internet for CDN assets).
2. Toggle panels and open the modal to see entrance animations replay.
3. Switch tabs and watch each panel fade in.
4. Hover the three icon cards to test EaseMotion hover utilities.
5. Copy the **integration snippet** at the bottom.
6. Read notes on `x-show` vs `x-transition` with EaseMotion classes.

---

## Features

- Alpine.js toggle panel demo with `ease-fade-in` / `ease-slide-up` entrance
- Modal open/close demo using Alpine state + EaseMotion animation classes
- Tab switching demo with animated active content transitions
- Hover effect examples using `ease-hover-grow`, `ease-hover-lift`, `ease-hover-lift-shadow`
- `x-show` / `x-transition` integration notes with EaseMotion classes
- Copy-ready HTML snippets for Alpine.js + EaseMotion patterns
- `easeRetriggerAnim()` helper to replay keyframes on each open
- Educational notes on combining Alpine reactivity with CSS animations
- Responsive, accessible UI with keyboard-friendly controls

---

## Reusable pattern

```javascript
function easeRetriggerAnim(el) {
  if (!el) return;
  el.style.animation = 'none';
  void el.offsetWidth;
  el.style.animation = '';
}
```

Call inside `$nextTick` after toggling `x-show` so EaseMotion entrance classes replay.

---

## Tech stack

| Asset | Source |
|-------|--------|
| EaseMotion CSS | jsDelivr CDN (`easemotion.min.css`) |
| Alpine.js | jsDelivr CDN (`alpinejs@3.14.8`) |
| Retrigger helpers | Inline JS in `demo.html` |
| Layout | `style.css` |

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Alpine demos, modal, tabs, hover examples, copy snippet |
| `style.css` | Demo layout, modal, tabs, hover grid styling |
| `README.md` | This document |

---

## Compliance notes

- Only **new files** inside `submissions/docs/ease-alpine-integration-sp/`.
- No modifications to `core/`, `components/`, workflows, or existing files.
- All three required submission files included (`demo.html`, `style.css`, `README.md`).
- Total contribution exceeds the 250-line minimum policy threshold.
- Folder name carries the unique contributor suffix `-sp`.
