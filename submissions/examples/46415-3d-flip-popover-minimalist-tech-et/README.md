# CSS 3D Flip Popover — Minimalist Tech Layouts

A pure HTML/CSS popover component with a smooth 3D flip interaction, styled for clean Minimalist Tech interfaces.

Related Issue: #46415

---

## 📢 Overview

### 1. What does this do?
Reveals a popover panel via a **3D Y-axis or X-axis flip animation**. The popover starts in a `rotateX/Y(90deg)` closed state and un-folds to `rotate(0deg)` on click — like a card flipping face-up in 3D space.

### 2. How is it used?
Wrap a hidden checkbox, a label trigger, and a popover content panel inside `.ease-flip-wrapper` with a direction modifier class (`.efp--top`, `.efp--bottom`, `.efp--left`, `.efp--right`):

```html
<span class="ease-flip-wrapper efp--bottom">
  <input type="checkbox" id="my-flip" class="ease-flip-toggle">
  <label for="my-flip" class="ease-flip-trigger" tabindex="0" role="button" aria-label="Open menu">
    <span class="flip-icon" aria-hidden="true">+</span>
    Open
  </label>
  <div class="ease-flip-content" role="tooltip" id="my-flip-content">
    <div class="flip-menu">
      <div class="flip-section-label">Options</div>
      <a href="#" class="flip-item">Action One</a>
      <a href="#" class="flip-item">Action Two</a>
    </div>
  </div>
</span>
```

### 3. Why is it useful?
Provides a lightweight, JavaScript-free, interactive detail menu for modern developer tools, dashboards, and tech-focused UIs. Works natively with keyboard navigation and respects system accessibility preferences.

---

## ✨ Features

- **Pure HTML + CSS** — zero JavaScript
- **3D flip animation** — trigger icon rotates 135° (plus → close); popover flips from `90deg` to `0deg` with spring easing
- **4 positions** — top, bottom, left, right; each with matching CSS arrow triangles
- **Minimalist Tech aesthetic** — clean light surface, off-white grid background, monospace code rows, subtle blue accent
- **Keyboard accessible** — native Tab + Space/Enter via checkbox; `:focus-visible` ring
- **`prefers-reduced-motion`** — animations bypassed automatically
- **Responsive** — left/right popovers fall back to bottom-aligned on ≤ 768px screens
- **CSS custom properties** — all visual and motion parameters are adjustable via variables

---

## 🛠️ CSS Custom Properties

| Variable | Default | Description |
|---|---|---|
| `--flip-perspective` | `900px` | 3D depth perspective applied to the wrapper |
| `--flip-duration` | `380ms` | Duration of the flip animation |
| `--flip-easing` | spring cubic-bezier | Easing curve for the flip |
| `--flip-rotate-start` | `90deg` | Starting rotation angle (closed state) |
| `--flip-scale-start` | `0.92` | Starting scale (closed state) |
| `--flip-bg` | `#ffffff` | Popover surface background |
| `--flip-border` | `#e2e8f0` | Popover border color |
| `--flip-radius` | `10px` | Popover corner radius |
| `--flip-shadow` | layered | Box-shadow for the popover |
| `--mt-accent` | `#2563eb` | Active trigger color and focus ring |
| `--mt-bg-page` | `#f8fafc` | Page background color |

---

## 📂 Folder Structure

```text
submissions/examples/46415-3d-flip-popover-minimalist-tech-et/
├── demo.html    ← 2-card showcase with all 4 positions (right, left, top, bottom)
├── style.css    ← Tokens, 3D keyframes, position variants, accessibility, responsive
└── README.md    ← Component documentation (this file)
```
