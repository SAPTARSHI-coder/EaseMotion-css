# Box Sizing: Border-Box (ssx)

## What does this do?

Demonstrates the difference between `box-sizing: content-box` (the browser default) and `box-sizing: border-box`, and shows how `border-box` makes element widths predictable when padding and borders are involved.

## How is it used?

Apply `box-sizing: border-box` to any element so that its declared width/height includes padding and border:

```html
<!-- Single element with border-box -->
<div class="box-border">Width stays predictable</div>

<!-- 3 equal columns using percentages + border-box -->
<div class="grid-row">
  <div class="grid-col">Column 1</div>
  <div class="grid-col">Column 2</div>
  <div class="grid-col">Column 3</div>
</div>
```

```css
.box-border {
  box-sizing: border-box;
  width: 250px;
  padding: 20px;
  border: 5px solid;
}

/* Recommended global reset */
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

## Why is it useful?

`box-sizing: border-box` is the foundation of every modern CSS layout system. It eliminates the most common source of layout bugs — element widths unexpectedly growing when padding or borders are added. By including this demo in EaseMotion CSS, contributors and users get an instant visual reference for why `border-box` is the recommended default, plus a ready-to-use global reset snippet. It aligns with EaseMotion CSS's philosophy of clean, minimal, and predictable styling.