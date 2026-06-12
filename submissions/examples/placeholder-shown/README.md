# :placeholder-shown Floating Label

## What does this do?

Creates a floating label pattern using the `:placeholder-shown` pseudo-class — the label animates from inside the input to above it when the user starts typing, without JavaScript.

## How is it used?

```html
<div class="field">
  <input placeholder=" " />
  <label>Full Name</label>
</div>
```

```css
.label {
  position: absolute;
  top: 50%;
  left: 0.85rem;
  translate: 0 -50%;
  transition: all 0.25s;
}

.input:not(:placeholder-shown) + .label,
.input:focus + .label {
  top: 0;
  translate: 0 -50%;
  font-size: 0.8rem;
  color: blue;
}
```

## Why is it useful?

Floating labels save vertical space while maintaining clear labeling — a popular pattern in modern form design. Using `:placeholder-shown` instead of JavaScript class toggling keeps the implementation pure CSS, simpler, and more accessible. This aligns with EaseMotion CSS's philosophy of human-readable, zero-dependency interactions.
