# EaseMotion CSS — Dropdown Menu Select (`ease-dropdown-menu-select-ik`)

Custom select dropdown menu component (`ease-dropdown-select`) featuring spring grid height expansion transitions (`grid-template-rows`), chevron rotation, and radio option selection.

Submitted by: **@Ishita-Katiyar-06** (`-ik`)

---

## 1. What does this do?

Provides a custom select dropdown menu component (`ease-dropdown-select`) built on native HTML `<details>` elements that animates menu opening height smoothly with zero JavaScript.

---

## 2. How is it used?

Include the dropdown `<details>` element structure in your HTML form:

```html
<details class="ease-dropdown-select">
  <summary class="dd-summary">
    <span>Select Option...</span>
    <span class="dd-chevron">&rsaquo;</span>
  </summary>
  <div class="dd-menu-wrapper">
    <div class="dd-menu">
      <label class="dd-option">
        <input type="radio" name="option" value="1">
        <span>Option 1</span>
      </label>
    </div>
  </div>
</details>
```

---

## 3. Why does it fit EaseMotion CSS?

EaseMotion CSS emphasizes zero-JS interactive form components. The Dropdown Menu Select component delivers 60fps GPU compositor grid height expansion (`grid-template-rows: 0fr -> 1fr`) while preserving keyboard focus accessibility.
