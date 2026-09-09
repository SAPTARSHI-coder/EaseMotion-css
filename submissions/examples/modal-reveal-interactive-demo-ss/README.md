# Interactive Modal & Reveal Components — Live Demo

> Submission for issue [#16948](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/16948)
>
> **Goal:** The existing `README.md` is comprehensive but lacks **live, interactive examples** for the JS-driven Modal and Reveal patterns. This submission provides a self-contained, zero-dependency vanilla HTML/CSS/JS demo showing exactly how to initialize and use both components — ready for the maintainer to lift into the main README or link from `docs/`.

---

## 1. What does this do?

Provides two production-ready, dependency-free interactive components built in pure vanilla JS:

| Component | Class | What it does |
| --- | --- | --- |
| **Modal** | `.ease-modal-itx` | Accessible dialog overlay with focus management, scroll lock, Escape-to-close, and custom events |
| **Reveal** | `.ease-reveal-itx` | Scroll-triggered entrance animation (fade / slide / zoom) powered by `IntersectionObserver` |

Both are demonstrated live in `demo.html` and initialized in `script.js` — open the demo directly in any browser (no server, no build tools, no frameworks).

---

## 2. How is it used?

### 🪟 Modal — Initialization

**Step 1 — Markup**

```html
<!-- Trigger -->
<button data-ease-modal-open="my-modal">Open modal</button>

<!-- Dialog (place at end of <body>) -->
<div id="my-modal" class="ease-modal-itx" role="dialog" aria-modal="true" aria-labelledby="my-modal-title">
  <div class="ease-modal-itx__dialog">
    <button class="ease-modal-itx__close" data-ease-modal-close aria-label="Close">×</button>
    <h2 class="ease-modal-itx__title" id="my-modal-title">Hello</h2>
    <p class="ease-modal-itx__body">Modal content goes here.</p>
    <div class="ease-modal-itx__actions">
      <button class="ease-modal-itx__btn ease-modal-itx__btn--ghost" data-ease-modal-close>Cancel</button>
      <button class="ease-modal-itx__btn ease-modal-itx__btn--primary" data-ease-modal-close>OK</button>
    </div>
  </div>
</div>
```

**Step 2 — Initialize**

```js
// Initialize one modal manually
const myModal = easeModal(document.getElementById('my-modal'));

// Open/close programmatically
myModal.open();
myModal.close();

// Or — auto-wire every modal + trigger on the page (recommended)
document.querySelectorAll('.ease-modal-itx').forEach((el) => {
  const m = easeModal(el);
  document
    .querySelectorAll(`[data-ease-modal-open="${el.id}"]`)
    .forEach(t => t.addEventListener('click', () => m.open(t)));
});
```

#### Modal options

| Option | Default | Description |
| --- | --- | --- |
| `closeOnBackdrop` | `true` | Close when the user clicks the dark overlay |
| `closeOnEscape`   | `true` | Close when the user presses `Esc` |
| `lockScroll`      | `true` | Prevent body scroll while open |

```js
easeModal(el, { closeOnBackdrop: false, lockScroll: false });
```

#### Modal events

Both events bubble, so you can listen on `document`:

```js
document.addEventListener('ease:modal:open',  (e) => console.log('opened', e.target.id));
document.addEventListener('ease:modal:close', (e) => console.log('closed', e.target.id));
```

#### Modal accessibility features

- ✅ `role="dialog"` + `aria-modal="true"` + `aria-labelledby` markup contract
- ✅ Automatic `aria-hidden` toggle
- ✅ Focus moves into the dialog on open
- ✅ Focus restores to the trigger button on close
- ✅ `Esc` key closes the modal
- ✅ Body scroll is locked while open
- ✅ Respects `prefers-reduced-motion` (animation disabled)

---

### ✨ Reveal — Initialization

**Step 1 — Markup**

```html
<div class="ease-reveal-itx">Fades up (default)</div>

<div class="ease-reveal-itx ease-reveal-itx--left">Slides in from the left</div>
<div class="ease-reveal-itx ease-reveal-itx--right">Slides in from the right</div>
<div class="ease-reveal-itx ease-reveal-itx--zoom">Zooms in</div>

<!-- Optional per-element delay using a CSS custom property -->
<div class="ease-reveal-itx" style="--ease-reveal-delay: 200ms;">Delayed reveal</div>
```

**Step 2 — Initialize**

```js
// One line — done.
easeReveal();
```

#### Reveal options

| Option | Default | Description |
| --- | --- | --- |
| `selector`  | `'.ease-reveal-itx'` | CSS selector for reveal elements |
| `threshold` | `0.15`                | How much of the element must be visible before triggering (0–1) |
| `once`      | `true`                | If `true`, each element reveals once and is unobserved |

```js
// Re-trigger every time elements scroll in and out of view
easeReveal({ once: false });

// Trigger earlier (only 5% visible)
easeReveal({ threshold: 0.05 });
```

#### Reveal direction modifiers

| Class | Effect |
| --- | --- |
| *(none)* | Fade up (default) |
| `ease-reveal-itx--left`  | Slide in from the left |
| `ease-reveal-itx--right` | Slide in from the right |
| `ease-reveal-itx--zoom`  | Zoom in from 0.85× |

#### Reveal accessibility features

- ✅ Graceful fallback when `IntersectionObserver` is unavailable — everything is shown immediately
- ✅ Respects `prefers-reduced-motion` (animation disabled, elements appear in final state)

---

## 3. Why is it useful?

The EaseMotion CSS `README.md` already documents Modal and Reveal at a high level, but contributors and consumers benefit hugely from a **live, click-it-yourself demo** that proves the API works end-to-end. This submission delivers exactly that:

- **Zero dependencies** — pure HTML / CSS / JS. Works by opening `demo.html` in any browser; no server, no build step, no CDN.
- **Copy-paste ready** — every snippet in this README mirrors what's actually in the demo, so consumers can lift code directly.
- **Accessibility-first** — both components ship with focus management, keyboard support, ARIA contracts, and `prefers-reduced-motion` fallbacks out of the box.
- **Event-driven** — modal emits `ease:modal:open` / `ease:modal:close` custom events so frameworks and analytics can hook in cleanly.
- **Maintainer-friendly** — the README structure is intentionally written so its sections can be lifted straight into the main project `README.md` (or a `docs/components/modal.md` + `docs/components/reveal.md` split) during standardization.

### Suggested integration

The maintainer can:

1. Lift the **🪟 Modal** and **✨ Reveal** sections of this README directly into the main `README.md` under a new "Interactive Components" heading, **or**
2. Split them into `docs/components/modal.md` and `docs/components/reveal.md`, with a link to this demo folder for the live playground.

Either way, the `demo.html` file in this folder serves as the **canonical interactive example** consumers can clone and run locally.

---

## Files in this submission

| File | Purpose |
| --- | --- |
| `demo.html` | Live playground — 3 modal variants + 5 scroll-reveal cards |
| `style.css` | Component styles for `ease-modal-itx` and `ease-reveal-itx` |
| `script.js` | `easeModal()` and `easeReveal()` initializers + auto-wire block |
| `README.md` | This file — the human-readable documentation |