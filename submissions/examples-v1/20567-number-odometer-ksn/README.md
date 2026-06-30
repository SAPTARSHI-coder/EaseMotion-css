# Odometer Rolling Number Display (ease-number-odometer)

### 1. What does this do?

This is a numeric layout component where changes in numerical values animate like a physical mechanical odometer by scrolling digits vertically inside a hidden-overflow column.

### 2. How is it used?

Wrap stacked digit spans (0-9) inside a `.odometer-digit` column:

```html
<div class="odometer-container">
  <span class="odometer-separator">$</span>
  <div class="odometer-digit">
    <div class="odometer-digit-inner">
      <span>0</span>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
      <span>6</span>
      <span>7</span>
      <span>8</span>
      <span>9</span>
    </div>
  </div>
</div>
```

Use JavaScript to update the `transform: translateY()` on `.odometer-digit-inner` (e.g. `translateY(-30%)` for digit `3`) when values change.

### 3. Why is it useful?

It fits the animation-first philosophy of EaseMotion CSS by creating smooth mechanical number-transition physics on state changes using clean CSS transforms on absolute-positioned inner containers, keeping layouts responsive and layout-shift free.
