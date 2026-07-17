# Fix ease-stepper RTL Layout with Logical Properties

## What does this do?
Replaces `left`/`right` physical CSS properties with CSS logical properties
(`inset-inline-start`, `inset-inline-end`) so the stepper renders correctly
in both LTR and RTL text directions.

## How is it used?
```html
<div class="ease-stepper" dir="rtl">
  <div class="ease-stepper__item is-done">…</div>
</div>
```

## Why is it useful?
Physical position properties do not flip in RTL. Logical properties adapt
automatically to the text direction, making the component work in Arabic,
Hebrew, Farsi, and other RTL languages. Fixes: #35831
