# :has() Sibling Motion

Three patterns demonstrating CSS `:has()` driving animation on ancestor and sibling elements.

## Demos

| Class | Selector used | Effect |
|---|---|---|
| `ease-has-spotlight` | `:has(.card:hover) .card:not(:hover)` | Dims non-hovered cards |
| `ease-has-form` | `:has(input:not(:placeholder-shown):invalid)` | Shakes submit button when any input is invalid |
| `ease-has-layout` | `:has(input:checked)` | Pushes sidebar and main content via checkbox toggle |

## Usage

```html
<div class="ease-has-spotlight">
  <div class="card">Alpha</div>
  <div class="card">Beta</div>
</div>
```

Closes #9601
