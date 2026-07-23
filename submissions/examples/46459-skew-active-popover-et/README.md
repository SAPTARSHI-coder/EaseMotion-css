# CSS Skew-Active Popover — Neumorphic Soft Layouts

A pure HTML/CSS popover component styled for modern, tactile Neumorphic Soft UI designs featuring smooth skew-reveal transitions.

Related Issue: #46459

---

## 📢 Repository Standard Answers

### 1. What does this do?
It displays a custom CSS-driven popover overlay that un-skews and scales up smoothly when hovering or tabbing into trigger elements. It is designed to match light, soft neumorphic layouts.

### 2. How is it used?
Wrap the trigger link and popover container inside a `.sap` parent wrapper and apply direction classes (`sap--top`, `sap--bottom`, `sap--left`, `sap--right`).

```html
<span class="sap sap--top">
  <a href="#" class="sap__trigger" tabindex="0" aria-describedby="pop-1">Trigger Link</a>
  <span class="sap__popover" role="tooltip" id="pop-1">
    <p class="sap__popover-title">Title</p>
    <p class="sap__popover-body">Description text content.</p>
  </span>
</span>
```

### 3. Why is it useful?
It provides tactile feedback on trigger buttons (converting them from raised/convex buttons to inset/concave buttons on active clicks) and transitions the popover smoothly purely via CSS (no JavaScript required). It supports standard focus visibility rules and system-level accessibility settings.

---

## ✨ Features

- **Pure HTML + CSS**: Lightweight implementation with zero external javascript dependencies.
- **Skew-Active Reveal**: Popover un-skews from `-8deg` to `0deg` and scales from `0.85` to `1` using custom cubic-bezier curves.
- **Neumorphic Soft Aesthetics**: Incorporates soft light and dark double shadows (`box-shadow`) to blend elements seamlessly with the background.
- **Tactile Active Feedback**: Trigger buttons go sunken (`inset`) on mouse click (`:active` state).
- **Directional Support**: Full positioning for Top, Bottom, Left, and Right views with custom matching directional arrows.
- **A11y Compliant**: Connects triggers to popovers via `aria-describedby` relations, includes screen reader-only helper attributes, and supports keyboard Arrow/Tab focus tracking.
- **Reduced Motion**: Disables or simplifies animations when `prefers-reduced-motion` settings are enabled.

---

## 🛠️ Customization

The component styles can be easily configured using scoped CSS properties:

| Variable | Description | Default |
|----------|-------------|---------|
| `--sap-duration` | Timing duration for trigger and popover hover states | `0.4s` |
| `--sap-skew-from` | Starting skew rotation value | `-8deg` |
| `--sap-scale-from` | Starting scale ratio | `0.85` |
| `--sap-bg` | Base page and popover background color | `#e0e5ec` (Soft Neumorphic Gray) |
| `--sap-accent` | Primary highlighted text or active border color | `#3182ce` (Blue) |
| `--sap-shadow-out` | Raised convex soft UI shadow values | `8px 8px 16px rgba(...)` |
| `--sap-shadow-in` | Sunken inset soft UI shadow values | `inset 5px 5px 10px rgba(...)` |

---

## 📂 Folder Structure

```text
submissions/examples/46459-skew-active-popover-et/
├── demo.html       ← Dashboard demo featuring profile, server, and storage cards
├── style.css       ← Scoped component styles containing variables, shadows, and keyframes
└── README.md       ← Component documentation (This file)
```
