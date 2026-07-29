# Physical-to-Logical Property Transpiler

## 1. What does this do?

Converts physical CSS properties (`margin-left`, `right`, etc.) into their logical property equivalents (`margin-inline-start`, `inset-inline-end`, etc.) using a configurable mapping, passing through anything with no equivalent.

## 2. How is it used?

```scss
@include emit-logical-properties(
  (
    margin-left: 1rem,
    padding-right: 2rem,
    display: flex,
  ),
  $selector: ".card"
);
```

Applied in markup as:

```html
<div class="card"></div>
```

## 3. Why is it useful?

One declaration map compiles to direction-aware CSS, so layouts adapt automatically to RTL and multilingual contexts without duplicated rules — matching EaseMotion CSS's philosophy of small, declarative, compile-time-only utilities.
