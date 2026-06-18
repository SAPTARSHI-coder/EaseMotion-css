# CSS Gradient Picker

Gradient swatch picker using radio buttons and `:checked` + `~` combinator.

## Usage
```html
<div class="gradient-picker">
  <input type="radio" id="g1" class="gradient-picker__input">
  <label for="g1" class="gradient-picker__swatch" style="--g: linear-gradient(...)"></label>
  <div class="gradient-picker__preview"></div>
</div>
```

## Why EaseMotion CSS?
Demonstrates CSS-only gradient selection with live preview using sibling selectors.
