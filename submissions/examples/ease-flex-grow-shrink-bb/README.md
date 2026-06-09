# ease-flex-grow-shrink

Flex grow and shrink utilities to control how flex children expand or contract.

## Usage
```html
<div class="ease-flex-grow-1">Expands to fill space</div>
<div class="ease-flex-shrink-0">Won't shrink</div>
<div class="ease-flex-1">Equal width shorthand</div>
```

## Classes
| Class | CSS |
|---|---|
| `ease-flex-grow-0` | `flex-grow: 0` |
| `ease-flex-grow-1` | `flex-grow: 1` |
| `ease-flex-shrink-0` | `flex-shrink: 0` |
| `ease-flex-shrink-1` | `flex-shrink: 1` |
| `ease-flex-1` | `flex: 1 1 0%` |

## Use Case
Controlling how flex items grow or shrink within a flex container.
`ease-flex-1` is ideal for equal-width columns in a flex row.