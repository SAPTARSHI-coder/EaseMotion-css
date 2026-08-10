# Fix: Prevent Toast Notification Overflow on Mobile

**Resolves issue [#55731](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/55731)**

---

## 1. What does this do?

Prevents toast notifications from overflowing the viewport on narrow screens by replacing the fixed `max-width` with a viewport-relative `min()` formula, adding text-wrapping for long words and URLs, constraining the stack container, and switching to a full-width edge-to-edge layout below 480 px.

---

## 2. How is it used?

### Single toast (inline or positioned)

```html
<div class="toast-base toast-fixed toast-success" role="alert" aria-live="polite">
  <span class="toast-icon" aria-hidden="true">✅</span>
  <div class="toast-body">
    <strong>Upload complete</strong>
    <p>document-with-a-very-long-filename-that-wraps-instead-of-overflowing.pdf</p>
  </div>
  <button class="toast-close" aria-label="Dismiss">✕</button>
</div>
```

### Fixed stack (bottom-right corner)

```html
<div class="toast-fixed-stack" aria-live="polite" aria-label="Notifications">

  <div class="toast-base toast-fixed toast-danger" role="alert">
    <span class="toast-icon" aria-hidden="true">🔴</span>
    <div class="toast-body">
      <strong>Connection error</strong>
      <p>Unable to reach https://api.longdomainname.example.com/v2/endpoint</p>
    </div>
  </div>

</div>
```

### Variant modifiers

| Class | Accent colour |
|---|---|
| *(none)* | Primary purple |
| `toast-success` | Green |
| `toast-danger` | Red |
| `toast-warning` | Amber |
| `toast-info` | Blue |

### Size modifiers

```html
<div class="toast-base toast-fixed toast-sm"> … </div>
<div class="toast-base toast-fixed toast-lg"> … </div>
```

---

## 3. Why is it useful?

### Exact root cause (from `components/toast.css`)

```css
.ease-toast         { max-width: 24rem; }   /* 384 px — wider than a 320 px phone */
.ease-toast-sm      { max-width: 20rem; }
.ease-toast-lg      { max-width: 28rem; }

.ease-toast-fixed-bottom-right {
  position: fixed;
  right: 1.5rem;    /* no left guard — can bleed off left edge */
  bottom: 1.5rem;
}
/* No overflow-wrap, no word-break, no @media rule */
```

Five separate problems cause the overflow:

| # | Problem | Effect |
|---|---|---|
| 1 | `max-width: 24rem` with no viewport ceiling | On a 320 px phone: 24rem = 384 px → overflows right |
| 2 | No `overflow-wrap` / `word-break` | Long words or URLs push intrinsic width beyond container |
| 3 | Stack uses only `right` — no `left` guard | Toast can bleed off the left edge on very narrow screens |
| 4 | No `@media` rule for mobile | Corner layout doesn't adapt to compact viewports |
| 5 | No `env(safe-area-inset-*)` | Toast hidden behind iPhone home indicator |

### Five targeted fixes

**Fix A — `min()` for viewport-relative width**

```css
.toast-fixed {
  width: min(24rem, calc(100vw - var(--toast-margin) * 2));
  max-width: 24rem;  /* fallback for browsers without min() */
}
```

`min()` picks the smaller value:
- Desktop (800 px): `min(384px, 752px)` = 384 px ✓
- Small phone (320 px): `min(384px, 272px)` = 272 px ✓ — stays inside viewport

**Fix B — text wrapping**

```css
.toast-fixed {
  overflow-wrap: break-word;
  word-break: break-word;
}
.toast-body { min-width: 0; }   /* lets flex child shrink below content size */
.toast-url  { word-break: break-all; }   /* URLs: break anywhere */
```

**Fix C — stack container width constraint**

```css
.toast-fixed-stack {
  width: min(24rem, calc(100vw - var(--toast-margin) * 2));
  max-width: 24rem;
}
```

**Fix D — mobile layout (≤ 480 px)**

```css
@media (max-width: 480px) {
  .toast-fixed-stack {
    left: 0.75rem;
    right: 0.75rem;
    width: auto;       /* left + right define width */
    max-width: none;
  }
  .toast-fixed {
    width: 100%;
    max-width: none;
  }
}
```

On a 360 px phone the toast spans from edge to edge with 12 px breathing room on each side — matching the layout pattern used by native iOS and Android toasts.

**Fix E — iOS safe-area insets**

```css
:root {
  --toast-bottom: max(1.5rem, calc(1.5rem + env(safe-area-inset-bottom, 0px)));
  --toast-right:  max(1.5rem, calc(1.5rem + env(safe-area-inset-right,  0px)));
}
```

Requires `viewport-fit=cover` in the `<meta viewport>` tag.

### Proposed change to `components/toast.css`

```css
/* Replace the three max-width lines with: */
.ease-toast {
  width: min(24rem, calc(100vw - 3rem));   /* 1.5rem margin each side */
  max-width: 24rem;
  overflow-wrap: break-word;
  word-break: break-word;
}
.ease-toast-sm { width: min(20rem, calc(100vw - 3rem)); max-width: 20rem; }
.ease-toast-lg { width: min(28rem, calc(100vw - 3rem)); max-width: 28rem; }

.ease-toast-body { min-width: 0; }

/* Replace .ease-toast-fixed-bottom-right with: */
.ease-toast-fixed-bottom-right {
  position: fixed;
  bottom: max(1.5rem, calc(1.5rem + env(safe-area-inset-bottom, 0px)));
  right:  max(1.5rem, calc(1.5rem + env(safe-area-inset-right,  0px)));
  z-index: 1000;
  width: min(24rem, calc(100vw - 3rem));
  max-width: 24rem;
}

@media (max-width: 480px) {
  .ease-toast-fixed-bottom-right {
    left: 0.75rem;
    right: 0.75rem;
    width: auto;
    max-width: none;
  }
  .ease-toast { width: 100%; max-width: none; }
}
```

This satisfies the expected behaviour from the issue:
> "The toast notification should remain fully visible within the viewport, wrapping its content and adjusting its width appropriately on smaller screens."
