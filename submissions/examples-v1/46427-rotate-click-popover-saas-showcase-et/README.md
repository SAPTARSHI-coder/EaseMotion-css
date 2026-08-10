# CSS Rotate-Click Popover — SaaS Showcase Layouts

A pure HTML/CSS popover component featuring a smooth Rotate-Click interaction, styled for modern, dark-themed SaaS dashboards.

Related Issue: #46427

---

## 📢 Repository Standard Answers

### 1. What does this do?
It provides a lightweight click-to-reveal popover where the trigger icon rotates (e.g. from plus to close) and the popover panel rotates and scales into position.

### 2. How is it used?
Apply the `.sap` class on a wrapper element with position classes (`sap--top`, `sap--bottom`, `sap--left`, `sap--right`), containing a checkbox input toggle, label trigger button, and a `.ease-popover-content` box.

```html
<span class="sap sap--top">
  <input type="checkbox" id="pop-1" class="ease-popover-toggle">
  <label for="pop-1" class="ease-popover-trigger" tabindex="0" role="button" aria-label="Trigger details menu">
    <span class="trigger-icon" aria-hidden="true">+</span>
    Click Me
  </label>
  <div class="ease-popover-content" role="tooltip" id="pop-1">
    <div class="menu-title">Menu Title</div>
    <div class="action-menu">
      <a href="#" class="action-item">Action Link</a>
    </div>
  </div>
</span>
```

### 3. Why is it useful?
It creates high-fidelity interactive details menus (such as branch settings, server status logs, or action triggers) purely in CSS (no JavaScript required). It supports default keyboard focus indicators and respects system-level accessibility settings.

---

## ✨ Features

- **Pure HTML + CSS**: Lightweight implementation with no javascript dependencies.
- **Rotate-Click Animation**: Trigger icons spin by `135deg` (plus to close cross) while popovers rotate from `12deg` to `0deg` and scale from `0.85` to `1`.
- **4 Position Configurations**: Top, Bottom, Left, and Right alignments with matching arrow pointer shapes.
- **SaaS Showcase Design**: Dark theme cards with semi-transparent backdrop blur overlays, glowing border highlights, and sleek icon layouts.
- **Keyboard Accessible**: Works with Tab and Space/Enter selection keys natively, using checkbox triggers, and handles `:focus-visible` styling cleanly.
- **Reduced Motion**: Disables or simplifies animations automatically when `prefers-reduced-motion` settings are active.

---

## 🛠️ Customization

Configure variables scoped in `:root` for global adjustments or customize locally:

| Variable | Description | Default |
|----------|-------------|---------|
| `--ease-popover-accent` | Active border and icon color accent | `#6366f1` (SaaS Indigo) |
| `--popover-bg` | Backdrop blurred surface background | `rgba(19, 26, 38, 0.9)` |
| `--popover-timing` | Interaction transition timing speed | `400ms` |
| `--popover-rotate-angle` | Starting rotation angle for popover un-spin | `12deg` |
| `--popover-radius` | Card border corner rounding | `12px` |

---

## 📂 Folder Structure

```text
submissions/examples/46427-rotate-click-popover-saas-showcase-et/
├── demo.html       ← Dashboard metrics showcase with top, bottom, left, and right popovers
├── style.css       ← Scoped styles containing layout grids, variables, and rotation keyframes
└── README.md       ← Component documentation (This file)
```
