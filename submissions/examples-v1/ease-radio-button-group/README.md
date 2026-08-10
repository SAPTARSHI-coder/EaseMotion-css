# Ease Radio Button Group

A modern, responsive, and fully accessible custom radio button group component built with pure CSS and HTML.

Related Issue: #47976

---

## 📢 Repository Standard Answers

### 1. What does this do?
It styles and animates radio button groups into premium interactive selection widgets such as pricing cards, segmented pill layout switchers, product option grids, and customized accent lists.

### 2. How is it used?
Wrap standard radio inputs and label controls inside structured container elements, and apply the appropriate layout modifier classes.

```html
<!-- Example: Segmented Switcher -->
<div class="ease-radio-segmented">
  <input type="radio" id="billing-1" name="billing" class="ease-radio-input" checked>
  <input type="radio" id="billing-2" name="billing" class="ease-radio-input">

  <label for="billing-1" class="ease-radio-segmented-label">Monthly</label>
  <label for="billing-2" class="ease-radio-segmented-label">Yearly</label>

  <div class="ease-radio-highlighter" aria-hidden="true"></div>
</div>
```

### 3. Why is it useful?
It provides premium visual feedback (like horizontal sliding background pill trackers, check circle scaling, and layout highlights) purely in CSS (no JS required) while ensuring proper keyboard focus state visibility and screen reader compatibility.

---

## ✨ Features

- **Pure HTML + CSS**: Very lightweight, zero dependency design.
- **Multiple Layout Presets**:
  - **Vertical Cards (`.ease-radio-card-group`)**: List item cards ideal for subscription plan selections.
  - **Segmented Control (`.ease-radio-segmented`)**: Slidable horizontal pills for quick toggles.
  - **Product Option Grid (`.ease-radio-grid`)**: Grid layout for selecting sizes or configs.
  - **Custom Classic Accents**: Standard circular checkboxes but customizable.
- **Fully Accessible**:
  - Employs native `<input type="radio">` tags under the hood so browser keyboard navigation (Arrows/Tabs) works natively.
  - Clear `:focus-visible` visual indicators for focus styles.
  - Respects user preferences by slowing or disabling animations under `prefers-reduced-motion`.
- **Easy Customization**: Uses scoped CSS variables for colors, size, corner radius, and transition timing.

---

## 🛠️ Customization

The component uses scoped CSS variables scoped under `:root` for global accents or overridden locally:

| Variable | Description | Default |
|----------|-------------|---------|
| `--ease-radio-accent` | Highlight outline and check background color | `#6366f1` (Indigo) |
| `--ease-radio-size` | Diameter size of the circular checklist button | `20px` |
| `--ease-radius-card` | Corner radius for selector card containers | `16px` |
| `--ease-anim-spring` | Custom spring cubic-bezier timing rate | `0.4s cubic-bezier(0.34, 1.56, 0.64, 1)` |

### Creating Custom Accents
Override `--ease-radio-accent` on a parent wrapper to completely tint all child indicators:

```css
.my-custom-group {
  --ease-radio-accent: #14b8a6; /* Teal */
  --ease-radio-accent-glow: rgba(20, 184, 166, 0.15);
}
```

---

## 📂 Folder Structure

```text
submissions/examples/ease-radio-button-group/
├── demo.html       ← Live demonstration page showing different presets
├── style.css       ← Scoped, well-commented stylesheet containing layouts & custom tokens
└── README.md       ← Component documentation (This file)
```
