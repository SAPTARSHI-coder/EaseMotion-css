# EaseMotion CSS — Segmented Control Switcher (`ease-segmented-control-ik`)

A pure CSS segmented control switcher component (`ease-segmented-control`) featuring smooth background glider sliding transitions (`translateX`) and radio input accessibility.

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

Provides a segmented view switcher component (`ease-segmented-control`) that smoothly slides an active glider highlight background between options using pure CSS radio input selectors (`#seg-1:checked ~ .seg-glider`).

---

## 2. How is it used?

Include the segmented control radio input structure in your HTML markup:

```html
<div class="ease-segmented-control">
  <input type="radio" id="seg-1" name="view-option" checked>
  <label for="seg-1">Day</label>

  <input type="radio" id="seg-2" name="view-option">
  <label for="seg-2">Week</label>

  <div class="seg-glider"></div>
</div>
```

---

## 3. Why does it fit EaseMotion CSS?

EaseMotion CSS emphasizes zero-JS UI controls. The Segmented Control component delivers smooth 60fps spring sliding transitions (`cubic-bezier(0.34, 1.56, 0.64, 1)`) while maintaining native HTML radio input keyboard accessibility.
