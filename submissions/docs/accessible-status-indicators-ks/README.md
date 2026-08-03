# Accessible Status Indicators — Documentation Guide

## 1. What does this do?

Demonstrates animated status indicators (online, syncing, offline, notification) that gracefully adapt across the full accessibility spectrum — from standard animation through reduced-motion alternatives to forced-colors mode. Provides a practical reference for building status indicators that work for everyone.

## 2. How is it used?

Open `demo.html` in a browser to see live side-by-side comparisons:

- **Standard** — Full animation (pulsing glows, spinning sync, ping notifications)
- **Reduced Motion** — Opacity-only fades replacing all spatial transforms
- **No Animation** — Static indicators using color + borders only
- **Forced Colors** — System colors (`LinkText`, `CanvasText`, `Highlight`) replacing all custom colors

Toggle your system accessibility settings to see live adaptation:
- **Windows:** Settings → Accessibility → Visual Effects → Animation effects → Off
- **macOS:** System Settings → Accessibility → Display → Reduce motion
- **Forced Colors:** Windows → Settings → Accessibility → Contrast themes

### CSS Pattern

```css
/* 1. Base animated state */
.status-dot {
  animation: pulse-glow 2s ease-in-out infinite;
}

/* 2. Reduced motion: opacity pulse, no transform */
@media (prefers-reduced-motion: reduce) {
  .status-dot {
    animation-name: pulse-opacity;
    transform: none !important;
  }
}

/* 3. Forced colors: system colors, no animation */
@media (forced-colors: active) {
  .status-dot {
    background: LinkText;
    border: 2px solid CanvasText;
    animation: none;
  }
}
```

### ARIA Pattern

```html
<!-- Status: uses role="status" for live-region without interruption -->
<span class="status-dot" role="status" aria-label="User is online"></span>

<!-- Notifications: uses aria-live="polite" for update announcements -->
<div aria-live="polite" aria-atomic="true">
  <span class="sr-only">3 new notifications</span>
</div>
```

## 3. Why is it useful?

**The gap:** EaseMotion CSS provides excellent animation utilities but has no documentation on how animated indicators should adapt for accessibility. The existing accessibility guide focuses on "turn off animations" — it doesn't show the spectrum approach where motion is replaced, not removed.

**What this adds:**

| Tier | Behavior | When Used |
|---|---|---|
| Full Animation | Pulse glow, spin, bounce | Default for users without motion sensitivity |
| Reduced Motion | Opacity-only fade, no spatial change | `prefers-reduced-motion: reduce` |
| No Animation | Static colors + borders | Explicit opt-out, decorative only |
| Forced Colors | System colors + borders | `forced-colors: active` (Windows High Contrast) |

Each pattern includes:
- Proper ARIA attributes (`role="status"`, `aria-live`, `aria-label`)
- Screen-reader-only text fallbacks
- `forced-colors: active` support with system color keywords
- Responsive demo grid that works on mobile
- WCAG 2.3.3 (Animation from Interactions) compliance patterns

### Status Types Demonstrated

| Status | Visual | ARIA |
|---|---|---|
| Online | Green pulsing glow | `role="status"` + `aria-label` |
| Syncing | Blue rotating ring | `role="status"` + `aria-label` |
| Offline | Gray static dot | `role="status"` + `aria-label` |
| Notification | Red ping with badge | `aria-live="polite"` + `.sr-only` text |
