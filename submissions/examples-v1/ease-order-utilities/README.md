# ease-order utilities

Flex order utilities to control the visual order of flex children.

## Usage
```html
<div class="ease-order-first">Appears first</div>
<div class="ease-order-last">Appears last</div>
<div class="ease-order-2">Appears second</div>
```

## Classes
| Class | CSS |
|---|---|
| `ease-order-first` | `order: -9999` |
| `ease-order-last` | `order: 9999` |
| `ease-order-none` | `order: 0` |
| `ease-order-1` through `ease-order-5` | `order: 1` through `order: 5` |

## Use Case
Reordering flex children for responsive layouts without changing HTML structure.