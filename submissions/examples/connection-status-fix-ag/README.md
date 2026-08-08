# Connection Status — Bug Fix

Fixes an incorrect animation keyframe reference in `components/connection-status.css`.

## 🐛 What was wrong?

Line 17 of `components/connection-status.css` referenced an undefined keyframe name:

```css
/* ❌ BEFORE — keyframe does not exist */
animation: ease-pulse 2s infinite;
```

The `@keyframes ease-kf-pulse` rule is already defined in `core/animations.css`, but the component used the wrong name (`ease-pulse` instead of `ease-kf-pulse`). As a result, the offline status bar remained completely static instead of pulsing.

## ✅ The Fix

```css
/* ✅ AFTER — correct keyframe name */
animation: ease-kf-pulse 2s infinite;
```

## 🔎 How to reproduce the bug

1. Link EaseMotion CSS in your project.
2. Add `<div class="ease-connection-status is-offline">Connection lost.</div>` to your HTML.
3. Open the page — the bar is visible but **does not pulse**.
4. After the fix, the pulsing animation plays correctly.

## 📁 Files

| File        | Description                                 |
| ----------- | ------------------------------------------- |
| `style.css` | Corrected `connection-status` component CSS |
| `demo.html` | Live demo showing the pulsing animation     |
