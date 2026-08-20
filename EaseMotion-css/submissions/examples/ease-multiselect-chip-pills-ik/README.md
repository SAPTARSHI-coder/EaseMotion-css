# EaseMotion CSS — Multi-Select Chip Pills (`ease-multiselect-chip-pills-ik`)

Interactive filter chip pills component (`ease-chip-group`) featuring spring scale toggle micro-animations (`transform: scale(1.06)`), checkmark reveals, active glow rings, and checkbox input accessibility.

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

Provides a filter selection chip component (`ease-chip-group`) that animates active selection states (`chip-content`) with spring scale bounces (`scale(1.06)`), glowing active rings, and checkmark reveals.

---

## 2. How is it used?

Include the chip selection structure in your filter or preference form:

```html
<div class="ease-chip-group">
  <label class="ease-chip">
    <input type="checkbox" checked>
    <span class="chip-content">
      <span class="chip-check">✓</span>
      <span class="chip-label">CSS Motion Engine</span>
    </span>
  </label>
</div>
```

---

## 3. Why does it fit EaseMotion CSS?

EaseMotion CSS focuses on lightweight, responsive input controls. The Multi-Select Chip Pills component delivers 60fps GPU compositor scale interpolation while preserving native HTML checkbox keyboard accessibility.
