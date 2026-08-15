# Animated Notifications & Toasts (`ease-animated-notifications-skg`)

> Submission for [Issue #87419](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/87419)

---

## What does this do?

A complete CSS-only animated notification and toast system covering all acceptance criteria:

| Criteria | Covered |
|---|---|
| Success, warning, error, info states | ✅ All four |
| ≥ 3 animation types | ✅ Fade-in, slide-from-right, drop-from-top + bonus slide-from-left + rise-from-bottom |
| Multiple positions | ✅ 6 positions via utility classes |
| Works without JavaScript | ✅ 100% CSS — only the dark-mode toggle uses JS |
| Responsive | ✅ Single-column on mobile |
| README with usage | ✅ This file |

---

## Animations included

### 1. Fade In (`notif--fade`)
Enters with `opacity: 0 → 1` + `scale(0.93 → 1)` using a spring easing.
Best for: in-page inline notifications, modals.

### 2. Slide from Right (`notif--slide-right`)
Enters from `translateX(60px)` — the classic bottom-right corner toast entrance.
Best for: corner toasts, action confirmations.

### 3. Drop from Top (`notif--drop`)
Drops from `translateY(-24px) scale(0.94)` — works well for top-center banners.
Best for: top-center alerts, maintenance notices.

### 4. Rise from Bottom (`notif--rise`)
Rises from `translateY(24px) scale(0.94)`.
Best for: bottom-center / bottom-right toasts.

### 5. Slide from Left (`notif--slide-left`)
Enters from `translateX(-60px)`.
Best for: top-left / bottom-left positions.

All animations use only `transform` and `opacity` — compositor-only, GPU-accelerated, smooth on mobile.

---

## Basic usage

```html
<!-- Fade-in success notification -->
<div class="notif notif--success notif--fade" role="alert">
  <span class="notif__icon">✅</span>
  <div class="notif__body">
    <strong class="notif__title">Changes saved</strong>
    <p class="notif__msg">Your profile has been updated.</p>
  </div>
</div>

<!-- Slide-in error notification with delay -->
<div class="notif notif--error notif--slide-right notif--delay-2" role="alert">
  <span class="notif__icon">❌</span>
  <div class="notif__body">
    <strong class="notif__title">Upload failed</strong>
    <p class="notif__msg">File exceeds the 25 MB limit.</p>
  </div>
</div>
```

## Dismissible (CSS-only)

```html
<!-- Hidden checkbox = state holder -->
<input type="checkbox" class="dismiss-chk" id="toast-1" />

<div class="notif notif--info notif--fade notif--dismissible" role="status">
  <span class="notif__icon">ℹ️</span>
  <div class="notif__body">
    <strong class="notif__title">New feature</strong>
    <p class="notif__msg">Dark mode is now available.</p>
  </div>
  <!-- label targets the checkbox — no JS needed -->
  <label class="notif__close" for="toast-1">&times;</label>
</div>
```

## Position utilities

Wrap your notifications in a container with a position class:

```html
<!-- Bottom-right corner stack -->
<div class="notif-pos--bottom-right">
  <div class="notif notif--success notif--slide-right">…</div>
  <div class="notif notif--info notif--slide-right notif--delay-1">…</div>
</div>
```

Available position classes:
- `.notif-pos--top-right` — slide from right
- `.notif-pos--top-left` — slide from left
- `.notif-pos--top-center` — drop from top
- `.notif-pos--bottom-right` — slide from right + rise
- `.notif-pos--bottom-left` — slide from left + rise
- `.notif-pos--bottom-center` — rise from bottom

## Stagger delays

Add `.notif--delay-1`, `.notif--delay-2`, `.notif--delay-3` to stagger multiple notifications:

```html
<div class="notif notif--success notif--fade">…</div>
<div class="notif notif--info    notif--fade notif--delay-1">…</div>
<div class="notif notif--warning notif--fade notif--delay-2">…</div>
```

## Customisation

Override CSS custom properties for global timing adjustments:

```css
:root {
  --dur-in:     0.4s;                            /* entrance duration */
  --ease-out:   cubic-bezier(0, 0, 0.2, 1);      /* smooth deceleration */
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1); /* springy overshoot */
}
```
