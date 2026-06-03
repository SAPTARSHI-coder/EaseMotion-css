# Toast Notification Component

**Category:** Components — Feedback & Alerts  
**Type:** Pure CSS (Zero JavaScript)  
**Folder:** `submissions/examples/ease-toast-component/`

---

## 1. What does this do?

The **Toast Notification Component** displays non-blocking feedback messages at the edge of the screen. It includes four semantic variants:

| Variant | Class | Use case |
|---|---|---|
| Success | `.ease-toast--success` | Confirmed actions (saved, published, purchased) |
| Error | `.ease-toast--error` | Failures (broken builds, permission denied, payment declined) |
| Warning | `.ease-toast--warning` | Near-limit states (storage full, session expiring) |
| Info | `.ease-toast--info` | Neutral updates (new version, scheduled maintenance) |

### Visual features

- **Slide-in from right** — every toast enters with `translateX(32px) scale(0.96) → (0, 1)` via `ease-spring`.
- **Left accent bar** — a 3px colored stripe anchored to the left edge identifies variant type at a glance.
- **Icon area** — a tinted square with a subtle pulse ring that expands and fades on a 2.4s loop.
- **Progress bar** — a bottom edge bar that drains left-to-right over 4–6s, indicating time until auto-dismiss (purely visual in CSS).
- **Hover glow + lift** — each toast elevates `-2px` and gains a variant-colored `box-shadow` ring on hover.
- **Close button** — a `×` glyph button that highlights on hover.
- **Compact modifier** — `.ease-toast--compact` collapses to a single-line height for quick ephemeral messages.
- **Staggered entrance** — `nth-child` delays of `0.08s` stagger toasts in a stack.

---

## 2. How is it used?

### Minimal Toast

```html
<div class="ease-toast ease-toast--success" role="status" aria-live="polite" aria-atomic="true">
  <div class="ease-toast-icon" aria-hidden="true">✅</div>

  <div class="ease-toast-body">
    <div class="ease-toast-title-text">Payment successful</div>
    <div class="ease-toast-message">Your receipt has been sent to your inbox.</div>
    <span class="ease-toast-time">Just now</span>
  </div>

  <div class="ease-toast-close" role="button" aria-label="Dismiss" tabindex="0">✕</div>
  <div class="ease-toast-progress" aria-hidden="true"></div>
</div>
```

### Fixed-Position Stack (real-world placement)

```html
<div class="ease-toast-container" aria-label="Notifications">
  <!-- toasts go here -->
</div>
```

`.ease-toast-container` is `position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 9999`.

### Compact (single-line)

Add `.ease-toast--compact` alongside the variant class:

```html
<div class="ease-toast ease-toast--error ease-toast--compact" ...>
  <div class="ease-toast-icon" aria-hidden="true">❌</div>
  <div class="ease-toast-body">
    <div class="ease-toast-title-text">Permission denied</div>
  </div>
  <div class="ease-toast-close" ...>✕</div>
  <div class="ease-toast-progress" aria-hidden="true"></div>
</div>
```

### Class Reference

| Class | Role |
|---|---|
| `.ease-toast-container` | Fixed-position outer wrapper — stacks toasts bottom-right |
| `.ease-toast-stack` | Inline demo column wrapper (`flex-direction: column`) |
| `.ease-toast` | Individual toast card |
| `.ease-toast--success` | Green accent variant |
| `.ease-toast--error` | Red accent variant |
| `.ease-toast--warning` | Amber accent variant |
| `.ease-toast--info` | Sky-blue accent variant |
| `.ease-toast--compact` | Single-line height modifier |
| `.ease-toast-icon` | Tinted icon square with pulse ring |
| `.ease-toast-body` | Text content wrapper |
| `.ease-toast-title-text` | Bold notification title |
| `.ease-toast-message` | Supporting description |
| `.ease-toast-time` | Monospace timestamp |
| `.ease-toast-close` | `×` dismiss button |
| `.ease-toast-progress` | Auto-timeout progress bar |

---

## 3. Why is it useful?

1. **Zero JavaScript** — Animation, progress drain, slide-in entrance, icon pulse ring, and hover effects are all `@keyframes` + CSS `transition`. No event listeners, no timers, no DOM manipulation.

2. **GPU-composited 60 FPS** — Every animated property (`transform`, `opacity`, `box-shadow`) stays on the compositor thread, causing zero layout reflow.

3. **Self-contained semantic variants** — Each variant carries its color entirely through CSS custom properties (`--toast-accent`, `--toast-icon-bg`, `--toast-icon-color`). Adding a new variant means one small rule block — no changes elsewhere.

4. **Production-ready ARIA** — Success/info toasts use `role="status" aria-live="polite"` for background updates. Error toasts use `aria-live="assertive"` for critical failures. Screen readers announce the correct priority level.

5. **Compact modifier** — The `.ease-toast--compact` single-line variant fits high-frequency micro-feedback without visual overload, while sharing all the same animation and theming infrastructure.

6. **Reduced motion compliance** — `@media (prefers-reduced-motion: reduce)` removes the slide-in animation, icon pulse ring, and progress bar animation, while preserving the full visual layout and color system.
