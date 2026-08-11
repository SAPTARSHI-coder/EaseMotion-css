# Tooltip Rtl Logical Props Fix

## What does this do?
Fixes `.ease-tooltip` positioning in RTL (`dir="rtl"`) layouts by replacing physical CSS properties (`left`, `right`) with CSS logical properties (`inset-inline-start`, `inset-inline-end`) that auto-adapt to text direction.

## How is it used?
```html
<div dir="rtl">
  <button class="tooltip-parent" data-tip="تلميح">زر
    <span class="tooltip tooltip-right">Tooltip text</span>
  </button>
</div>
```

## Why is it useful?
Arabic, Hebrew and Urdu sites use RTL layouts. Physical `left`/`right` in CSS break tooltip placement in RTL contexts. CSS logical properties (`inset-inline-start`/`end`) solve this once and work for both LTR and RTL without any JavaScript.

## Fixes
Fixes #9843
