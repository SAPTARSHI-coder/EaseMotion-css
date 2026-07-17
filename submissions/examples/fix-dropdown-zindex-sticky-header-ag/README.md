# Fix ease-dropdown Z-Index Behind Sticky Header

## What does this do?
Raises `.ease-dropdown__menu` z-index to `1100` so it appears above
sticky/fixed navigation headers that commonly use `z-index: 1000`.

## How is it used?
```html
<div class="ease-dropdown">
  <button class="ease-dropdown__trigger">Options ▾</button>
  <div class="ease-dropdown__menu" role="menu">
    <button class="ease-dropdown__item" role="menuitem">Edit</button>
  </div>
</div>
```

## Why is it useful?
A dropdown appearing behind the site header is completely unusable.
The z-index hierarchy (header: 1000, dropdown: 1100, modal: 10000) ensures
correct stacking. Fixes: #35799
