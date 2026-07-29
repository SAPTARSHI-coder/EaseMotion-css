# HTMX + EaseMotion Integration Showcase

An interactive documentation showcase demonstrating how to combine **HTMX partial swaps** with **EaseMotion CSS entrance animations** on dynamically loaded content — no React, no build step.

> Submission track: `submissions/docs/ease-htmx-integration-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #43655

---

## What does this do?

EaseMotion CSS documents integration with React, Next.js, Vue, and more — but there is no example showing **HTMX + EaseMotion** together.

This showcase demonstrates:

| Trigger | Animation | Pattern |
|---------|-----------|---------|
| Button click | `ease-fade-in` | Load card into swap target |
| Tab links | `ease-slide-up` | Switch panels on click |
| Button click | `ease-delay-*` stagger | Load animated list |
| Form submit | `ease-fade-in` | Success message after POST |
| Error button | Error panel | Failed request handling |

---

## How is it used?

1. Open `demo.html` in a browser (requires internet for CDN assets).
2. Click each demo trigger and watch HTMX swap content with EaseMotion animations.
3. Notice the **loading indicator** during each simulated request.
4. Try the **error trigger** to see failed-request handling.
5. Copy the **integration snippet** at the bottom.
6. Read the educational notes on re-applying animation classes after DOM swap.

---

## Features

- HTMX partial swap demo (load content into a target container)
- Entrance animations on swapped content (`ease-fade-in`, `ease-slide-up`)
- Staggered list animation using `ease-delay-75` … `ease-delay-300`
- Multiple trigger examples (button, link/tab, form)
- Loading state indicator during HTMX request (`hx-indicator`)
- Error state handling for failed requests
- Copy-ready HTML snippets for HTMX + EaseMotion integration
- Educational notes on re-applying animation classes after DOM swap
- `htmx:afterSwap` animation retrigger pattern
- Responsive, accessible UI with keyboard-friendly controls

---

## Reusable pattern

```javascript
document.body.addEventListener('htmx:afterSwap', function (evt) {
  evt.detail.target.querySelectorAll('.ease-fade-in, .ease-slide-up')
    .forEach(function (el) {
      el.style.animation = 'none';
      void el.offsetWidth;
      el.style.animation = '';
    });
});
```

Add EaseMotion entrance classes directly in the HTML fragments returned by your server.

---

## Tech stack

| Asset | Source |
|-------|--------|
| EaseMotion CSS | jsDelivr CDN (`easemotion.min.css`) |
| HTMX | jsDelivr CDN (`htmx.org@2.0.4`) |
| Mock API + retrigger logic | Inline JS in `demo.html` |
| Layout | `style.css` |

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | HTMX demos, hidden templates, mock routes, copy snippet |
| `style.css` | Demo layout, swap targets, loading/error states |
| `README.md` | This document |

---

## Compliance notes

- Only **new files** inside `submissions/docs/ease-htmx-integration-sp/`.
- Mock API routes simulate server responses for offline/static demo use.
- No modifications to `core/`, `components/`, workflows, or existing files.
- All three required submission files included (`demo.html`, `style.css`, `README.md`).
- Total contribution exceeds the 250-line minimum policy threshold.
- Folder name carries the unique contributor suffix `-sp`.
