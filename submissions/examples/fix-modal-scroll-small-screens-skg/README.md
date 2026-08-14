# Fix: Modal Cannot Be Scrolled on Small Screens

**Extends issue [#55345](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/55345)**
*(Core fix merged in PR #55760 — this submission addresses the remaining edge cases)*

---

## 1. What does this do?

Provides a complete, production-ready scrollable modal layout where only the body scrolls while the header and footer remain pinned — plus iOS safe-area support, background-scroll lock via `:has()`, and correct mobile viewport height using `dvh`/`svh`.

---

## 2. How is it used?

```html
<div id="my-modal" class="modal-overlay-fixed" role="dialog"
     aria-modal="true" aria-labelledby="modal-title">
  <div class="modal-fixed">

    <!-- Pinned header -->
    <div class="m-header">
      <h2 id="modal-title">Terms &amp; Conditions</h2>
      <a href="#" class="m-close" aria-label="Close">✕</a>
    </div>

    <!-- Scrollable body — only this section scrolls -->
    <div class="m-body">
      <p>Long content here…</p>
      <!-- as much content as needed -->
    </div>

    <!-- Pinned footer — always visible -->
    <div class="m-footer">
      <button class="m-btn m-btn-secondary">Decline</button>
      <button class="m-btn m-btn-primary">Accept</button>
    </div>

  </div>
</div>

<!-- Open trigger -->
<a href="#my-modal" class="open-btn">Open Modal</a>
```

---

## 3. Why is it useful?

### The issue with the naive `overflow-y: auto` fix

PR #55760 added `max-height: 90vh; overflow: auto` to `.ease-modal`. This makes the content scrollable, but it has a critical secondary problem: the **header and footer scroll away** with the body content.

On a Terms & Conditions modal (the exact example in the issue), this means:
- The title bar (with the ✕ close button) disappears after the user scrolls one screen
- The "Accept" action button at the bottom is only reachable by scrolling all the way down — and is only visible *once*

### The complete fix — 5 targeted CSS changes

```css
/* 1. Flex column on the modal container */
.modal-fixed {
  display: flex;
  flex-direction: column;        /* header / body / footer stack vertically */
  max-height: 90dvh;             /* dvh = dynamic viewport height (mobile-aware) */
  min-height: 0;                 /* allows flex children to shrink below content size */
}

/* 2. Header pinned — never shrinks */
.modal-fixed .m-header {
  flex-shrink: 0;
}

/* 3. Body scrolls — takes all remaining space */
.modal-fixed .m-body {
  flex: 1;                       /* fills remaining height */
  min-height: 0;                 /* required for flex overflow to work */
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;  /* smooth iOS momentum scroll */
  overscroll-behavior-y: contain;     /* stop scroll chaining to page */
}

/* 4. Footer pinned — never shrinks */
.modal-fixed .m-footer {
  flex-shrink: 0;
  padding-bottom: max(1rem, env(safe-area-inset-bottom, 1rem));  /* iPhone home bar */
}

/* 5. Body scroll lock via :has() — no JS */
body:has(.modal-overlay-fixed:target) {
  overflow: hidden;
}
```

### Why `dvh` / `svh` matter on mobile

On mobile browsers the viewport height changes as the address bar shows/hides:

| Unit | Behaviour |
|---|---|
| `vh` | Calculated at load — can be too tall when address bar shows |
| `svh` | Small viewport height — always the smallest possible height (safe) |
| `dvh` | Dynamic — updates as address bar appears/disappears (best UX) |

The fix uses all three as a cascade for maximum compatibility:

```css
max-height: 90vh;    /* universal fallback */
max-height: 90svh;   /* stable minimum */
max-height: 90dvh;   /* ideal for modern mobile browsers */
```

### Why `min-height: 0` is required on flex children

A flex child's default `min-height` is `auto` (its content size). Without `min-height: 0`, the browser refuses to shrink the child below its content, so `overflow-y: auto` never fires — the body just expands the modal past `max-height` instead of scrolling.

This is the single most common reason "I added overflow-y: auto but it doesn't scroll" is reported.

### Summary of what each part fixes

| Problem | Fix |
|---|---|
| Content clipped, not scrollable | `overflow-y: auto` + `max-height` |
| Header/footer scroll away | `flex column` + `flex-shrink: 0` on header/footer |
| Body doesn't actually scroll | `flex: 1` + `min-height: 0` on body |
| Page scrolls behind modal | `body:has(:target) { overflow: hidden }` |
| Address bar breaks height on iOS | `dvh` / `svh` cascade |
| Content hidden behind home indicator | `env(safe-area-inset-bottom)` on footer |
