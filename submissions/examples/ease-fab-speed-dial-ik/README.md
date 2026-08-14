# EaseMotion CSS — Floating Action Button Speed Dial (`ease-fab-speed-dial-ik`)

An interactive Floating Action Button (FAB) speed dial component (`ease-fab-container`) with expanding action items, staggered spring transitions, and accessible focus visibility.

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

Provides an interactive Floating Action Button component (`ease-fab-main`) that reveals a vertical speed dial menu of quick action buttons (`fab-speed-dial`) on hover or focus-within.

---

## 2. How is it used?

Apply the FAB speed dial markup structure to your page layout:

```html
<div class="ease-fab-container">
  <div class="fab-speed-dial">
    <button class="fab-item" title="Action 1">📄</button>
    <button class="fab-item" title="Action 2">📷</button>
  </div>
  <button class="ease-fab-main">&plus;</button>
</div>
```

---

## 3. Why does it fit EaseMotion CSS?

EaseMotion CSS focuses on responsive micro-interactions. The FAB Speed Dial component delivers smooth 60fps spring transitions (`cubic-bezier(0.34, 1.56, 0.64, 1)`) and full keyboard accessibility while supporting `prefers-reduced-motion` settings.
